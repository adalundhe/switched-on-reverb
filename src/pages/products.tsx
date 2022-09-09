import { NextPage } from "next";
import { trpc } from "../utils/trpc";
import { Header, Footer } from "../components";

const Products: NextPage = () => {
    const storeData = trpc.useQuery(["listings.all"])
    console.log(storeData)

    return (
        <div>
        {/* {
          storeData.data ? <Listings.List storeData={storeData.data} /> : null
        } */}
            <Header />
            <main className="flex justify-center align-center bg-black">
                <img 
                src="//cdn.shopify.com/s/files/1/2535/0708/files/REPAIR_BANNER_1600x1600_CLR_903044f6-6d0b-4520-9a95-f77a0bf7e561_4472x.jpg?v=1572984283" 
                className="object-cover w-screen h-screen flex justify-center align-center"
                />
                <div className="h-14 px-2 w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="flex justify-center align-center">
                        <div className="bg-black text-white text-[12px] text-center px-4 py-3 flex flex-col justify-center align-center">
            
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Products;