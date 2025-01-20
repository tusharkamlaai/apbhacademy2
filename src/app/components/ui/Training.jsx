import EmblaCarousel from '@/components/EmblaCarousel/EmblaCarousel'
import { Button } from '@/components/ui/button'
import React from 'react'
import t1 from '../../assets/Training/t1.png';
import t2 from '../../assets/Training/t2.png';
import t3 from '../../assets/Training/t3.png';
import t4 from '../../assets/Training/t4.png';
import t5 from '../../assets/Training/t5.png';
import t6 from '../../assets/Training/t6.jpg';

import Demo from './Demo'
const images = [
    { src: t2, alt: 'Training Image 1', description: "An academy to develop skills and provide a platform for success" },
    { src: t1, alt: 'Training Image 2', "description": "A world of immense learning and growth" },
    { src: t3, alt: 'Training Image 3', description: 'Ventilated and bright classrooms for theory based session' },
    { src: t4, alt: 'Training Image 4', "description": "Inspiration zone with latest range of designs and textures" },
    // { src: t5, alt: 'Training Image 5', "description": "Practical demo trainings at the practical zone" },
    // { src: t6, alt: 'Training Image 5', "description": "Practical demo trainings at the practical zone" },
];


const Training = () => {

    const OPTIONS = { loop: true }
    // const SLIDE_COUNT = 5
    const SLIDES = images

    return (
        <>
            <div className='text-center  mt-[2rem]'>
                <span className='block text-gray-700 text-2xl mb-2 font-semibold'>Our Training</span>
            </div>
            <div className='mt-[50px] mb-5 prevent-select'>
                <EmblaCarousel slides={SLIDES} options={OPTIONS} />
                {/* <Demo slides={SLIDES}/> */}
            </div>
            <div className='text-center mt-[3rem]'>
                <span className='block text-gray-700 lg:text-2xl text-xl mb-2 font-semibold'>For Online Training and Certification</span>
            </div>
            <div className='text-center mt-[35px] mb-5'>
                <Button variant="outline" className="w-[15rem]  bg-purple-50 h-[3rem]" >Visit Vitual BH Academy</Button>
            </div>
        </>
    )
}

export default Training