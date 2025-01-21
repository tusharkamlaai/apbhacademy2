'use client';

import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';

const CustomYouTubePlayer = () => {
    const [isPlaying, setIsPlaying] = useState(true);
    const [volume, setVolume] = useState(50);
    const [player, setPlayer] = useState(null);
    const [currentTime, setCurrentTime] = useState('0:00');
    const [duration, setDuration] = useState('0:00');

    const opts = {
        height: '480',
        width: '850',
        playerVars: {
            autoplay: 1,
            controls: 0, // Disable default controls
            modestbranding: 1,
            rel: 0,
            fs: 1, // Enable fullscreen button
        },
    };

    const videoId = '2JnEq3ZmLH0';

    const onReady = (event) => {
        setPlayer(event.target);
        // Set video duration
        const videoDuration = formatTime(event.target.getDuration());
        setDuration(videoDuration);
    };

    const togglePlay = () => {
        if (isPlaying) {
            player.pauseVideo();
        } else {
            player.playVideo();
        }
        setIsPlaying(!isPlaying);
    };

    const handleVolumeChange = (e) => {
        const newVolume = parseInt(e.target.value, 10);
        setVolume(newVolume);
        player.setVolume(newVolume);
    };

    const handleFullscreen = () => {
        if (player) {
            player.getIframe().requestFullscreen(); // Triggers YouTube's native fullscreen
        }
    };

    const handleDoubleTap = () => {
        document.exitFullscreen(); // Exit fullscreen mode
    };

    const updateTime = () => {
        if (player) {
            const current = formatTime(player.getCurrentTime());
            setCurrentTime(current);
        }
    };

    // Format time in MM:SS
    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    };

    useEffect(() => {
        const timer = setInterval(updateTime, 1000);
        return () => clearInterval(timer); // Cleanup the interval
    }, [player]);

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div
                className="relative w-full max-w-[53rem] mx-auto rounded-lg overflow-hidden"
                onDoubleClick={handleDoubleTap} // Double-tap to exit fullscreen
            >
                {/* Video Player */}
                <div className="aspect-w-16 aspect-h-9 bg-black">
                    <YouTube videoId={videoId} opts={opts} onReady={onReady} className="w-full h-full" />
                </div>

                {/* Controls */}
                <div className="w-full bg-gray-900 p-4 flex items-center justify-between text-white">
                    {/* Play/Pause Button */}
                    <button
                        className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded focus:outline-none"
                        onClick={togglePlay}
                    >
                        {isPlaying ? 'Pause' : 'Play'}
                    </button>

                    {/* Volume Slider */}
                    <div className="flex items-center space-x-2">
                        <label htmlFor="volume" className="text-sm">
                            Volume:
                        </label>
                        <input
                            id="volume"
                            type="range"
                            min="0"
                            max="100"
                            value={volume}
                            onChange={handleVolumeChange}
                            className="slider"
                        />
                    </div>

                    {/* Timer */}
                    <div className="text-sm">
                        {currentTime} / {duration}
                    </div>

                    {/* Fullscreen Button */}
                    <button
                        className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded focus:outline-none"
                        onClick={handleFullscreen}
                    >
                        Fullscreen
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CustomYouTubePlayer;
