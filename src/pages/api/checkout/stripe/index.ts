import { NextApiRequest, NextApiResponse } from 'next'

import { CURRENCY } from '../../../../config'
import { formatAmountForStripe } from '../../../../utils/stripe-helpers'
import { PrismaClient } from '@prisma/client'
import Stripe from 'stripe'
import { env } from '../../../../env/client.mjs'

 
const stripe = new Stripe(env.STRIPE_SECRET_KEY!, {
  // https://github.com/stripe/stripe-node#configuration
  apiVersion: '2022-08-01',
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {

    const client = new PrismaClient();

    for(const orderItem of req.body.orderItems){

        try {

            const listingItem = await client.listing.findUnique({
                where: {
                    id: orderItem.id
                }
            })
            
            // Create Checkout Sessions from body params.
            const params: Stripe.Checkout.SessionCreateParams = {
                submit_type: 'pay',
                payment_method_types: ['card'],
                billing_address_collection: 'auto',
                shipping_address_collection: {
                  allowed_countries: ['US', 'CA'],
                },
                line_items: [
                {
                    name: listingItem?.title as string,
                    amount: formatAmountForStripe(orderItem.amount, CURRENCY),
                    currency: CURRENCY,
                    quantity: orderItem.amount,
                },
                ],
                success_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
                cancel_url: `${req.headers.origin}/cancel`,
            }
            const checkoutSession: Stripe.Checkout.Session = await stripe.checkout.sessions.create(params)

            if (listingItem){

                listingItem.available -= orderItem.amount
                if (listingItem.available < 1){
                    await client.listing.delete({
                        where: {
                            id: listingItem.id
                        }
                    })
                }
    
            }
        
            res.status(200).json(checkoutSession)
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Internal server error'
            res.status(500).json({ statusCode: 500, message: errorMessage })
        }

    }

   
  } else {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method Not Allowed')
  }
}