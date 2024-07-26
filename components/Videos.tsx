import React from 'react'
import VideoCard from './VideoCard'

const Videos = () => {
  return (
    <div className="flex-1">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold text-gray-900">Nos Vidéos</h1>
          <p className="text-gray-500 text-sm">Gestion des vidéos de votre espace.</p>
        </div>
        <div className="flex gap-2">
          <div>
            <input type="text" className="block w-[200px] p-2.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 outline-none" placeholder="Rechercher une vidéo..." />
          </div>
          <button data-dropdown-toggle="dropdown" className="text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 font-medium rounded-lg text-sm px-4 py-1.5 text-center inline-flex items-center" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 me-2 text-gray-700" viewBox="0 0 24 24"><path fill="currentColor" d="M3 13h12v-2H3m0-5v2h18V6M3 18h6v-2H3z"/></svg>
            Trier par:<span className="ml-1 text-gray-700 font-semibold">Date</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ms-2 text-gray-700" viewBox="0 0 24 24"><path fill="currentColor" d="m7 10l5 5l5-5z" /></svg>
          </button>
          {/* Divider */}
          <div className="w-px bg-gray-200"></div>
          <button type="button" className="px-3 py-2 text-sm font-medium text-center inline-flex items-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-1" viewBox="0 0 24 24"><path fill="currentColor" d="m19.65 6.5l-2.74-3.54l3.93-.78l.78 3.92zm-2.94.57l-2.74-3.53l-1.97.39l2.75 3.53zM19 13c1.1 0 2.12.3 3 .81V10H2v10a2 2 0 0 0 2 2h9.81c-.51-.88-.81-1.9-.81-3c0-3.31 2.69-6 6-6m-7.19-4.95L9.07 4.5l-1.97.41l2.75 3.53zM4.16 5.5l-.98.19a2.01 2.01 0 0 0-1.57 2.35L2 10l4.9-.97zM20 18v-3h-2v3h-3v2h3v3h2v-3h3v-2z"/></svg>
            Nouvelle Vidéo
          </button>
        </div>
      </div>

      {/* Videos listing */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4">
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
        <VideoCard
          thumbnail="/assets/default_image.png"
          title="Video 1"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere error sit voluptas esse mollitia hic fugit accusantium blanditiis saepe consequuntur iste, cum officia cupiditate aliquid? Quibusdam debitis sapiente error saepe."
          videoSrc="https://www.youtube.com/watch?v=QH2-TGUlwu4"
        />
      </div>
    </div>
  )
}

export default Videos