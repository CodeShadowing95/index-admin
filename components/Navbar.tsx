import React from 'react'

const Navbar = () => {
  return (
    <div className="flex justify-between items-center border-b px-8 py-4 shadow sticky">
        <form>
            <label htmlFor='search' className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input type="search" id="search" className="block w-full max-w-[30rem] p-4 ps-10 text-sm text-gray-900 outline-none border-gray-300 sm:max-w-[40rem] md:max-w-[50rem] lg:max-w-[60rem]" placeholder="Rechercher..." required />
            </div>
        </form>

        {/* Bouton Notifications */}
        <button className="flex items-center font-semibold p-2 rounded hover:bg-orange-100">
            <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' viewBox="0 0 24 24"><path fill="currentColor" d="M21 19v1H3v-1l2-2v-6c0-3.1 2.03-5.83 5-6.71V4a2 2 0 0 1 2-2a2 2 0 0 1 2 2v.29c2.97.88 5 3.61 5 6.71v6zm-7 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2"/></svg>
        </button>
    </div>
  )
}

export default Navbar