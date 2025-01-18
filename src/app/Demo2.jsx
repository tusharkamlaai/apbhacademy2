"use client"

import { useState } from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselNext,
    CarouselPrevious,
    CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card"
import Image from 'next/image'
import { Button } from '@/components/ui/button';


import t2 from '../../src/app/assets/Training/t2.png';
import t1 from '../../src/app/assets/Training/t1.png';
import t3 from '../../src/app/assets/Training/t3.png';
import t4 from '../../src/app/assets/Training/t4.png';
import t5 from '../../src/app/assets/Training/t5.png';




const images = [
    { src: t2, alt: 'Training Image 1', description: "An academy to develop skills and provide a platform for success" },
    { src: t1, alt: 'Training Image 2', "description": "A world of immense learning and growth" },
    { src: t3, alt: 'Training Image 3', description: 'Ventilated and bright classrooms for theory based session' },
    { src: t4, alt: 'Training Image 4', "description": "Inspiration zone with latest range of designs and textures" },
    { src: t5, alt: 'Training Image 5', "description": "Practical demo trainings at the practical zone" },
];

const Demo2 = () => {

    return (
        <>
            <div className='text-center  lg:mt-[2rem]'>
                <span className='block text-gray-700 text-2xl mb-10 font-semibold'>Our Training</span>
            </div>
            <div className="flex justify-center items-center cursor-pointer">
                <Carousel className="w-[70%] lg:w-[80%]">
                    <CarouselContent className="-ml-1">
                        {
                            images.map((items, index) => {
                                return (
                                    <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                                        <div className="max-w-sm lg:h-[350px] h-[300px] rounded-xl overflow-hidden border border-gray-200 bg-gradient-to-b from-white to-purple-50 hover:scale-105 transform transition duration-300 ease-in-out">
                                            <div className="relative w-full lg:h-[250px] h-[170px] overflow-hidden">
                                                <Image
                                                    className="w-full h-full object-cover rounded-t-xl transition-transform duration-300 ease-in-out hover:scale-110"
                                                    src={items.src}
                                                    alt={items.alt}
                                                />

                                            </div>
                                            <div className="px-6 py-4 flex-1 flex flex-col">
                                                <div className="font-semibold text-[15px] text-gray-800 mb-2 text-center">
                                                    {items.description}
                                                </div>
                                            </div>
                                        </div>
                                    </CarouselItem>
                                )
                            })
                        }
                    </CarouselContent>
                    <CarouselPrevious/>
                    <CarouselNext />
                </Carousel>
            </div>

            <div className='text-center mt-[3rem]'>
                <span className='block text-gray-700 lg:text-2xl text-xl mb-2 font-semibold'>For Online Training and Certification</span>
            </div>
            <div className='text-center mt-[35px] mb-5'>
                <Button variant="outline" className="w-[15rem] bg-purple-50 h-[3rem]" >Visit Vitual BH Academy</Button>
            </div>
        </>
    )
}

export default Demo2