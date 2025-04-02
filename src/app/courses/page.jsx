'use client'

import { useContext } from 'react';
import { Menu, X, Video, BrickWall, Users } from 'lucide-react';
import { Input } from "@/components/ui/input";
import dynamic from "next/dynamic";
import { CourseContext } from '../context/CoursesProvider';
import { Fade } from "react-awesome-reveal";

const Page = () => {


    const { isOpen,
        data,
        selectedType,
        searchData,
        setSearchData,
        filterData,
        toggleSidebar,
        handleSelectType } = useContext(CourseContext)

    return (
        <div>
            {/* Sidebar */}
            <div className={`fixed dark:bg-customGray mt-[5.7rem] lg:mt-[6.6rem] inset-y-0 left-0 w-64 transition-transform bg-gray-100 shadow-xl z-10 ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
                <div className="flex justify-between items-center px-4 py-4 bg-purple-100 dark:bg-customGray">
                    <span className="text-black font-semibold dark:text-white">Courses List</span>
                    <button className="text-black md:hidden" onClick={toggleSidebar}>
                        <X />
                    </button>
                </div>
                <div className="flex flex-col p-4 space-y-4 overflow-y-auto max-h-[calc(100vh-200px)]">
                    <button onClick={() => handleSelectType(null)} className={`text-black p-2 w-full text-center font-semibold ${selectedType === null ? 'bg-teal-100 text-teal-900 ' : 'hover:bg-teal-50 dark:text-white dark:hover:text-black'}`}>
                        Show All Courses
                    </button>
                    {
                        data.map((item, index) => (
                            <button key={index} onClick={() => handleSelectType(item.type)} className={`flex dark:hover:bg-black space-x-2 p-2 text-teal-600 hover:bg-teal-50 ${selectedType === item.type ? 'bg-teal-100 text-teal-900 dark:bg-black' : 'text-black'}`}>
                                <span className="text-black text-[20px] dark:text-white">•</span>
                                <span className="flex-1 text-left text-black dark:text-white">{item.type}</span>
                            </button>
                        ))
                    }
                </div>
            </div>
            <Fade>
            {/* Main Content */}
            <div className={`flex-1 mt-[6.5rem] ${isOpen ? 'md:ml-64' : ''} transition-margin`}>
                <div className="flex gap-5">
                    <button className="text-xl md:hidden ml-[40px]" onClick={toggleSidebar}><Menu /></button>
                    <span className='lg:hidden md:hidden '>Courses List</span>
                </div>
                <div className="p-5">
                    <div className='text-center'>
                        <span className='block text-gray-700 text-2xl mb-2 font-semibold dark:text-white'>{selectedType || 'All Courses'}</span>
                        <span className='justify-center flex items-center mt-7'>
                            <Input
                                type="text"
                                onChange={(e) => setSearchData(e.target.value)} // Update search data
                                value={searchData}
                                placeholder="Search by name or type..."
                                className="lg:w-[30%] w-[80%] dark:border-white"
                            />

                        </span>
                    </div>
                    <div className="px-5 flex justify-center mt-10">
                        <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-4">
                            {filterData.length > 0 ? (
                                filterData
                                    .filter(item => !selectedType || item.type === selectedType) // Apply selected type filter
                                    .flatMap(item =>
                                        item.courses
                                            .filter(course =>
                                                searchData.trim() === '' || // Show all if search is empty
                                                course.name.toLowerCase().includes(searchData.toLowerCase()) || // Match course name
                                                item.type.toLowerCase().includes(searchData.toLowerCase()) // Match type
                                            )
                                            .map((course, index) => (
                                                <div key={`${item.type}-${course.name}-${index}`} className="bg-white dark:bg-customGray rounded-lg shadow-md overflow-hidden max-w-sm">
                                                    <img src={course.imageUrl} alt="Course Image" className="w-full h-48 object-cover" />
                                                    <div className="p-4">
                                                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{course.name}</h3>
                                                        <p className="text-sm mt-2 text-gray-900 dark:text-white">{course.description}</p>
                                                        <div className="mt-3">
                                                            <div className="flex gap-3">
                                                                <div className="text-sm text-gray-500 ml-1 flex gap-3 dark:text-white">
                                                                    <span><Video /></span>
                                                                    <span>{course.videos} Videos</span>
                                                                </div>
                                                                <div className="text-sm text-gray-500 ml-1 flex gap-2 dark:text-white">
                                                                    <span><BrickWall style={{ height: "20px" }} /></span>
                                                                    <span>{course.type}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <hr className="mt-3" />
                                                        <div className="flex gap-2 mt-3">
                                                            <span className="text-sm"><Users /></span>
                                                            <span className="text-sm dark:text-white">{course.peopleCertified} People have successfully certified in this course</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                    )
                            ) : (
                                <div className="text-center col-span-full">
                                    <p className="text-gray-500 dark:text-gray-300">No courses found matching your search.</p>
                                </div>
                            )}
                        </div>
                    </div>


                </div>
            </div>
            </Fade>
        </div>
    );
};

export default dynamic(() => Promise.resolve(Page), { ssr: false });







