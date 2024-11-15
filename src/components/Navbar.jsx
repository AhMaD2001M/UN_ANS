import React from 'react';

const Navbar = () => {
    return (
        <header className="h-20 sm:h-25 flex items-center z-30 w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 shadow-xl">
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* ANS Logo with New Font and Colors */}
                <div className="uppercase text-white font-semibold text-5xl sm:text-6xl relative">
                    <span className="text-indigo-400">A</span><span className="text-teal-400">N</span><span className="text-pink-400">S</span>
                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-indigo-400 via-teal-400 to-pink-400 transform scale-x-0 hover:scale-x-100 transition-all duration-300"></div>
                </div>

                {/* Navbar Links */}
                <div className="flex items-center">
                    <nav className="font-sans text-white uppercase text-lg lg:flex items-center space-x-8 hidden">
                        <a href="#" className="py-2 px-6 flex hover:text-pink-400 transition-all ease-in-out duration-300 transform hover:scale-110">Home</a>
                        <a href="#" className="py-2 px-6 flex hover:text-pink-400 transition-all ease-in-out duration-300 transform hover:scale-110">Blog</a>
                        <a href="#" className="py-2 px-6 flex hover:text-pink-400 transition-all ease-in-out duration-300 transform hover:scale-110">Section's</a>
                        <a href="#" className="py-2 px-6 flex hover:text-pink-400 transition-all ease-in-out duration-300 transform hover:scale-110">Contact</a>
                    </nav>

                    {/* Mobile Hamburger Menu */}
                    <button className="lg:hidden flex flex-col ml-4">
                        <span className="w-6 h-1 bg-white mb-1"></span>
                        <span className="w-6 h-1 bg-white mb-1"></span>
                        <span className="w-6 h-1 bg-white mb-1"></span>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
