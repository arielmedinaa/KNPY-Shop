import React, { useState } from 'react';
import KnpyLogo from '../assets/knpy-logo.webp';
import { Menu, X, ChevronDown } from 'lucide-react';

const TopNavLanding = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="w-full border-none">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0 flex items-center">
                        <div className="flex items-center space-x-2">
                            <img src={KnpyLogo} alt="logo" className="h-20 w-20 object-contain mr-2" />
                        </div>
                    </div>
                    <div className="hidden lg:flex items-center space-x-8 flex-1 justify-center">
                        <a
                            href="#"
                            className="text-gray-300 hover:text-lime-200 px-3 py-2 text-sm font-medium transition-colors duration-200"
                        >
                            Productos
                        </a>
                        <a
                            href="#"
                            className="text-gray-300 hover:text-lime-200 px-3 py-2 text-sm font-medium transition-colors duration-200"
                        >
                            Categorías
                        </a>
                        <a
                            href="#"
                            className="text-gray-300 hover:text-lime-200 px-3 py-2 text-sm font-medium transition-colors duration-200"
                        >
                            Ofertas
                        </a>
                        <div className="relative group">
                            <button className="text-lime-700 bg-lime-100 rounded-lg hover:text-lime-800 hover:bg-lime-200 px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center">
                                Soporte
                                <ChevronDown className="ml-1 h-4 w-4" />
                            </button>
                        </div>
                        <a
                            href="#"
                            className="text-gray-300 hover:text-lime-200 px-3 py-2 text-sm font-medium transition-colors duration-200"
                        >
                            Acerca de
                        </a>
                    </div>
                    <div className="hidden lg:block">
                        <div className='bg-lime-600 hover:bg-lime-700 rounded-lg '>

                            <p className="bg-lime-600 hover:bg-lime-700 bg-gradient-to-r from-lime-200 to-lime-400 bg-clip-text text-transparent px-4 py-1 open-shop-btn">
                                Abrir Tienda
                            </p>
                        </div>
                    </div>
                    <div className="lg:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-300 hover:text-lime-200 focus:outline-none focus:text-white p-2"
                        >
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
                {isMenuOpen && (
                    <div className="lg:hidden border-t border-gray-700">
                        <div className="px-2 pt-4 pb-3 space-y-1">
                            <a
                                href="#"
                                className="text-gray-300 hover:text-lime-200 block px-3 py-2 text-base font-medium transition-colors duration-200"
                            >
                                Productos
                            </a>
                            <a
                                href="#"
                                className="text-gray-300 hover:text-lime-200 block px-3 py-2 text-base font-medium transition-colors duration-200"
                            >
                                Categorías
                            </a>
                            <a
                                href="#"
                                className="text-gray-300 hover:text-lime-200 block px-3 py-2 text-base font-medium transition-colors duration-200"
                            >
                                Ofertas
                            </a>
                            <a
                                href="#"
                                className="text-gray-300 hover:text-lime-200 block px-3 py-2 text-base font-medium transition-colors duration-200"
                            >
                                Soporte
                            </a>
                            <a
                                href="#"
                                className="text-gray-300 hover:text-lime-200 block px-3 py-2 text-base font-medium transition-colors duration-200"
                            >
                                Acerca de
                            </a>
                            <div className="pt-4 pb-2">
                                <button className="w-full bg-lime-400 hover:bg-lime-700 text-lime-900 px-4 py-2 rounded-lg transition-colors duration-200 open-shop-btn">
                                    Abrir Tienda
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default TopNavLanding;