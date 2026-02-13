import React from "react";

const Navbar = ()=>{
     return(
        <header className='bg-white'>
            <nav className='max-w-[1400px], mx-auto , px-10 h-[14vh] , flex justify-between items-center'>
                {/* logo */}
                <a href="#" className='text-3xl font-bold'>
                    Gr<span className="text-orange-500 uppercase">o</span>cify
                    </a>

                 {/* Desktop Menu */}
                  <ul className='flex items-center gap-x-15'>
                    <li>
                        <a href="#" className='font-semibold tracking-wider text-orange-500 ' >Home</a>
                    </li>
                     <li>
                        <a href="#" className='font-semibold tracking-wider text-zinc-800 '>about Us</a>
                    </li>
                     <li>
                        <a href="#" className='font-semibold tracking-wider text-zinc-800'>Process</a>
                    </li>
                     <li>
                        <a href="#" className='font-semibold tracking-wider text-zinc-800'>Contact Us</a>
                    </li>
                  </ul>
            </nav>
        </header>

     )
}

export default Navbar