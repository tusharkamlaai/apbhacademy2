"use client";

import { Maximize, Volume2, VolumeOff, Play, Pause, Video, Check, Lock } from "lucide-react";
import React, { useRef, useState } from "react";
import ReactPlayer from "react-player";
import { Progress } from "@/components/ui/progress";

export const courseContent = [
    {
        href: "https://apbhacademy.com/course-lesson?c=49&uvid=8850148",
        thumbnail: "https://img.youtube.com/vi/CDYFwIsWIg8/0.jpg",
        title: "Video 1 - Introduction to wall covering & Pitching them to the customer",
        progress: 100,
        status: "Done",
        video: "CDYFwIsWIg8"
    },
    {
        href: "https://apbhacademy.com/course-lesson?c=49&uvid=8850149",
        thumbnail: "https://img.youtube.com/vi/WYNBnZ5AVBA/0.jpg",
        title: "Video 2 - Types of wall coverings & their benefits",
        progress: 100,
        status: "Now watching",
        video: "WYNBnZ5AVBA"
    },
    {
        href: "javascript:void(0);",
        thumbnail: "https://img.youtube.com/vi/jhhFz0A9g0c/0.jpg",
        title: "Video 3 - Areas of application, Roll Inserts & Installation process of three different patterns",
        progress: 10,
        status: "Locked",
        video: "jhhFz0A9g0c"
    },
    {
        href: "javascript:void(0);",
        thumbnail: "https://img.youtube.com/vi/G58sQhpplTs/0.jpg",
        title: "Video 4 - Installation process of Murals & Borders",
        progress: 0,
        status: "Locked",
        video: "G58sQhpplTs"
    }
];

