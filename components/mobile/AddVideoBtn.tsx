"use client";

import React, { useState } from 'react'

const AddVideoBtn = () => {
    const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-8 right-4 w-14 h-14 z-50">
        <div className="w-full h-full relative flex items-center justify-center">
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-3 text-center md:hidden inline-flex items-center justify-center" onClick={() => setIsOpen(!isOpen)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24"><path fill="currentColor" d="M12 19c0 .34.03.67.08 1H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1l2 4h3L8 4h2l2 4h3l-2-4h2l2 4h3l-2-4h4v8.68A6.995 6.995 0 0 0 12 19m11.8 1.4c.1 0 .1.1 0 .2l-1 1.7c-.1.1-.2.1-.3.1l-1.2-.4c-.3.2-.5.3-.8.5l-.2 1.3c0 .1-.1.2-.2.2h-2c-.1 0-.2-.1-.3-.2l-.2-1.3c-.3-.1-.6-.3-.8-.5l-1.2.5c-.1 0-.2 0-.3-.1l-1-1.7c-.1-.1 0-.2.1-.3l1.1-.8v-1l-1.1-.8c-.1-.1-.1-.2-.1-.3l1-1.7c.1-.1.2-.1.3-.1l1.2.5c.3-.2.5-.3.8-.5l.2-1.3c0-.1.1-.2.3-.2h2c.1 0 .2.1.2.2l.2 1.3c.3.1.6.3.9.5l1.2-.5c.1 0 .3 0 .3.1l1 1.7c.1.1 0 .2-.1.3l-1.1.8v1zM20.5 19c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5s.7 1.5 1.5 1.5s1.5-.7 1.5-1.5"/></svg>
            </button>
            {/* Absolutes buttons */}
            <div id='add-video' className={`absolute -z-10 ${isOpen ? 'block' : 'hidden'} transition-all duration-300`}>
                <button className="w-10 h-10 flex justify-center items-center bg-white rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24"><path fill="currentColor" d="M13 19c0 .34.04.67.09 1H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1l2 4h3L8 4h2l2 4h3l-2-4h2l2 4h3l-2-4h4v9.81c-.88-.51-1.9-.81-3-.81c-3.31 0-6 2.69-6 6m7-1v-3h-2v3h-3v2h3v3h2v-3h3v-2z" /></svg>
                </button>
            </div>
            <div id='add-category' className="absolute -z-10">
                <button className="w-10 h-10 flex justify-center items-center bg-white rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-900" viewBox="0 0 24 24"><path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z" /></svg>
                </button>
            </div>
        </div>
    </div>
  )
}

export default AddVideoBtn