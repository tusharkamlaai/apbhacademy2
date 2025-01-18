'use client'

import { useState, useEffect } from 'react';
import { Menu, X, Video, BrickWall, Users } from 'lucide-react';
import { courses } from '../components/data/data';
// name
const PageClient = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [data, setData] = useState(courses);
    const [selectedType, setSelectedType] = useState(null);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsOpen(true);
            } else {
                setIsOpen(false);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleSidebar = () => {
        if (window.innerWidth < 768) {
            setIsOpen(!isOpen);
        }
    };

    const handleSelectType = (type) => {
        setSelectedType(type);
        toggleSidebar()
    };

    return (
        <div>
            <div className={`fixed mt-[5.7rem] lg:mt-[6.6rem] inset-y-0 left-0 w-64 transition-transform bg-gray-100 shadow-xl z-10 ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
                <div className="flex justify-between items-center px-4 py-4 bg-purple-100">
                    <span className="text-black font-semibold">Courses List</span>
                    <button className="text-black md:hidden" onClick={toggleSidebar}>
                        <X />
                    </button>
                </div>
                <div className="flex flex-col p-4 space-y-4 overflow-y-auto max-h-[calc(100vh-200px)]">
                    <button onClick={() => handleSelectType(null)} className={`text-black p-2 w-full text-center font-semibold ${selectedType === null ? 'bg-teal-100 text-teal-900' : 'hover:bg-teal-50'}`}>
                        Show All Courses
                    </button>
                    {
                        [...new Set(data.map(item => item.type))].map((type, index) => (
                            <button key={index} onClick={() => handleSelectType(type)} className={`flex space-x-2 p-2 text-teal-600 hover:bg-teal-50 ${selectedType === type ? 'bg-teal-100 text-teal-900' : 'text-black'}`}>
                                <span className="text-black text-[20px]">•</span>
                                <span className="flex-1 text-left text-black">{type}</span>
                            </button>
                        ))
                    }
                </div>
            </div>

            <div className={`flex-1 mt-[6.5rem] ${isOpen ? 'md:ml-64' : ''} transition-margin`}>
                <div className="flex gap-5">
                    <button className="text-xl md:hidden ml-[40px]" onClick={toggleSidebar}><Menu /></button>
                    <span className='lg:hidden md:hidden'>Courses List</span>
                </div>
                <div className="p-5">
                    <div className='text-center'>
                        <span className='block text-gray-700 text-2xl mb-2 font-semibold'> {selectedType || 'All Courses'}</span>
                    </div>
                    <div className="px-5 flex justify-center mt-10">
                        <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-4">
                            {
                                data.filter(item => !selectedType || item.type === selectedType).map((item, index) => (
                                    <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden max-w-sm">
                                        <img src={item.imageUrl} alt="Property Image" className="w-full h-48 object-cover" />
                                        <div className="p-4">
                                            <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                                            <p className="text-sm mt-2 text-gray-900">{item.description}</p>
                                            <div className="mt-3">
                                                <div className="flex gap-3">
                                                    <div className="text-sm text-gray-500 ml-1 flex gap-3">
                                                        <span><Video /></span>
                                                        <span>{item.videos} Videos</span>
                                                    </div>
                                                    <div className="text-sm text-gray-500 ml-1 flex gap-2">
                                                        <span><BrickWall style={{ height: "20px" }} /></span>
                                                        <span>{item.type}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr className="mt-3" />
                                            <div className="flex gap-2 mt-3">
                                                <span className="text-sm"><Users /></span>
                                                <span className="text-sm">{item.peopleCertified} People have successfully certified in this course</span>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageClient;
