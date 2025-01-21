'use client'

import { createContext, useEffect, useState } from 'react';
import { courses } from '../components/data/data';
import dynamic from "next/dynamic";
import { useRouter } from 'next/navigation';

export const CourseContext = createContext(null);

const CoursesProvider = (props) => {
    const router = useRouter()

    const [isOpen, setIsOpen] = useState(false);
    const [data] = useState(courses);
    const [selectedType, setSelectedType] = useState(null);
    const [searchData, setSearchData] = useState('')


    const filterData = data.filter((item) => {
        const isTypeMatch = item.type.toLowerCase().includes(searchData.toLowerCase());
        const isNameMatch = item.courses.some(course =>
            course.name.toLowerCase().includes(searchData.toLowerCase())
        );
        return isTypeMatch || isNameMatch;
    });


    const toggleSidebar = () => {
        if (window.innerWidth < 768) {
            setIsOpen(!isOpen);
        }
    };

    const handleSelectType = (type) => {
        setSelectedType(type);
        toggleSidebar();
        setSearchData('')
    };


    useEffect(() => {
        const handleResize = () => {
            setIsOpen(window.innerWidth >= 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const perCourse = () => {
        router.push('/courses');
    }



    const valueData = {
        isOpen,
        data,
        selectedType,
        searchData,
        setSearchData,
        filterData,
        toggleSidebar,
        handleSelectType,
        perCourse
    };


    return (
        <CourseContext.Provider value={valueData}>
            {props.children}
        </CourseContext.Provider>
    );

}
export default dynamic(() => Promise.resolve(CoursesProvider), { ssr: false })