const Page = () => {
    const [playing, setPlaying] = useState(false);
    const [muted, setMuted] = useState(false);
    const [volume, setVolume] = useState(0.8);
    const [played, setPlayed] = useState(0);
    const [currentVideo, setCurrentVideo] = useState(courseContent[0].video);

    const playerRef = useRef(null);
    const containerRef = useRef(null);

    const togglePlayPause = () => {
        setPlaying((prev) => !prev);
    };

    const toggleMute = () => {
        setMuted((prev) => !prev);
    };

    const handleVolumeChange = (e) => {
        setVolume(parseFloat(e.target.value));
    };

    const handleProgress = (state) => {
        setPlayed(state.played);
    };

    const handleSeek = (e) => {
        const newTime = parseFloat(e.target.value);
        playerRef.current.seekTo(newTime);
        setPlayed(newTime);
    };

    // const handleFullscreen = () => {
    //     if (containerRef.current) {
    //         if (document.fullscreenElement) {
    //             document.exitFullscreen();
    //         } else {
    //             containerRef.current.requestFullscreen();
    //         }
    //     }
    // };

    const handleFullscreen = () => {
        if (containerRef.current) {
            if (document.fullscreenElement) {
                document.exitFullscreen();
                // Reset the orientation when exiting fullscreen
                if (screen.orientation && screen.orientation.unlock) {
                    screen.orientation.unlock();
                }
            } else {
                containerRef.current.requestFullscreen().then(() => {
                    // Automatically rotate the screen to landscape mode in fullscreen
                    if (screen.orientation && screen.orientation.lock) {
                        screen.orientation.lock("landscape").catch((err) => {
                            console.error("Failed to lock screen orientation:", err);
                        });
                    }
                }).catch((err) => {
                    console.error("Failed to enter fullscreen mode:", err);
                });
            }
        }
    };

    

    const handleCardClick = (videoId) => {
        setCurrentVideo(videoId);
        setPlaying(false); // Pause video on change (optional)
    };

    return (
        <>
            <div className="container mx-auto mt-[6rem] lg:px-5 bg-purple-50 dark:bg-customGray">

                <div className="grid grid-cols-1 lg:grid-cols-10 lg:px-14">
                    {/* Left Column: 70% */}

                    <div className="lg:col-span-7 text-white">
                        <h3
                            className="text-black lg:mr-14 font-semibold py-5 px-5 dark:text-white text-center text-lg md:text-xl lg:text-2xl leading-relaxed"
                        >
                            Beautify Your Customers' Homes: Learn Wallpaper Application Techniques
                        </h3>

                        <div className=" text-white">
                            <div
                                className="w-full max-w-4xl pb-6 bg-gray-900 lg:rounded-lg shadow-lg"
                                ref={containerRef}
                            >
                                <div className="relative w-full aspect-video" >
                                    <ReactPlayer
                                        ref={playerRef}
                                        url={`https://www.youtube.com/watch?v=${currentVideo}`}
                                        width="100%"
                                        height="100%"
                                        playing={playing}
                                        muted={muted}
                                        volume={volume}
                                        onProgress={handleProgress}
                                        controls={false}
                                    />

                                    {!playing && (
                                        <button
                                            onClick={togglePlayPause}
                                            className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 "
                                            aria-label="Play Video"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-16 w-16 text-white"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M14.752 11.168l-6.084-3.42A1 1 0 007 8.562v6.876a1 1 0 001.668.832l6.084-3.42a1 1 0 000-1.664z"
                                                />
                                            </svg>
                                        </button>
                                    )}
                                </div>

                                <div className="mt-4 px-3 flex items-center justify-between flex-wrap space-y-2 md:space-y-0">
                                    <button
                                        onClick={togglePlayPause}
                                        className="px-4 py-1 text-sm rounded transition"
                                    >
                                        {playing ? <Pause /> : <Play />}
                                    </button>

                                    <button
                                        onClick={toggleMute}
                                        className="px-4 py-1 text-sm rounded transition"
                                    >
                                        {muted ? <VolumeOff /> : <Volume2 />}
                                    </button>

                                    <button
                                        onClick={handleFullscreen}
                                        className="px-4 py-1 text-sm rounded transition"
                                    >
                                        <Maximize />
                                    </button>

                                    <div className="flex items-center space-x-2">
                                        <span className="text-gray-300 text-xs md:text-sm">Volume</span>
                                        <input
                                            type="range"
                                            min="0"
                                            max="1"
                                            step="0.1"
                                            value={volume}
                                            onChange={handleVolumeChange}
                                            className="w-16 md:w-24"
                                        />
                                    </div>
                                </div>

                                {/* <div className="flex items-center space-x-2 flex-grow mt-3 px-8">
                                    <span className="text-gray-300 text-xs md:text-sm">Progress</span>
                                    <input
                                        type="range"
                                        min="0"
                                        max="1"
                                        step="0.01"
                                        value={played}
                                        onChange={handleSeek}
                                        className="w-full"
                                        disabled
                                    />
                                </div> */}
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-3 lg:overflow-y-auto max-h-[calc(100vh-10rem)]  text-white p-4 mt-8">
                        {courseContent &&
                            courseContent.map((items, index) => (
                                <div
                                    key={index}
                                    className="relative max-w-4xl bg-white mt-5 mx-auto dark:bg-slate-600  shadow-lg rounded-lg flex p-1 cursor-pointer"
                                    onClick={() => handleCardClick(items.video)}
                                >
                                    <div className="absolute top-3 right-3">
                                        <Video className="text-gray-800 w-5 dark:text-white " />
                                    </div>
                                    <div className="w-1/3">
                                        <img
                                            className="rounded-lg object-cover h-full w-full transition-transform duration-300 ease-in-out hover:scale-110"
                                            src={items?.thumbnail}
                                            alt="Card Preview"
                                        />
                                    </div>
                                    <div className="w-2/3 pl-5 flex flex-col justify-between">
                                        <div>
                                            <h2 className="text-[13px] dark:text-white font-bold text-gray-800 mb-2 w-[10rem]">
                                                {items.title}
                                            </h2>
                                        </div>
                                        <div className=" items-center mt-2">
                                            <Progress value={items.progress} />

                                            <div className="flex justify-between mt-1">
                                                <span className="justify-end">
                                                    <p className="text-black dark:text-white">{items.progress}%</p>
                                                </span>

                                                <span className="justify-end">
                                                    <p className="text-black dark:text-white">{items.progress === 100 ? <Check className="w-4 text-green-600" /> : <Lock className="w-4 text-red-600" />}</p>
                                                </span>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page;
