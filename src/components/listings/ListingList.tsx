import { ReverbStoreListings } from '../../types/reverb';
import { ListingCard } from './ListingCard';


export const ListingList =({ storeData }: {storeData: ReverbStoreListings}) => 
<div>
{
    storeData.listings.map((listing, idx) => 
        <div key={`switched-on-listing-${idx}`}>
            <ListingCard listing={listing} />
        </div>
    )
}
</div>