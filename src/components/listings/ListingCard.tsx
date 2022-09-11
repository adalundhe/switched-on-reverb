import { Listing, ListingPhoto } from '@prisma/client';
import parse from 'html-react-parser';
import Image from 'next/image'



export const ListingCard = ({ listing }: {listing: Listing & {photos: ListingPhoto[]}}) => {

    const primaryPhoto = listing.photos[0]

    const listinDescription = parse(listing.description)

    return (
        <div className='w-full h-full flex flex-col items-center'>
            <Image src={primaryPhoto?.full as string} width="300%" height="300%" />

            {/* <p className='text-center pt-4 px-4'>{listing.title}</p> */}
            {/* <p>
                {listinDescription}
            </p> */}
        </div>
    )
}