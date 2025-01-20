'use client'

import {useContext} from 'react';
import { LearningJourneyData } from '../data/data';
import Image from 'next/image';

const LearningJourney = () => {
    
    return (
        <div className="py-16">
            <span className='block text-gray-700 text-2xl text-center mb-[50px] font-semibold dark:text-white'> Start your Learning Journey Today!</span>
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 lg:px-0 px-3">
                {
                    LearningJourneyData.map((items, index) => {
                        return (
                            <div key={index} className="bg-[#F0FBFC] dark:bg-customGray cursor-pointer p-6 h-[335px] text-center ease-in-out delay-150 duration-300 hover:-translate-y-1 hover:scale-110" >
                                <div className="mb-10 mt-4">
                                    <Image className=" mx-auto" src={items.image} alt="Description" width={90} height={90} />
                                </div>
                                <h3 className="font-semibold text-lg">{items.name}</h3>
                                <p className="mt-2 text-sm">
                                    {items.description}
                                </p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default LearningJourney;
