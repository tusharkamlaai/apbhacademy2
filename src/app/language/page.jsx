'use client'
import { useContext } from "react";
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'
import { useState } from 'react';
import { DarkModeContext } from '@/app/context/DarkModeTheme';

const page = () => {
    const [selectedLanguage, setSelectedLanguage] = useState(null);

    const { isDarkMode } = useContext(DarkModeContext);

    const router = useRouter();

    const languages = [
        { name: "हिन्दी", englishName: "Hindi" },
        { name: "ಕನ್ನಡ", englishName: "Kannada" },
        { name: "தமிழ்", englishName: "Tamil" },
        { name: "ગુજરાતી", englishName: "Gujarati" },
        { name: "English", englishName: "English" },
        { name: "മലയാളം", englishName: "Malayalam" },
        { name: "తెలుగు", englishName: "Telugu" },
        { name: "मराठी", englishName: "Marathi" },
        { name: "বাংলা", englishName: "Bangla" },
        { name: "ଓଡ଼ିଆ", englishName: "Odia" },
        { name: "অসমীয়া", englishName: "Assamese" },
    ];
    // bg-purple-50
    return (
        <>
            <div className={`px-[20%] mt-[80px] py-[5%] lg:h-[100vh] md:h-[100vh] ${isDarkMode ? "" : "bg-purple-50"}`}>
                <div className='text-center mt-5'>
                    <span className={`${isDarkMode ? "text-white" : ''} block text-gray-700 text-2xl mb-2`}>Explore Course Categories</span>
                    <span>Courses available in 11 languages</span>
                </div>

                <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                    {
                        languages.map((item, index) => (
                            <Button
                                key={index}
                                variant="outline"
                                className={`w-[15rem] h-[3rem]  ${isDarkMode ? "bg-white text-black hover:bg-gray-200 " : ""}  ${item.name === selectedLanguage ? 'bg-green-200 text-black' : 'text-black'}`}
                                onClick={() => setSelectedLanguage(item.name)}
                                style={{ color: "black" }}
                            >
                                <span>{item.name}</span>
                                <span>{item.englishName}</span>
                            </Button>
                        ))
                    }


                </div>
                <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                    <button></button>
                    <Button
                        style={{ color: "black" }}
                        onClick={() => router.push('/')} className={` ${isDarkMode ? "hover:bg-gray-200 text-customBlack" : ""} w-[15rem] h-[3rem] bg-green-500 text-white`} variant="outline">Continue</Button>
                </div>
            </div>
        </>
    );
}

export default page;