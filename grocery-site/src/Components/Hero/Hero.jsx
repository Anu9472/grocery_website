import React from "react";
import grocery from "../../assets/grocery.png"
import Button from "../Button/Button"

const Hero = ()=>{
    return(
        <section>
             
<div className='"max-w-[1400px]" bg-white min-h-screen mx-auto px-10 flex items-center pt-25  '>
            {/* Hero Content */}
            <div className="flex-1">
                <span className='bg-orange-100 text-orange-600 text-lg px-5 py-2 rounded-full'>Export Best Quality... </span>
                  <h1 className='text-7xl/20 font-bold mt-4 '>
                      Tasty Organic <br/><span className='text-orange-500 '>Fruits</span> & <span className='text-orange-500 '>Veggies</span><br/>In Your City
                  </h1>
                  <p className='text-zinc-600 text-lg max-w-[530 px] mt-10 mb-15 '>  
                    Bred for a high content of beneficial substance. Our Products are all fresh and healthy 
                  </p>
                 <Button content= "Shop Now"/>
            </div>
                  
                  {/* Hero Image */}

                  <div className="flex-1">
                    <img src={grocery} alt="Hero Image" />
                  </div>


</div>

        </section>
    )
}

export default Hero