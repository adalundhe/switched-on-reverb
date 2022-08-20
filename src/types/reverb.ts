
export interface ListingPhoto{
    full: string;
    large: string;
    small: string;
    thumbnail: string;
}

export interface Listing {
    id?: string;
    reverbId: number;
    make: string;
    model: string;
    finish: string;
    year: string;
    title: string;
    created_at: Date;
    description: string;
    condition: string;
    price: number;
    currency: string;
    available: number;
    accepting_offers: boolean;
    state: string;
    photos: ListingPhoto[];
}


export interface ReverbStoreListings {
    store_name: string;
    listings_count: number;
    shipping_to: string;
    current_page: number;
    pages: number;
    listings: Listing[];
}