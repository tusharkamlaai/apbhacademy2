'use client';

import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function page() {
    const [isEditing, setIsEditing] = useState(false);
    const [profile, setProfile] = useState({
        name: 'Tushar Patle',
        phone: '+91 7888010097',
        location: 'Mumbai',
        profession: 'Software Engineer',
        avatar: 'https://mir-s3-cdn-cf.behance.net/project_modules/hd/d95c1f148207527.62d1246c25004.jpg',
    });

    const handleEditToggle = () => setIsEditing(!isEditing);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile({ ...profile, [name]: value });
    };

    return (
        <div className="min-h-screen  py-10 px-6 mt-20">
            <div className="max-w-3xl mx-auto bg-white dark:bg-slate-800 shadow-lg rounded-lg overflow-hidden">
                {/* Header Section */}
                <div className="relative">
                    <div className="bg-purple-50 h-32 dark:bg-slate-400"></div>
                    <img
                        src={profile.avatar}
                        alt="User Avatar"
                        className="absolute -bottom-12 left-6 w-24 h-24 rounded-full border-4 border-white object-cover shadow-lg"
                    />
                </div>

                {/* Profile Info */}
                <div className="p-6 pt-14">
                    {isEditing ? (
                        <div className="space-y-4">
                            <div>
                                <label  className="block dark:text-white text-sm font-medium text-gray-600">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={profile.name}
                                    onChange={handleChange}
                                    className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                            </div>
                            <div>
                                <label className="block dark:text-white text-sm font-medium text-gray-600">Phone</label>
                                <input
                                    type="text"
                                    name="phone"
                                    value={profile.phone}
                                    onChange={handleChange}
                                    className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                            </div>
                            <div>
                                <label className="block dark:text-white text-sm font-medium text-gray-600">Location</label>
                                <input
                                    type="text"
                                    name="location"
                                    value={profile.location}
                                    onChange={handleChange}
                                    className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                            </div>
                            <div>
                                <label className="block dark:text-white text-sm font-medium text-gray-600">Profession</label>
                                <input
                                    type="text"
                                    name="profession"
                                    value={profile.profession}
                                    onChange={handleChange}
                                    className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-6">
                            <div>
                                <h1 className="text-2xl dark:text-white font-bold text-gray-800">{profile.name}</h1>
                                <p className="text-sm dark:text-white text-gray-500">Profession: {profile.profession}</p>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <h3 className="text-sm dark:text-white font-medium text-gray-600">Phone</h3>
                                    <p className="text-gray-800 dark:text-white">{profile.phone}</p>
                                </div>
                                <div>
                                    <h3 className="text-sm font-medium dark:text-white text-gray-600">Location</h3>
                                    <p className="text-gray-800 dark:text-white">{profile.location}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="bg-gray-50 py-4 px-6 flex justify-end dark:bg-slate-600">
                    <Button
                        onClick={handleEditToggle}
                    >
                        {isEditing ? 'Save Changes' : 'Edit Profile'}
                    </Button>
                </div>
            </div>
        </div>
    );
}
