import React from 'react'

const LocalInfos = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold text-gray-900">Infos Locales</h1>
          <p className="text-gray-500 text-sm">Gestion des informations locales de votre espace.</p>
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

      {/* Liste des ILs */}
      <div className="w-full flex flex-col gap-4 mt-8">
        {/* Skeletons */}
        <div className="w-full h-[11rem] flex justify-between border border-gray-300 p-2 rounded-xl">
          {/* Left side */}
          <div className="flex gap-4">
            {/* Image */}
            <div className="w-[8rem] h-full bg-gray-200 rounded-xl animate-pulse"></div>
            <div className="flex flex-col justify-between">
              {/* Titre */}
              <p className="text-lg text-gray-700 font-bold">Lorem Ipsum Title</p>
              <p className="text-sm font-medium text-gray-400 max-w-[500px] line-clamp-3 text-balance">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sed consequuntur unde voluptatum assumenda possimus aliquam similique eveniet incidunt labore! Illum a aliquam perspiciatis sunt laudantium? Ullam nostrum quasi in.</p>
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                <span className="text-xs font-medium text-gray-700 bg-gray-200 px-2 py-1 rounded-full">Tag 1</span>
                <span className="text-xs font-medium text-gray-700 bg-gray-200 px-2 py-1 rounded-full">Tag 2</span>
              </div>
            </div>
          </div>
          {/* Right side */}
          <div className="flex flex-col justify-between items-end">
            <div className="flex items-center gap-4">
              {/* Visits counts */}
              <div className="flex gap-2 p-2 hover:bg-gray-100 rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-700" viewBox="0 0 24 24"><path fill="currentColor" d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5"/></svg>
                <p className="text-sm font-medium text-gray-700">0</p>
              </div>
              {/* Published status */}
              <span className="bg-green-100 text-green-700 border-2 border-green-600 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-2.5 h-2.5 me-1.5" viewBox="0 0 32 32"><circle cx="16" cy="16" r="8" fill="currentColor"/></svg>
                Publié
              </span>
              {/* Actions */}
              <button className="flex items-center font-semibold w-6 h-6 rounded border-2 border-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-fit h-fit text-gray-700" viewBox="0 0 24 24"><path fill="currentColor" d="M16 12a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2m-6 0a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2m-6 0a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2"/></svg>
              </button>
            </div>
            <div className="flex gap-2">
              <div className="w-[100px] h-16 bg-gray-300 rounded animate-pulse"></div>
              <div className="w-[1px] bg-gray-300"></div>
              <div className="w-[100px] h-16 bg-gray-300 rounded animate-pulse"></div>
              <div className="w-[1px] bg-gray-300"></div>
              <div className="w-[100px] h-16 bg-gray-300 rounded animate-pulse"></div>
              <div className="w-[1px] bg-gray-300"></div>
              <div className="w-[100px] h-16 bg-gray-300 rounded animate-pulse"></div>
            </div>
          </div>
        </div>
        <div className="w-full h-[11rem] flex justify-between border border-gray-300 p-2 rounded-xl">
          {/* Left side */}
          <div className="flex gap-4">
            {/* Image */}
            <div className="w-[8rem] h-full bg-gray-200 rounded-xl animate-pulse"></div>
            <div className="flex flex-col justify-between">
              {/* Titre */}
              <p className="text-lg text-gray-700 font-bold">Lorem Ipsum Title</p>
              <p className="text-sm font-medium text-gray-400 max-w-[500px] line-clamp-3 text-balance">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sed consequuntur unde voluptatum assumenda possimus aliquam similique eveniet incidunt labore! Illum a aliquam perspiciatis sunt laudantium? Ullam nostrum quasi in.</p>
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                <span className="text-xs font-medium text-gray-700 bg-gray-200 px-2 py-1 rounded-full">Tag 1</span>
                <span className="text-xs font-medium text-gray-700 bg-gray-200 px-2 py-1 rounded-full">Tag 2</span>
              </div>
            </div>
          </div>
          {/* Right side */}
          <div className="flex flex-col justify-between items-end">
            <div className="flex items-center gap-4">
              {/* Visits counts */}
              <div className="flex gap-2 p-2 hover:bg-gray-100 rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-700" viewBox="0 0 24 24"><path fill="currentColor" d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5"/></svg>
                <p className="text-sm font-medium text-gray-700">0</p>
              </div>
              {/* Published status */}
              <span className="bg-amber-100 text-amber-700 border-2 border-amber-600 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-2.5 h-2.5 me-1.5" viewBox="0 0 32 32"><circle cx="16" cy="16" r="8" fill="currentColor"/></svg>
                En attente de publication
              </span>
              {/* Actions */}
              <button className="flex items-center font-semibold w-6 h-6 rounded border-2 border-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-fit h-fit text-gray-700" viewBox="0 0 24 24"><path fill="currentColor" d="M16 12a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2m-6 0a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2m-6 0a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2"/></svg>
              </button>
            </div>
            <div className="flex gap-2">
              <div className="w-[100px] h-16 bg-gray-300 rounded animate-pulse"></div>
              <div className="w-[1px] bg-gray-300"></div>
              <div className="w-[100px] h-16 bg-gray-300 rounded animate-pulse"></div>
              <div className="w-[1px] bg-gray-300"></div>
              <div className="w-[100px] h-16 bg-gray-300 rounded animate-pulse"></div>
              <div className="w-[1px] bg-gray-300"></div>
              <div className="w-[100px] h-16 bg-gray-300 rounded animate-pulse"></div>
            </div>
          </div>
        </div>
        <div className="w-full h-[11rem] flex justify-between border border-gray-300 p-2 rounded-xl">
          {/* Left side */}
          <div className="flex gap-4">
            {/* Image */}
            <div className="w-[8rem] h-full bg-gray-200 rounded-xl animate-pulse"></div>
            <div className="flex flex-col justify-between">
              {/* Titre */}
              <p className="text-lg text-gray-700 font-bold">Lorem Ipsum Title</p>
              <p className="text-sm font-medium text-gray-400 max-w-[500px] line-clamp-3 text-balance">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sed consequuntur unde voluptatum assumenda possimus aliquam similique eveniet incidunt labore! Illum a aliquam perspiciatis sunt laudantium? Ullam nostrum quasi in.</p>
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                <span className="text-xs font-medium text-gray-700 bg-gray-200 px-2 py-1 rounded-full">Tag 1</span>
                <span className="text-xs font-medium text-gray-700 bg-gray-200 px-2 py-1 rounded-full">Tag 2</span>
              </div>
            </div>
          </div>
          {/* Right side */}
          <div className="flex flex-col justify-between items-end">
            <div className="flex items-center gap-4">
              {/* Visits counts */}
              <div className="flex gap-2 p-2 hover:bg-gray-100 rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-700" viewBox="0 0 24 24"><path fill="currentColor" d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5"/></svg>
                <p className="text-sm font-medium text-gray-700">0</p>
              </div>
              {/* Published status */}
              <span className="bg-green-100 text-green-700 border-2 border-green-600 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-2.5 h-2.5 me-1.5" viewBox="0 0 32 32"><circle cx="16" cy="16" r="8" fill="currentColor"/></svg>
                Publié
              </span>
              {/* Actions */}
              <button className="flex items-center font-semibold w-6 h-6 rounded border-2 border-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-fit h-fit text-gray-700" viewBox="0 0 24 24"><path fill="currentColor" d="M16 12a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2m-6 0a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2m-6 0a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2"/></svg>
              </button>
            </div>
            <div className="flex gap-2">
              <div className="w-[100px] h-16 bg-gray-300 rounded animate-pulse"></div>
              <div className="w-[1px] bg-gray-300"></div>
              <div className="w-[100px] h-16 bg-gray-300 rounded animate-pulse"></div>
              <div className="w-[1px] bg-gray-300"></div>
              <div className="w-[100px] h-16 bg-gray-300 rounded animate-pulse"></div>
              <div className="w-[1px] bg-gray-300"></div>
              <div className="w-[100px] h-16 bg-gray-300 rounded animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <nav aria-label="Page navigation example" className="flex justify-center mt-8">
        <ul className="inline-flex -space-x-px text-base h-10">
          <li>
            <a href="#" className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 text-sm bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700">Previous</a>
          </li>
          <li>
            <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 text-sm bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">1</a>
          </li>
          <li>
            <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 text-sm bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">2</a>
          </li>
          <li>
            <a href="#" aria-current="page" className="flex items-center justify-center px-4 h-10 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
          </li>
          <li>
            <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 text-sm bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">4</a>
          </li>
          <li>
            <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 text-sm bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">5</a>
          </li>
          <li>
            <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 text-sm bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700">Next</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default LocalInfos