import type { NextPage } from "next";
import { trpc } from "../utils/trpc";
import { Listings } from '../components'


const Home: NextPage = () => {
  const storeData = trpc.useQuery(["listings.all"])



  return (
    <>
  
      <main className="container mx-auto flex flex-col items-center justify-center min-h-screen p-4">
        {/* {
          storeData.data ? <Listings.List storeData={storeData.data} /> : null
        } */}
      </main>
    </>
  );
};


export default Home;
