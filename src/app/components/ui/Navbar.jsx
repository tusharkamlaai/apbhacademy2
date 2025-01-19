'use client'
import React, { useState, useRef, useEffect, useContext } from 'react';
import Image from 'next/image';
import logo from '../../assets/logo.png';
import language from '../../assets/language.png';
import ask from '../../assets/ask.png';
import hamburger from '../../assets/hamburger.png';
import close from '../../assets/close.png';
import downArrow from '../../assets/down-arrow.png';
import nextArrow from '../../assets/next.png';
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { DarkModeContext } from '../../context/DarkModeTheme';
import { darkButtonSvg, lightButtonSvg } from '../data/svg';
import { Languages } from 'lucide-react';

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const dropdownRef = useRef(null);
    const router = useRouter()
    const [menuOpen, setMenuOpen] = useState(false);
    const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

    console.log(isDarkMode, "helllo")

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
                setIsSubmenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const menuBar = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <div className='lg:mb-[104px] navbar '>
            <nav className={`fixed z-[10000] top-0 left-0 right-0 ${isDarkMode ? 'bg-customGray' : 'bg-white'} shadow-md flex items-center justify-between flex-wrap p-4 lg:px-[50px]`}>
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <Link href='/'> <Image src={logo} alt="" className="lg:w-[160px] w-[130px]" /></Link>
                </div>
                <div className=" lg:hidden flex items-center gap-4">
                    <button onClick={toggleDarkMode} >
                        <span>{isDarkMode ? darkButtonSvg : lightButtonSvg}</span>
                    </button>
                    <button>
                        <Link href='/language'><Image src={language} alt="Language" className="w-[25px]" /></Link>
                    </button>
                    <div className="ml-auto">
                        <button onClick={menuBar} className="flex items-center px-3 py-2  ">
                            <div>{menuOpen ? <Image src={close} alt="Ask" className="w-[25px]" /> : <Image src={hamburger} alt="Ask" className="w-[25px]" />}</div>
                        </button>
                    </div>
                </div>
                <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${menuOpen ? 'block' : 'hidden'}`}>
                    <div className="text-sm lg:text-center lg:flex-grow relative">
                        <div className="relative inline-block text-left" ref={dropdownRef}>
                            <button
                                onClick={() => setIsDropdownOpen((prev) => !prev)}
                                className="block mt-4 lg:inline-block lg:mt-0 text-[#140342] hover:text-black text-[16px] mr-4"
                            >
                                <div className={"flex items-center justify-center"}>
                                    <Link href='/courses'><span className={` ${isDarkMode ? 'text-white' : ""} mr-1`} onClick={handleLinkClick}>Courses</span></Link>
                                    {/* <Image
                                        src={isDropdownOpen ? downArrow : nextArrow}
                                        alt="Dropdown Arrow"
                                        className={isDropdownOpen ? "w-[15px]" : "w-[8px]"}
                                    /> */}
                                </div>
                            </button>
                            {/* {isDropdownOpen && (
                                <div className="absolute z-10 mt-0 lg:mt-[42px] w-[10rem] lg:w-[20rem] bg-white border border-gray-200 shadow-lg rounded-md">
                                    <a
                                        href="#example1"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    >
                                        Example 1
                                    </a>
                                    <div
                                        className="relative"
                                        onMouseEnter={() => setIsSubmenuOpen(true)}
                                        onMouseLeave={() => setIsSubmenuOpen(false)}
                                    >
                                        <div className="flex items-center gap-2">
                                            <a
                                                href="#example2"
                                                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            >
                                                Example 2
                                                <span className="text-[10px] ml-3 flex items-center justify-center">{isSubmenuOpen ? "↓" : "→"}</span>
                                            </a>
                                        </div>

                                        {isSubmenuOpen && (
                                            <div className="absolute left-full top-0 w-48 bg-white border border-gray-200 shadow-lg rounded-md">
                                                <a
                                                    href="#example2-1"
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                >
                                                    Example 2-1
                                                </a>
                                                <a
                                                    href="#example2-2"
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                >
                                                    Example 2-2
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                    <a
                                        href="#example3"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    >
                                        Example 3
                                    </a>
                                </div>
                            )} */}
                            <div className="block mt-4 lg:inline-block lg:mt-0 text-[#140342] hover:text-black text-[16px] mr-4">
                                <Link href='/faq' className={` ${isDarkMode ? 'text-white' : ""} `} onClick={handleLinkClick}> FAQs</Link>
                            </div>

                            <div className="block mt-4 lg:inline-block lg:mt-0 text-[#140342] hover:text-black text-[16px] mr-4">
                                <Link href='/blog' className={` ${isDarkMode ? 'text-white' : ""} `} onClick={handleLinkClick}> Blog</Link>
                            </div>

                        </div>

                        <Link onClick={handleLinkClick} href='/auth/login'>  <button variant="outline" className="block lg:hidden mt-4 px-6 py-3  bg-purple-50 h-[3rem] ">
                            Login
                        </button></Link>
                    </div>
                    <div className="hidden lg:flex gap-6">

                        <button onClick={toggleDarkMode} >
                            <span>{isDarkMode ? darkButtonSvg : lightButtonSvg}</span>
                        </button>
                        <button>
                            <Link href='/language'><Languages className="w-[30px]" /></Link>
                        </button>

                        <Link href='/auth/login'> <Button variant="outline" className={` bg-purple-50 h-[3rem] ${isDarkMode ? "text-black" : ""}`} >Login</Button></Link>
                        <Link href='/profile'> <Button variant="outline" className={` bg-purple-50 h-[3rem] ${isDarkMode ? "text-black" : ""}`} >Profile</Button></Link>

                    </div>
                </div>
            </nav>
            <hr />
        </div>
    );
};

export default Navbar;
