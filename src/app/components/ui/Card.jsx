"use client"

import { useContext } from 'react';
import { Button } from "@/components/ui/button"
import { GraduationCap } from 'lucide-react';
import Image from 'next/image'
import im1 from '../../assets/CourseCategories/CC1.png';
import im2 from '../../assets/CourseCategories/CC2.png';
import im3 from '../../assets/CourseCategories/CC3.png';
import im4 from '../../assets/CourseCategories/CC4.png';
import im5 from '../../assets/CourseCategories/CC5.png';
import im6 from '../../assets/CourseCategories/CC6.png';
import im7 from '../../assets/CourseCategories/CC7.png';
import im8 from '../../assets/CourseCategories/CC8.png';
import im9 from '../../assets/CourseCategories/CC9.png';
import im10 from '../../assets/CourseCategories/CC10.png';
import Link from 'next/link'
import CoursesProvider from '@/app/context/CoursesProvider';


let CardData = [
    {
        "image": im1,
        "heading": "Interior Textures",
        "description": "11 Courses"
    },
    {
        "image": im2,
        "heading": "Exterior Textures",
        "description": "3 Courses"
    },
    {
        "image": im3,
        "heading": "Mechanisation",
        "description": "1 Course"
    },
    {
        "image": im4,
        "heading": "Wallpaper",
        "description": "1 Course"
    },
    {
        "image": im5,
        "heading": "Wood Finishes",
        "description": "2 Courses"
    },
    {
        "image": im6,
        "heading": "Wall Paint",
        "description": "1 Course"
    },
    {
        "image": im7,
        "heading": "Waterproofing",
        "description": "1 Course"
    },
    {
        "image": im8,
        "heading": "Metal",
        "description": "1 Course"
    },
    {
        "image": im9,
        "heading": "Sanitization",
        "description": "1 Course"
    },
    {
        "image": im10,
        "heading": "Soft Skill",
        "description": "2 Courses"
    }
]

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../../../components/ui/carousel"
import { CourseContext } from '@/app/context/CoursesProvider';

const Card = () => {

    const { typeCounts } = useContext(CourseContext);

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
                            CardData.map((items, index) => {
                                return (
                                    <CarouselItem key={index} className="pl-1  md:basis-1/2 lg:basis-1/3">
                                        <div className="p-1">
                                            <div>
                                                <div className="aspect-square  cursor-pointer">
                                                    <span> <Image src={items.image} alt="Description" /></span>
                                                    <span className="flex text-[20px] cursor-pointer  justify-center font-semibold"> {items.heading}</span>
                                                    <div className='flex text-[15px]  justify-center gap-3'>
                                                        <span> <GraduationCap /></span>
                                                        <span>{items.description}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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