import React from 'react'

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
            <input type="text" className="block w-[200px] p-2.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 outline-none" placeholder="Rechercher une information..." />
          </div>
          <button data-dropdown-toggle="dropdown" className="text-gray-700 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 font-medium rounded-lg text-sm px-4 py-1.5 text-center inline-flex items-center" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-1 text-gray-700" viewBox="0 0 24 24"><path fill="currentColor" d="M5.5 7A1.5 1.5 0 0 1 4 5.5A1.5 1.5 0 0 1 5.5 4A1.5 1.5 0 0 1 7 5.5A1.5 1.5 0 0 1 5.5 7m15.91 4.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.11 0-2 .89-2 2v7c0 .55.22 1.05.59 1.41l8.99 9c.37.36.87.59 1.42.59s1.05-.23 1.41-.59l7-7c.37-.36.59-.86.59-1.41c0-.56-.23-1.06-.59-1.42"/></svg>
            Tags
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-1 text-gray-700" viewBox="0 0 24 24"><path fill="currentColor" d="m7 10l5 5l5-5z" /></svg>
          </button>
          <button data-dropdown-toggle="dropdown" className="text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 font-medium rounded-lg text-sm px-4 py-1.5 text-center inline-flex items-center" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-1 text-gray-700" viewBox="0 0 24 24"><path fill="currentColor" d="M3 13h12v-2H3m0-5v2h18V6M3 18h6v-2H3z"/></svg>
            Trier par:<span className="ml-1 text-gray-700 font-semibold">Date</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-1 text-gray-700" viewBox="0 0 24 24"><path fill="currentColor" d="m7 10l5 5l5-5z" /></svg>
          </button>
          {/* Divider */}
          <div className="w-px bg-gray-200"></div>
          <button type="button" className="px-3 py-2 text-sm font-medium text-center inline-flex items-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-1 text-white" viewBox="0 0 24 24"><path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"/></svg>
            Nouvelle IL
          </button>
        </div>
      </div>

    </div>
  )
}

export default Videos