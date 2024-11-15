

import React from 'react';
import heroImage from '../images/hero.png';  // Ensure the image path is correct


function Hero() {
    return (
        <main className="dark:bg-gray-800 bg-white relative overflow-hidden min-h-screen">
           
        

            <div className="bg-white dark:bg-gray-800 flex relative z-50 items-center overflow-hidden">
                <div className="container mx-auto px-2 flex relative py-5 lg:py-10 overflow-hidden">
            
                    <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
                        <span className=" mb-12"></span>
                        <h1 className="font-bebas-neue uppercase text-5xl sm:text-6xl lg:text-7xl font-black flex flex-col leading-none dark:text-white text-gray-800 mt-10">
                            Be on
                            <span className="text-4xl sm:text-5xl lg:text-6xl">Time</span>
                        </h1>
                        <p className="text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-gray-800 dark:text-white mb-5 mt-5 tracking-wide uppercase font-poppins bg-gradient-to-r from-pink-500 to-red-500 text-transparent bg-clip-text">
  Did you know? 
   <br></br> &nbsp; &nbsp; &nbsp;  You're Worth
</p>



                        <span className="text-4xl sm:text-5xl lg:text-6xl">A Happy Life:</span>
                        <div className="flex mt-8 space-x-4">
                            <a href="#" className="uppercase py-3 px-6 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md hover:bg-pink-400 transition-all">
                                Get started
                            </a>
                            <a href="#" className="uppercase py-3 px-6 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 dark:text-white hover:bg-pink-500 hover:text-white text-md transition-all">
                                Read more
                            </a>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="hidden sm:block sm:w-2/3 lg:w-2/3 relative overflow-hidden mt-0">
                        <img 
                            src={heroImage} 
                            className="w-full h-auto max-w-xl md:max-w-xl m-auto object-cover" 
                            alt="Hero" 
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Hero;
