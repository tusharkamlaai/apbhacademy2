'use client'

import { createContext, useEffect, useState } from 'react';
import { courses } from '../components/data/data';
import dynamic from "next/dynamic";

export const CourseContext = createContext(null);

const CoursesProvider = (props) => {

    const valueData = {

    };


    return (
        <CourseContext.Provider value="Hello">
            {props.children}
        </CourseContext.Provider>
    );

}
export default dynamic(() => Promise.resolve(CoursesProvider), { ssr: false })
