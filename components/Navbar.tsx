"use client";

import React, { useState } from 'react'
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link';

const Navbar = () => {
  const { data: session } = useSession()
  const [userDropdown, setUserDropdown] = useState(false)

  return (
    <div className="flex justify-between items-center border-b px-8 py-2 shadow sticky top-0 z-50 bg-white">
        <form>
            <label htmlFor='search' className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input type="search" id="search" className="block w-full max-w-[30rem] p-4 ps-10 text-sm text-gray-900 outline-none border-gray-300 sm:max-w-[40rem] md:max-w-[50rem] lg:max-w-[60rem]" placeholder="Rechercher..." required />
            </div>
        </form>

        <div className="flex items-center gap-2">
          {/* Date now like Lun, 31 Jan 2022 */}
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24"><path fill="currentColor" d="M9 10v2H7v-2zm4 0v2h-2v-2zm4 0v2h-2v-2zm2-7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h1V1h2v2h8V1h2v2zm0 16V8H5v11zM9 14v2H7v-2zm4 0v2h-2v-2zm4 0v2h-2v-2z"/></svg>
            <p className="text-gray-500 text-sm font-medium">
              {new Date().toLocaleString('fr-FR', {
                weekday: 'short',
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}
            </p>
          </div>
          {/* Divider */}
          <div className="w-[1px] h-6 mx-1 bg-gray-300"></div>
          {/* Bouton Notifications */}
          <button className="flex items-center font-semibold p-2 rounded hover:bg-orange-100 relative">
              <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 text-gray-700' viewBox="0 0 24 24"><path fill="currentColor" d="M21 19v1H3v-1l2-2v-6c0-3.1 2.03-5.83 5-6.71V4a2 2 0 0 1 2-2a2 2 0 0 1 2 2v.29c2.97.88 5 3.61 5 6.71v6zm-7 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2"/></svg>
              <div className="absolute inline-flex items-center justify-center w-3 h-3 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full top-1 end-1"></div>
          </button>
          {/* Bouton Aide */}
          <button className="flex items-center font-semibold p-2 rounded hover:bg-orange-100 relative">
            <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 text-gray-700' viewBox="0 0 24 24"><path fill="currentColor" d="m15.07 11.25l-.9.92C13.45 12.89 13 13.5 13 15h-2v-.5c0-1.11.45-2.11 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41a2 2 0 0 0-2-2a2 2 0 0 0-2 2H8a4 4 0 0 1 4-4a4 4 0 0 1 4 4a3.2 3.2 0 0 1-.93 2.25M13 19h-2v-2h2M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10c0-5.53-4.5-10-10-10" /></svg>
          </button>
          {/* Divider */}
          <div className="w-[1px] h-6 mx-1 bg-gray-300"></div>
          {/* Avatar */}
          <div className="relative flex items-center cursor-pointer">
            <div className="flex items-center gap-2 py-2" onClick={() => setUserDropdown(!userDropdown)}>
              {session?.user?.name && <span className="font-semibold">{session?.user?.name?.split(" ")[0]}</span>}
              {session?.user?.image && <Image src={session?.user?.image} width={25} height={25} className='rounded-full' alt="profile"/>}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-500" viewBox="0 0 24 24"><path fill="currentColor" d="m7 10l5 5l5-5z"/></svg>
            </div>
            {/* Menu */}
            <div className={`${userDropdown ? "block" : "hidden"} absolute -bottom-1 translate-y-full right-0 w-[300px] max-w-[300px] bg-white border border-gray-200 rounded-lg shadow-lg p-4 m-2`}>
              <div className="w-full flex flex-col justify-center items-center">
                {session?.user?.image && <Image src={session?.user?.image} width={80} height={80} className='rounded-full' alt="profile"/>}
                <p className="text-gray-700 font-semibold mt-2">{session?.user?.name}</p>
                <p className="text-gray-500 text-xs font-medium mt-1">{session?.user?.email}</p>
                <div className="w-full flex justify-between mt-8">
                  <Link href="/profile" className="text-gray-500 hover:text-gray-700 font-semibold p-2 rounded hover:bg-gray-100">Profil</Link>
                  <button className="text-red-500 font-semibold hover:text-red-700 p-2 rounded hover:bg-red-100" onClick={() => signOut()}>Deconnexion</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar