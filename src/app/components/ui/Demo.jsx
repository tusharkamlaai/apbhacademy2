'use client'


import React, { useEffect, useState } from "react";
import Glide from "@glidejs/glide";
import Image from 'next/image'
export default function SliderCard(props) {


    const [CarData, setCarData] = useState(props.slides)
    console.log(CarData, 'w45w')


    useEffect(() => {
        const slider = new Glide(".glide-06", {
            type: "slider",
            focusAt: "center",
            perView: 1,
            autoplay: 3000,
            animationDuration: 700,
            gap: 0,
            classes: {
                nav: {
                    active: "[&>*]:bg-yellow-700",
                },
            },
        }).mount();

        return () => {
            slider.destroy();
        };
    }, []);

    return (
        <>
            <div>
                <div className="relative mx-auto lg:w-[50%] lg:h-[50%] md:w-[50%] md:h-[50%] w-[90%] h-[90%] overflow-hidden bg-white rounded glide-06 ">
                    <div className="overflow-hidden" data-glide-el="track">
                        <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
                            {CarData && CarData.map((item, index) => (
                                <li key={index} className="relative w-full">
                                    <Image
                                        src={item.src}
                                        alt={item.description}
                                        layout="responsive"
                                        width={500} // Set these to the aspect ratio of your images
                                        height={300}
                                        className="w-full h-auto max-w-full max-h-full m-auto"
                                    />
                                    <div className="absolute bottom-0 left-0 w-full p-2 flex justify-center items-end">
                                        <span className="text-white lg:text-lg text-sm text-center font-bold bg-black/50 p-1 rounded">{item.description}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div
                        className="absolute left-0 right-0 flex items-center justify-between w-full h-0 px-4 top-1/2 transform -translate-y-1/2"
                        data-glide-el="controls"
                    >
                        <button
                            className="inline-flex items-center justify-center w-8 h-8 transition duration-300 border rounded-full border-slate-700 bg-white/20 text-slate-700 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
                            data-glide-dir="<"
                            aria-label="prev slide"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-5 h-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                                />
                            </svg>
                        </button>
                        <button
                            className="inline-flex items-center justify-center w-8 h-8 transition duration-300 border rounded-full border-slate-700 bg-white/20 text-slate-700 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
                            data-glide-dir=">"
                            aria-label="next slide"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-5 h-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                />
                            </svg>
                        </button>
                    </div>
                    <div
                        className="relative bottom-0 left-0 right-0 flex items-center justify-center w-full gap-2 p-4"
                        data-glide-el="controls[nav]"
                    >
                        {Array.from({ length: 4 }).map((_, index) => (
                            <button
                                key={index}
                                className="p-2 group"
                                data-glide-dir={`=${index}`}
                                aria-label={`goto slide ${index + 1}`}
                            >
                                <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
