"use client";

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Sidebar = () => {
    const [selected, setSelected] = useState("Home")

  return (
    <div className="h-screen flex flex-col md:w-64 sm:w-16 transition-all bg-[#de7665]/70 sticky">
        <div className="h-full pt-4 flex flex-col justify-between">
            {/* Liste des modules */}
            <div className="px-4">
                <div className="w-full flex justify-center">
                    <Image src="/assets/logo-index-ok.png" alt="Logo" width={150} height={150} />
                </div>
                <ul className="mt-12 space-y-2">
                    <li>
                        <Link href="/" className={`flex items-center gap-2 p-2 rounded text-sm ${selected === "Home" ? "bg-white font-semibold" : "font-medium hover:bg-orange-50"}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' viewBox="0 0 24 24"><path fill="currentColor" d="M13 3v6h8V3m-8 18h8V11h-8M3 21h8v-6H3m0-2h8V3H3z"/></svg>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/local-infos" className="flex items-center gap-2 font-medium p-2 text-sm rounded hover:bg-orange-50">
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' viewBox="0 0 24 24"><path fill="currentColor" d="M20 3H4c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2M5 7h5v6H5zm14 10H5v-2h14zm0-4h-7v-2h7zm0-4h-7V7h7z"/></svg>
                            Infos Locales
                        </Link>
                    </li>
                    <li>
                        <a href="#" className="flex items-center gap-2 font-medium p-2 text-sm rounded hover:bg-orange-50">
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' viewBox="0 0 24 24"><path fill="currentColor" d="M4 2h10v2H4v10H2V4c0-1.11.89-2 2-2m4 4h10v2H8v10H6V8c0-1.11.89-2 2-2m4 4h8c1.11 0 2 .89 2 2v8c0 1.11-.89 2-2 2h-8c-1.11 0-2-.89-2-2v-8c0-1.11.89-2 2-2m2 2v8l6-4z"/></svg>
                            Vidéos
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center gap-2 font-medium p-2 text-sm rounded hover:bg-orange-50">
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' viewBox="0 0 24 24"><path fill="currentColor" d="M12 5.5A3.5 3.5 0 0 1 15.5 9a3.5 3.5 0 0 1-3.5 3.5A3.5 3.5 0 0 1 8.5 9A3.5 3.5 0 0 1 12 5.5M5 8c.56 0 1.08.15 1.53.42c-.15 1.43.27 2.85 1.13 3.96C7.16 13.34 6.16 14 5 14a3 3 0 0 1-3-3a3 3 0 0 1 3-3m14 0a3 3 0 0 1 3 3a3 3 0 0 1-3 3c-1.16 0-2.16-.66-2.66-1.62a5.54 5.54 0 0 0 1.13-3.96c.45-.27.97-.42 1.53-.42M5.5 18.25c0-2.07 2.91-3.75 6.5-3.75s6.5 1.68 6.5 3.75V20h-13zM0 20v-1.5c0-1.39 1.89-2.56 4.45-2.9c-.59.68-.95 1.62-.95 2.65V20zm24 0h-3.5v-1.75c0-1.03-.36-1.97-.95-2.65c2.56.34 4.45 1.51 4.45 2.9z"/></svg>
                            Utilisateurs
                        </a>
                    </li>
                </ul>
                {/* Divider */}
                <div className="h-px bg-gray-200/40 my-4"></div>
                <ul className="mt-2 space-y-2">
                    <li>
                        <a href="#" className="flex items-center gap-2 font-medium p-2 text-sm rounded hover:bg-orange-50">
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' viewBox="0 0 24 24"><path fill="currentColor" d="m15.07 11.25l-.9.92C13.45 12.89 13 13.5 13 15h-2v-.5c0-1.11.45-2.11 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41a2 2 0 0 0-2-2a2 2 0 0 0-2 2H8a4 4 0 0 1 4-4a4 4 0 0 1 4 4a3.2 3.2 0 0 1-.93 2.25M13 19h-2v-2h2M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10c0-5.53-4.5-10-10-10"/></svg>
                            Aide
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center gap-2 font-medium p-2 text-sm rounded hover:bg-orange-50">
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' viewBox="0 0 24 24"><path fill="currentColor" d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97s-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1s.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64z"/></svg>
                            Paramètres
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center gap-2 font-medium p-2 text-sm rounded hover:bg-orange-50">
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' viewBox="0 0 24 24"><path fill="currentColor" d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"/></svg>
                            Signaler
                        </a>
                    </li>
                </ul>
            </div>

            {/* Déconnexion */}
            <div className="w-full flex justify-between items-center bg-orange-50 p-4 mt-auto">
                {/* Profile */}
                <div className="flex items-center gap-2">
                    <Image src="/assets/149071.png" width={32} height={32} alt="profile" className="w-8 h-8"/>
                    <span className="font-semibold">Olivier</span>
                </div>

                {/* Bouton deconnexion */}
                <button className="flex items-center font-semibold p-2 rounded hover:bg-orange-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' viewBox="0 0 24 24"><path fill="currentColor" d="m17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5M4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4z"/></svg>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Sidebar