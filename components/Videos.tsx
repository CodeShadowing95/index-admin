"use client";

import React, { useState } from 'react'
import { VideoCard } from '@/components'

const Videos = () => {
  const [isGrid, setIsGrid] = useState(true)

  return (
    <div className="flex-1">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold text-gray-900">Nos Vidéos</h1>
          <p className="text-gray-500 text-sm">Gestion des vidéos de votre espace.</p>
        </div>
        <div className="flex gap-2">
          {/* Search bar */}
          <div>
            <input type="text" className="block w-[200px] p-2.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 outline-none" placeholder="Rechercher une vidéo..." />
          </div>
          {/* Divider */}
          <div className="w-px bg-gray-200"></div>
          {/* Filter */}
          <button className="text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 font-medium rounded-lg text-sm px-4 py-1.5 text-center inline-flex items-center" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 me-2 text-gray-700" viewBox="0 0 24 24"><path fill="currentColor" d="M3 13h12v-2H3m0-5v2h18V6M3 18h6v-2H3z" /></svg>
            Trier par:<span className="ml-1 text-gray-700 font-semibold">Date</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ms-2 text-gray-700" viewBox="0 0 24 24"><path fill="currentColor" d="m7 10l5 5l5-5z" /></svg>
          </button>
          {/* Disposition */}
          <button className="text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 font-medium rounded-lg text-sm px-2 py-1.5 text-center inline-flex items-center" type="button" onClick={() => setIsGrid(!isGrid)}>
            {isGrid ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-700" viewBox="0 0 24 24"><path fill="currentColor" d="M3 11h8V3H3m0 18h8v-8H3m10 8h8v-8h-8m0-10v8h8V3" /></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-700" viewBox="0 0 24 24"><path fill="currentColor" d="M7 5h14v2H7zm0 8v-2h14v2zM4 4.5A1.5 1.5 0 0 1 5.5 6A1.5 1.5 0 0 1 4 7.5A1.5 1.5 0 0 1 2.5 6A1.5 1.5 0 0 1 4 4.5m0 6A1.5 1.5 0 0 1 5.5 12A1.5 1.5 0 0 1 4 13.5A1.5 1.5 0 0 1 2.5 12A1.5 1.5 0 0 1 4 10.5M7 19v-2h14v2zm-3-2.5A1.5 1.5 0 0 1 5.5 18A1.5 1.5 0 0 1 4 19.5A1.5 1.5 0 0 1 2.5 18A1.5 1.5 0 0 1 4 16.5"/></svg>
            )}
          </button>
          {/* Divider */}
          <div className="w-px bg-gray-200"></div>
          {/* Add video button */}
          <button type="button" className="px-3 py-2 text-sm font-medium text-center inline-flex items-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-1" viewBox="0 0 24 24"><path fill="currentColor" d="m19.65 6.5l-2.74-3.54l3.93-.78l.78 3.92zm-2.94.57l-2.74-3.53l-1.97.39l2.75 3.53zM19 13c1.1 0 2.12.3 3 .81V10H2v10a2 2 0 0 0 2 2h9.81c-.51-.88-.81-1.9-.81-3c0-3.31 2.69-6 6-6m-7.19-4.95L9.07 4.5l-1.97.41l2.75 3.53zM4.16 5.5l-.98.19a2.01 2.01 0 0 0-1.57 2.35L2 10l4.9-.97zM20 18v-3h-2v3h-3v2h3v3h2v-3h3v-2z" /></svg>
            Nouvelle Vidéo
          </button>
        </div>
      </div>

      {/* Videos listing */}
      {isGrid ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mt-4">
          {/* Video item */}
          {Array.from({ length: 8 }).map((_, index) => (
            <VideoCard
              key={index}
              thumbnail="/assets/default_image.png"
              title="Video 1"
              description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere error sit voluptas esse mollitia hic fugit accusantium blanditiis saepe consequuntur iste, cum officia cupiditate aliquid? Quibusdam debitis sapiente error saepe."
              videoSrc="https://www.youtube.com/watch?v=QH2-TGUlwu4"
            />
          ))}
        </div>
      ) : (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-8">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Titre
                </th>
                <th scope="col" className="px-6 py-3">
                  Description
                </th>
                <th scope="col" className="px-6 py-3">
                  Durée
                </th>
                <th scope="col" className="px-6 py-3">
                  Vues
                </th>
                <th scope="col" className="px-6 py-3">
                  Lien vidéo
                </th>
                <th scope="col" className="px-6 py-3">
                  
                </th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 8 }).map((_, index) => (
                <tr key={index} className="bg-white border-b">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  Lorem Ipsum Dolor
                  </th>
                  <td className="px-6 py-4 max-w-xs">
                    {"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam iusto a quam, quos dignissimos eaque? Alias sed consectetur, eius facere, saepe perspiciatis cum, pariatur quod suscipit laudantium blanditiis perferendis iusto.".substring(0, 80) + "..."}
                  </td>
                  <td className="px-6 py-4">
                    02:57
                  </td>
                  <td className="px-6 py-4">
                    1000
                  </td>
                  <td className="px-6 py-4">
                    {/* Youtube video link */}
                    <a href="#" className="font-medium text-blue-600 hover:underline max-w-xs">https://www.youtube.com/watch?v=QH2-TGUlwu4</a>
                  </td>
                  <td className="flex gap-2 px-6 py-4">
                    <div className="flex justify-center items-center w-8 h-8 text-gray-500 rounded-full hover:bg-gray-200 cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24"><path fill="currentColor" d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5"/></svg>
                    </div>
                    <div className="flex justify-center items-center w-8 h-8 text-gray-500 rounded-full hover:bg-gray-200 cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24"><path fill="currentColor" d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83l3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75z"/></svg>
                    </div>
                    <div className="flex justify-center items-center w-8 h-8 text-gray-500 rounded-full hover:bg-gray-200 cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24"><path fill="currentColor" d="M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12l1.41 1.41L13.41 14l2.12 2.12l-1.41 1.41L12 15.41l-2.12 2.12l-1.41-1.41L10.59 14zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"/></svg>
                    </div>
                    <div className="flex justify-center items-center w-8 h-8 text-gray-500 rounded-full hover:bg-gray-200 cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24"><path fill="currentColor" d="M5 20h14v-2H5m14-9h-4V3H9v6H5l7 7z"/></svg>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default Videos