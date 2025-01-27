'use client'

import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";


const accordionData = [
    {
        "question": "What kinds of courses does this website offer?",
        "answer": "Asian Paints Colour Academy has curated each and every course with the intent of developing the skills of our painters, and contractors. We have a wide range of courses ranging from textures, waterproofing, wood finishes, mechanisation, to name a few. The aim of the courses is to make the participants familiar with the products and the associated application processes."
    },
    {
        "question": "What is different about the content on this website? There are many video-based learning websites.",
        "answer": [
            "Each course is curated as per your requirement, everything that is necessary for you to understand about the field, the application procedures, and products involved.",
            "After you finish a course, you have the opportunity to self-assess through simple, yet effective assessment."
        ]
    },
    {
        "question": "Can I access this at anytime?",
        "answer":
            "Absolutely! As long as you're registered on the portal, you can access any content on apcolouracademy.in at any time",

    },
    {
        "question": "Is there any subscription charge?",
        "answer":
            "Absolutely not! We care about your learning and that's the priority.",

    },
    {
        "question": "Will I get a certificate after I pass an assessment?",
        "answer":
            "Each course comprises of a set of videos. Once you watch all the videos of a course, you can take the assessment test. On passing the assessment of a course, you will get a certificate which can be downloaded. You can finish as many courses as you like and take their respective assessments.",

    }
];

const PremiumAccordion = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <Fade>
                <div className="h-[100vh] bg-purple-50 dark:bg-customDark ">
                    <div className='text-center mt-[6rem] py-5'>
                        <span className='block text-gray-700 text-2xl mb-2 font-semibold dark:text-white'>Frequently Asked Questions.</span>
                    </div>
                    <div className="lg:w-[80%] w-[90%] mx-auto mt-6 bg-white border border-gray-200 rounded-[2px] shadow-lg">
                        {accordionData.map((item, index) => (
                            <div key={index} className="border-b border-gray-300">
                                <button
                                    className="w-full flex justify-between items-center py-4 px-6 bg-white dark:bg-slate-800"
                                    onClick={() => handleToggle(index)}
                                >
                                    <span className="text-lg font-semibold text-gray-800 dark:text-white">{item.question}</span>
                                    <svg
                                        className={`w-5 h-5 text-gray-600 dark:text-white  transform transition-transform ${openIndex === index ? "rotate-180" : ""
                                            }`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </button>
                                {openIndex === index && (
                                    <div className="px-6 py-4 bg-gray-50 dark:bg-black dark:text-white">
                                        {Array.isArray(item.answer) ? (
                                            <ul className="list-disc list-inside text-gray-700 dark:text-white">
                                                {item.answer.map((point, idx) => (
                                                    <li key={idx}>{point}</li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <p className="text-gray-700 dark:text-white">{item.answer}</p>
                                        )}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </Fade>
        </>
    );
};

export default PremiumAccordion;
