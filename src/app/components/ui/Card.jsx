"use client"

import { useContext } from 'react';
import { Button } from "@/components/ui/button"
import { GraduationCap } from 'lucide-react';
import Image from 'next/image'
import Link from 'next/link'
import { CourseContext } from '@/app/context/CoursesProvider';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../../../components/ui/carousel"

const Card = () => {

    const { data, perCourse, handleSelectType } = useContext(CourseContext);


    return (
        <>
            <div className='text-center lg:mt-[4rem] mt-[4rem]'>
                <span className="block text-gray-700 text-2xl mb-2 font-semibol dark:text-white">Explore Course Categories</span>
                <span>Courses available in 11 languages</span>
            </div>

            <div className="flex justify-center items-center mt-8 cursor-pointer prevent-select">
                <Carousel className="w-[70%] ">
                    <CarouselContent className="-ml-1">
                        {
                            data.map((items, index) => {
                                return (
                                    <CarouselItem key={index} className="pl-1  md:basis-1/2 lg:basis-1/3">
                                        <button onClick={() => {
                                            handleSelectType(items.type);
                                            perCourse();
                                        }}

                                        >
                                            <div className="p-1">
                                                <div>
                                                    <div className="aspect-square  cursor-pointer">
                                                        <span> <Image src={items.image} alt="Description" /></span>
                                                        <span className="flex text-[20px] cursor-pointer  justify-center font-semibold"> {items.type}</span>
                                                        <div className='flex text-[15px]  justify-center gap-3'>
                                                            <span> <GraduationCap /></span>
                                                            <span>{items.count} Courses</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </button>
                                    </CarouselItem>
                                )
                            })
                        }
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
            <div className='text-center mt-[35px] mb-5'>
                <Link href='/courses'> <Button variant="outline" className="dark:text-black dark:hover:text-white w-[15rem] bg-purple-50 h-[3rem]" >Browse All Courses</Button></Link>
            </div>
        </>
    )
}

export default Card

// variant="outline" className="w-[15rem] h-[3rem]