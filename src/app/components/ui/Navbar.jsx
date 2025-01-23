'use client'
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import logo from '../../assets/logo.png';
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { DarkModeButton } from '../customUi/DarkModeButton';
import { Languages, Menu, X } from 'lucide-react';
import { ChevronDown, ChevronUp } from "lucide-react";
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    const menuBar = () => {
        setMenuOpen(!menuOpen)
    }


    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const dropdownRef = useRef(null);

    const handleMouseEnter = () => {
        setDropdownVisible(true);
    };

    const handleMouseLeave = () => {
        // Dropdown remains open
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setDropdownVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return (
        <div className='lg:mb-[104px] navbar '>
            <nav className="fixed z-[10] top-0 left-0 right-0 bg-white dark:bg-customGray shadow-md flex items-center justify-between flex-wrap p-4 lg:px-[50px]">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <Link href='/'> <Image src={logo} alt="" className="lg:w-[160px] w-[100px]" /></Link>
                </div>
                <div className=" lg:hidden flex items-center gap-3">
                    <Link href='/auth/login'> <Button variant="outline" className=" lg:hidden bg-purple-50 h-[35px]  px-3 py-1 block dark:text-black  dark:hover:text-white" >Login</Button></Link>

                    <button>
                        <Link href='/language'>   <Languages /></Link>
                    </button>
                    <div className="ml-auto">
                        <button onClick={menuBar} className="flex items-center px-2 py-2  ">
                            <div>{menuOpen ? <X /> : <Menu />}</div>
                        </button>
                    </div>
                </div>
                <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${menuOpen ? 'block' : 'hidden'}`}>
                    <div className="text-sm lg:text-center lg:flex-grow relative">
                        <div className="relative inline-block text-left" >
                            <button
                                className="block mt-4 lg:inline-block lg:mt-0 text-[#140342] hover:text-black text-[16px] mr-4"
                            >
                                <div className="flex items-center justify-center">
                                    <Link href='/courses'><span className="mr-1 dark:text-white" onClick={handleLinkClick}>Courses</span></Link>

                                </div>
                            </button>

                            <div className="block dark:text-white mt-4 lg:inline-block lg:mt-0 text-[#140342] hover:text-black text-[16px] mr-4">
                                <Link href='/faq' onClick={handleLinkClick}> FAQs</Link>
                            </div>
                            <div
                                ref={dropdownRef}
                                className="relative inline-block text-left"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                <div className="block dark:text-white mt-4 lg:inline-block lg:mt-0 text-[#140342] hover:text-black text-[16px] mr-4 flex items-center cursor-pointer">
                                    <Link onClick={handleLinkClick} href="/myLearning" className="menu-hover flex items-center">
                                        My Learning
                                        <span className="ml-2">
                                            {/* {isDropdownVisible ? (
                                                <ChevronUp size={16} className="text-gray-700 dark:text-gray-300" />
                                            ) : (
                                                <ChevronDown size={16} className="text-gray-700 dark:text-gray-300" />
                                            )} */}
                                        </span>
                                    </Link>
                                </div>
                                {/* {isDropdownVisible && (
                                    <div className="absolute z-10 mt-2 w-48 bg-white rounded-md shadow-lg dark:bg-gray-800">
                                        <ul className="py-1 text-gray-700 dark:text-gray-300">
                                            <li>
                                                <Link
                                                    href="/myLearning/courses"
                                                    className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700"
                                                >
                                                    My Courses
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="/myLearning/progress"
                                                    className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700"
                                                >
                                                    Progress Tracker
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="/myLearning/resources"
                                                    className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700"
                                                >
                                                    Learning Resources
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                )} */}
                            </div>

                        </div>
                        <Link
                            onClick={handleLinkClick}
                            href="/blog"
                            className="block dark:text-white mt-4 lg:inline-block lg:mt-0 text-[#140342] hover:text-black text-[16px]"
                        >
                            Blog
                        </Link>
                        <div className='lg:hidden mt-3'>
                            <DarkModeButton />
                        </div>
                    </div>
                    <div className="hidden lg:flex gap-5">
                        <span className='lg:mt-2'>
                            <DarkModeButton />
                        </span>
                        <button>
                            <Link href='/language'>   <Languages /></Link>
                        </button>

                        <Link href='/auth/login'> <Button variant="outline" className=" bg-purple-50 h-[3rem] dark:text-black dark:hover:text-white" >Login</Button></Link>
                    </div>
                </div>
            </nav>
            <hr />
        </div>
    );
};

export default Navbar;