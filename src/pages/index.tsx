import type { NextPage } from "next";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { Header, Footer } from "../components";


const Home: NextPage = () => {


  return (
    <div>
      <Header />
      <main className="flex justify-center align-center bg-black">
        <img 
          src="//cdn.shopify.com/s/files/1/2535/0708/files/REPAIR_BANNER_1600x1600_CLR_903044f6-6d0b-4520-9a95-f77a0bf7e561_4472x.jpg?v=1572984283" 
          className="object-cover w-screen h-screen flex justify-center align-center"
        />
        <div className="h-14 px-2 w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex justify-center align-center">
            <div className="bg-black text-white text-[12px] text-center px-4 py-3 flex flex-col justify-center align-center">
              <h1 className="text-[14px]">
                We've moved!
              </h1>
              <h1>
                Our new address is 5013 Duval St., Austin TX 78751
              </h1>
              <p className="text-[10px] mt-1">
                Feel free to schedule an appointment, 7 days a week.
              </p>
              <p className="text-[10px] mb-4">
                <FontAwesomeIcon icon={faPhone} className="pr-1"/>
                (512) 565-0663
              </p>
              <div className="mb-2">
                <a href={"/products"} className="w-3/5 px-4 py-2 border border-white-500 font-[Raleway]">
                  {"Our Inventory".toLocaleUpperCase()}
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};


export default Home;
