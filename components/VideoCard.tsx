"use client";


import Image from 'next/image';
import React, { useState } from 'react'

const VideoCard = ({ thumbnail, title, description, videoSrc }: { thumbnail: string, title: string, description: string, videoSrc: string }) => {
    const [isPlaying, setIsPlaying] = useState(false)

    const handlePlay = () => {
      setIsPlaying(true)
    }

    return (
    <div className="max-w-md rounded overflow-hidden shadow-lg bg-white">
      {isPlaying ? (
        <div className="relative w-full h-56">
          <video
            src={videoSrc}
            controls
            autoPlay
            className="absolute top-0 left-0 w-full h-full"
          ></video>
        </div>
      ) : (
        <div className="relative w-full h-56 cursor-pointer" onClick={handlePlay}>
          <Image
            src={thumbnail}
            alt="Video Thumbnail"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-white" viewBox="0 0 24 24"><path fill="currentColor" d="M10 16.5v-9l6 4.5M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"/></svg>
          </div>
        </div>
      )}
      <div className="px-6 py-4">
        <div className="flex justify-between">
            <div className="font-bold text-xl mb-2">{title}</div>
            {/* Fully rounded buttons with bg-white and shadow Edit and Delete */}
            <div className="flex justify-start">
                <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24"><path fill="currentColor" d="m19.65 6.5l-2.74-3.54l3.93-.78l.78 3.92zm-2.94.57l-2.74-3.53l-1.97.39l2.75 3.53zM2 10v10a2 2 0 0 0 2 2h7v-2.87L20.13 10zm9.81-1.95L9.07 4.5l-1.97.41l2.75 3.53zM4.16 5.5l-.98.19a2.01 2.01 0 0 0-1.57 2.35L2 10l4.9-.97zM13 19.96V22h2.04l6.13-6.12l-2.04-2.05zm9.85-6.49l-1.32-1.32c-.2-.2-.53-.2-.72 0l-.98.98l2.04 2.04l.98-.98c.2-.19.2-.52 0-.72"/></svg>
                </button>
                <button type="button" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24"><path fill="currentColor" d="M14.75 7.46L12 3.93l1.97-.39l2.74 3.53zm-2.94.59L9.07 4.5l-1.97.41l2.75 3.53zm9.81-1.95l-.78-3.92l-3.93.78l2.74 3.54zM19 13c1.1 0 2.12.3 3 .81V10H2v10a2 2 0 0 0 2 2h9.81c-.51-.88-.81-1.9-.81-3c0-3.31 2.69-6 6-6M4.16 5.5l-.98.19a2.01 2.01 0 0 0-1.57 2.35L2 10l4.9-.97zm18.38 11.38l-1.42-1.41L19 17.59l-2.12-2.12l-1.41 1.41L17.59 19l-2.12 2.12l1.41 1.42L19 20.41l2.12 2.13l1.42-1.42L20.41 19z"/></svg>
                </button>
            </div>
        </div>
        <p className="text-gray-700 text-sm line-clamp-3 mt-2">
          {description}
        </p>
      </div>
    </div>
    )
}

export default VideoCard