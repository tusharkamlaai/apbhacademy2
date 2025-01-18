'use client'
import { useEffect, useState } from "react";
import Image from 'next/image';
import c1 from '../../assets/MainCar/c1.jpg';
import c2 from '../../assets/MainCar/c2.jpg';
import c3 from '../../assets/MainCar/c3.jpg';

const PremiumCarousel = () => {
    const images = [c1, c2, c3];
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);

    const handleDotClick = (index) => {
        setCurrentImage(index);
    };

    return (
        <div className="relative w-full lg:mt-24 mt-20 lg:h-[630px] h-[330px] overflow-hidden">
            {/* Images */}
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                        index === currentImage ? "opacity-100" : "opacity-0"
                    }`}
                >
                    <Image
                        src={image}
                        alt={`Carousel ${index + 1}`}
                        className="w-full h-full object-fit"
                        style={{ objectFit: "fill" }}
                    />
                </div>
            ))}

            {/* Dot Navigation */}
            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleDotClick(index)}
                        className={`w-4 h-4 rounded-full ${
                            index === currentImage ? "bg-blue-500" : "bg-gray-300"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

           
        </div>
    );
};

export default PremiumCarousel;
