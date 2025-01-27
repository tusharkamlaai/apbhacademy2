'use client'

import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'
import { useState } from 'react';
import { Fade } from "react-awesome-reveal";

const page = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('English');

    const router = useRouter();

    const languages = [
        { name: "हिन्दी", englishName: "Hindi" },
        { name: "ಕನ್ನಡ", englishName: "Kannada" },
        { name: "தமிழ்", englishName: "Tamil" },
        { name: "ગુજરાતી", englishName: "Gujarati" },
        { name: "English", englishName: "" },
        { name: "മലയാളം", englishName: "Malayalam" },
        { name: "తెలుగు", englishName: "Telugu" },
        { name: "मराठी", englishName: "Marathi" },
        { name: "বাংলা", englishName: "Bangla" },
        { name: "ଓଡ଼ିଆ", englishName: "Odia" },
        { name: "অসমীয়া", englishName: "Assamese" },
    ];

    return (
        <>
            <Fade>
                <div className="px-[20%] mt-[80px] py-[5%] lg:h-[100vh] md:h-[100vh] bg-purple-50 dark:bg-black">
                    <div className='text-center mt-5'>
                        <span className='block text-gray-700 text-2xl mb-2 dark:text-white'>Explore Course Categories</span>
                        <span>Courses available in 11 languages</span>
                    </div>

                    <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                        {
                            languages.map((item, index) => (
                                <Button
                                    key={index}
                                    variant="outline"
                                    className={`w-[15rem] dark:bg-purple-50 dark:hover:bg-green-200 dark:text-black h-[3rem] hover:bg-green-200 ${item.name === selectedLanguage ? 'bg-green-200 text-black dark:bg-green-200' : 'text-black'}`}
                                    onClick={() => setSelectedLanguage(item.name)}
                                >
                                    <span>{item.name}</span>
                                    <span>{item.englishName}</span>
                                </Button>
                            ))
                        }

                    </div>
                    <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                        <button></button>
                        <Button onClick={() => router.push('/')} className="w-[15rem] h-[3rem] bg-green-500 text-white" variant="outline">Continue</Button>
                    </div>
                </div>
            </Fade>
        </>
    );
}

export default page;