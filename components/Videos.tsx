"use client";

import React, { useEffect, useState } from 'react'
import { VideoCard } from '@/components'
import ModalCategory from './Modals/ModalCategory';
import ModalVideo from './Modals/ModalVideo';

const Videos = () => {
  const [isGrid, setIsGrid] = useState(true)
  const [toggleAddDropdown, setToggleAddDropdown] = useState(false)
  const [toggleModalCategory, setToggleModalCategory] = useState(false)
  const [toggleModalVideo, setToggleModalVideo] = useState(false)

  // Disable scroll on the modal when it's open
  useEffect(() => {
    if (toggleModalCategory || toggleModalVideo) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [toggleModalCategory, toggleModalVideo])

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
          <button type="button" className="relative px-3 py-2 text-sm font-medium text-center inline-flex items-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            onClick={() => {
              setToggleAddDropdown(!toggleAddDropdown)
            }}
          >
            Ajouter
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24"><path fill="currentColor" d="m7 10l5 5l5-5z"/></svg>

            {/* Dropdown */}
            <div className={`absolute right-0 w-48 p-2 -bottom-2 translate-y-full origin-bottom-right z-10 ${toggleAddDropdown ? "" : "hidden"} bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}>
              <div className="flex items-center gap-2 p-2 rounded hover:bg-gray-100" onClick={() => setToggleModalCategory(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-900" viewBox="0 0 24 24"><path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"/></svg>
                <p className="text-sm text-gray-900">Nouvelle catégorie</p>
              </div>
              {/* Divider */}
              <div className="h-px bg-gray-200 my-1"></div>
              <div className="flex items-center gap-2 p-2 rounded bg-gray-900 text-white hover:bg-gray-800" onClick={() => setToggleModalVideo(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24"><path fill="currentColor" d="M13 19c0 .34.04.67.09 1H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1l2 4h3L8 4h2l2 4h3l-2-4h2l2 4h3l-2-4h4v9.81c-.88-.51-1.9-.81-3-.81c-3.31 0-6 2.69-6 6m7-1v-3h-2v3h-3v2h3v3h2v-3h3v-2z"/></svg>
                <p className="text-sm">Nouvelle vidéo</p>
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex mt-8">
        <div className="flex justify-center items-center px-4 py-3 border-b-[3px] border-blue-500 hover:bg-blue-100 rounded-t-lg text-sm font-bold capitalize cursor-pointer">
          Toutes
        </div>
        <div className="flex justify-center items-center px-4 py-3 text-sm font-medium hover:bg-gray-100 rounded-t-lg capitalize cursor-pointer">
          la télé d{`'`}Index
        </div>
        <div className="flex justify-center items-center px-4 py-3 text-sm font-medium hover:bg-gray-100 rounded-t-lg capitalize cursor-pointer">
          bien-être
        </div>
      </div>

      {/* Videos listing */}
      {isGrid ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 mt-6">
          {/* Video item */}
          {Array.from({ length: 8 }).map((_, index) => (
            <VideoCard
              key={index}
              thumbnail="/assets/default_image.png"
              title="Video 1"
              description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere error sit voluptas esse mollitia hic fugit accusantium blanditiis saepe consequuntur iste, cum officia cupiditate aliquid? Quibusdam debitis sapiente error saepe."
              videoSrc="https://www.youtube.com/watch?v=d7cVLE4SaN0"
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
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Modals */}
      {toggleModalCategory && (
        <ModalCategory
          onToggleModal={setToggleModalCategory}
        />
      )}

      {toggleModalVideo && (
        <ModalVideo
          onToggleModal={setToggleModalVideo}
        />
      )}
    </div>
  )
}

export default Videos