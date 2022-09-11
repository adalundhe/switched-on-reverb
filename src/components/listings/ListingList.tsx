import { Listing, ListingPhoto } from '@prisma/client';
import { ListingCard } from './ListingCard';


export const ListingList =({ listings }: {listings: (Listing & {photos: ListingPhoto[]})[]}) => {

    return(
        <div className='sm:p-16 p-8 w-full h-full flex flex-col items-center'>
            <div className='sm:mt-2 mt-4'></div>
            <div className='w-full h-full overflow-hidden grid gap-16 grid-flow-row auto-rows-[minmax(min-content, max-content)] sm:grid-cols-4 grid-cols-1'>
            {
                listings.map((listing, idx) => 
                    <div key={`switched-on-listing-${idx}`} className="aspect-square text-black bg-white shadow-sm border border-black-thin p-4 h-full w-full">
                        <ListingCard listing={listing} />
                    </div>
                )
            }
            </div>
            <div className='border-t border-black-thin w-[80%]'></div>
        </div>
    )
}