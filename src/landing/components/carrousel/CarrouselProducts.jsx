import React, { useState, useEffect } from 'react';
import HoddieImg from "../../assets/hoddie1.webp";
import Hoddie2Img from "../../assets/hoddie2.webp";
import Hoddie3Img from "../../assets/hoddie3.webp";
import Hoddie4Img from "../../assets/hoddie4.webp";

const CarrouselProducts = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const products = [
        { name: "ACCESORIOS", color: "bg-blue-500", img: HoddieImg, type: "accessories" },
        { name: "PRENDAS", color: "bg-green-500", img: Hoddie2Img, type: "clothes" },
        { name: "CALZADOS", color: "bg-purple-500", img: Hoddie3Img, type: "shoes" },
        { name: "BOLSOS", color: "bg-pink-500", img: Hoddie4Img, type: "bags" },
        { name: "JOYERÍA", color: "bg-yellow-500", img: HoddieImg, type: "jewelry" },
        { name: "RELOJES", color: "bg-red-500", img: HoddieImg, type: "watches" }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) =>
                prevSlide === products.length - 1 ? 0 : prevSlide + 1
            );
        }, 2000);

        return () => clearInterval(interval);
    }, [products.length]);

    return (
        <>
            <div className='absolute z-[70] top-[90vh] left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <div className='absolute flex items-center justify-center w-80 z-[7001] top-[-2vh] text-lime-400 font-bold text-lg'>
                    {products[currentSlide].type}
                </div>
                <div className='w-80 h-72 flex overflow-hidden'>
                    <div
                        className='flex transition-transform duration-500 ease-in-out'
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                        {products.map((product, index) => (
                            <div
                                key={index}
                                className={`min-w-full h-full flex items-center justify-center text-white font-bold text-xl`}
                            >
                                <img src={product.img} alt="Product" className='h-96 w-auto -rotate-12' />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default CarrouselProducts