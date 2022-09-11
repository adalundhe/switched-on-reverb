import { NextPage } from "next";
import { trpc } from "../utils/trpc";
import { Header, Footer, Listings } from "../components";
import { ContentMode } from "../components/header";


const Products: NextPage = () => {
    
    const storeData = trpc.useQuery(["listings.all"]);

    return (
        <div>
        
            <Header headerMode={ContentMode.light} />
            <main className="flex justify-center align-center bg-white h-screen">
                {
                    storeData.data ? <Listings.List listings={storeData.data.listings} /> : null
                }
            </main>
            <Footer footerMode={ContentMode.light} />
        </div>
    )
}

export default Products;