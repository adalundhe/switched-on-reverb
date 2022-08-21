import { Listing} from '../../types/reverb';
import parse from 'html-react-parser';
import Image from 'next/image'



export const ListingCard = ({ listing }: {listing: Listing}) => {

    const listinDescription = parse(listing.description)

    return (
        <div>
            <h2>{listing.title}</h2>
            <Image src={listing.photos[0]?.full as string} width="100%" height="100%" />
            <p>
                {listinDescription}
            </p>
        </div>
    )
}