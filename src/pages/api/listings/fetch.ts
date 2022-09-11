import axios from "axios"
import bcrypt from 'bcrypt'
import type { NextApiRequest, NextApiResponse } from "next"
import { env } from "../../../env/server.mjs";
import { ListingPhoto, PrismaClient } from "@prisma/client";
import { Listing } from "@prisma/client";

export default async function fetchListings(
  req: NextApiRequest,
  res: NextApiResponse
) {

    const apiTokenMatch = await bcrypt.compare(env.SWITCHED_ON_API_SECRET, req.headers?.api_token as string)
    const authTokenMatch = await bcrypt.compare(env.SWITCHED_ON_AUTH_SECRET, req.headers?.auth_token as string)

    if (apiTokenMatch && authTokenMatch) {
        // Signed in
        let reverbResponse = await axios.get(`https://api.reverb.com/api/listings?shop=switched-on-music-electronics`, {
            headers: {
            Authorization: `Bearer ${env.REVERB_API_KEY}`,
            'Content-Type': 'applicaiton/har+json'
            }
        })

        let data = reverbResponse.data;
        let allListings: Listing[] = []

        for (let page=data.current_page; page<=data.total_pages + 1; page++){

            let listingPhotos: ListingPhoto[] = [];

            const listings = data.listings.map((listing: typeof data.listings[0]) => {

                let photos = listing.photos.map((photo: typeof listings.photos[0]) => photo._links);
                photos = photos.map((photo: typeof photos[0]) => ({
                    full: photo.full.href,
                    large: photo.large_crop.href,
                    small: photo.small_crop.href,
                    thumbnail: photo.thumbnail.href,
                    reverbId: listing.id
                }))

                listingPhotos = [
                    ...listingPhotos,
                    ...photos
                ]
        
                return {
                    item: {
                        reverbId: listing.id,
                        make: listing.make,
                        model: listing.model,
                        finish: listing.finish,
                        year: listing.year,
                        title: listing.title,
                        createdAt: new Date(listing.created_at),
                        description: listing.description,
                        condition: listing.condition,
                        price: parseFloat(listing.price.amount),
                        currency: listing.price.currency,
                        available: listing.inventory,
                        acceptingOffers: listing.offers_enabled,
                        state: listing.state.slug,
                    },
                    photos: photos
                }
            })

            const client = new PrismaClient();

            await client.listing.createMany({
                data: listings.map((listing: typeof listings[0]) => listing.item),
                skipDuplicates: true
            })

            await client.listingPhoto.createMany({
                data: listingPhotos,
                skipDuplicates: true
            })

            allListings = [
                ...allListings,
                ...listings.map((listing: typeof listings[0]) => ({
                    ...listing.item,
                    photos: listing.photos
                }))
            ]

            if (page <= data.total_pages){
                reverbResponse = await axios.get(`https://api.reverb.com/api/listings?shop=switched-on-music-electronics&page=${page}`, {
                    headers: {
                    Authorization: `Bearer ${env.REVERB_API_KEY}`,
                    'Content-Type': 'applicaiton/har+json'
                    }
                })

                data = reverbResponse.data;
            }     
        }

        res.status(200).json({
            message: "OK",
            data: allListings
        })

    } else {
        // Not Signed in
        res.status(401).json({
            error: "Unauthorized."
        })
    }
    res.end()
    

}