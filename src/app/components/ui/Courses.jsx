"use client"

import { useState, useEffect } from "react"
import { Video, BrickWall, Users } from "lucide-react";
import { courses } from "../data/data";

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

const Courses = () => {

    const [data, setData] = useState(courses);

    useEffect(() => {
        setData(data)
    })

    const courseType = [...new Set(data.map((items) => items.type))]
    console.log(courseType)

    return (
        <>
            <div className='text-center '>
                <span className='block text-gray-700 text-2xl mb-2 font-semibold'>All Courses</span>
            </div>
            <div>
                <Tabs defaultValue="account" className="w-full">
                    <TabsList className="grid w-full lg:grid-cols-10 grid-cols-3">
                        {
                            courseType.map((type, index) => {
                                return (
                                    <TabsTrigger value="Wallpaper" key={index}>{type}</TabsTrigger>
                                )
                            })
                        }

                        {/* <TabsTrigger value="password">Exterior Textures</TabsTrigger>
                        <TabsTrigger value="password">Interior Textures</TabsTrigger>
                        <TabsTrigger value="password">Wood Finishes</TabsTrigger>
                        <TabsTrigger value="password">Mechanisation</TabsTrigger>
                        <TabsTrigger value="password">Sanitization</TabsTrigger>
                        <TabsTrigger value="password">Wall Paint</TabsTrigger>
                        <TabsTrigger value="password">Metal</TabsTrigger>
                        <TabsTrigger value="password">Soft Skill</TabsTrigger> */}
                    </TabsList>
                    <TabsContent value="Wallpaper">
                    </TabsContent>
                </Tabs>

            </div>
            <div className="px-5 flex justify-center mt-10">
                <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-4">
                    {
                        data.map((items, index) => {
                            return (
                                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden max-w-sm">
                                    <img
                                        src={items.imageUrl}
                                        alt="Property Image"
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-4">
                                        <div className="flex items-center space-x-2 text-gray-500 mb-2">
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-800">
                                            {items.name}
                                        </h3>
                                        <p className="text-sm mt-2 text-gray-900">{items.description}</p>
                                        <div className="mt-3">
                                            <div className="flex gap-3">
                                                <div className="text-sm text-gray-500 ml-1 flex gap-3">
                                                    <span><Video /></span>
                                                    <span>{items.videos} Videos</span>
                                                </div>
                                                <div className="text-sm text-gray-500 ml-1 flex gap-2">
                                                    <span><BrickWall style={{ height: "20px" }} /></span>
                                                    <span>{items.type}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <hr className="mt-3" />
                                        <div className="flex gap-2 mt-3">
                                            <span className="text-sm"><Users /></span>
                                            <span className="text-sm">{items.peopleCertified} People have successfully certified in this course</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
    
                </div>
            </div>
        </>
    )
}

export default Courses