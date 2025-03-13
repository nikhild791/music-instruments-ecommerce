import { useState, useEffect } from "react";
import FBI from '../assests/images/1.jpg' 
import MI from '../assests/images/2.jpg' 

function Home() {
  const [products, setProducts] = useState([]);


  return (
    <section className="bg-gray-50 dark:bg-gray-900">
  <div className="flex flex-col items-center justify-center px-6 py-2 mx-auto md:h-screen lg:py-0">
   This is the home page
   <div className="grid grid-cols-3 gap-3 max-w-[1440px]">
    <div className="h-[234px] overflow-hidden"><img className="w-full h-auto" src={FBI} alt="" /></div>
    <div className="h-[234px] overflow-hidden"><img className="w-full h-auto" src={MI} alt="" /></div>
    <div className="h-[234px ] overflow-hidden"><img className="w-full h-auto" src={FBI} alt="" /></div>
   </div>
    </div>
    </section>
  );
}

export default Home;
