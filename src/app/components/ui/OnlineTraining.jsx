import React from 'react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation'


const OnlineTraining = () => {
    const router = useRouter()
    return (
        <>
            <div className='text-center mt-[3rem]'>
                <span className='block text-gray-700 dark:text-white lg:text-2xl text-xl mb-2 font-semibold'>For Online Training and Certification</span>
            </div>
            <div className='text-center mt-[35px] mb-5'>
            <Button onClick={() => router.push('/courses')} variant="outline" className="w-[15rem] bg-purple-50 h-[3rem] dark:text-black dark:hover:text-white"   >Visit Vitual BH Academy</Button>
            </div>
        </>
    )
}

export default OnlineTraining