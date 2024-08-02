"use client";

import React, { useEffect, useState } from 'react'
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Image from 'next/image'
import Link from 'next/link';

const Sidebar = () => {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [selected, setSelected] = useState("Home");
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [tooltip, setTooltip] = useState("")

  const handleItemClick = (item: string) => {
    setSelected(item);
    localStorage.setItem("selected", item);
  };

  const handleCollapse = () => {
    setIsCollapsed(prevState => {
      const newState = !prevState
      if (typeof window !== 'undefined') {
        localStorage.setItem('isCollapsed', newState.toString())
      }
      return newState
    })
  };

  useEffect(() => {
    if(status === "unauthenticated") {
      router.push("/login")
    }
  }, [router, session, status])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedValue = localStorage.getItem('isCollapsed') === 'true'
      setIsCollapsed(storedValue)
    }
  }, [])

  useEffect(() => {
    setSelected(prevState =>  {
      if (typeof window !== 'undefined') {
        localStorage.setItem("selected", prevState)
      }
      return prevState || "Home"
    })
    setIsCollapsed(prevState => {
      if (typeof window !== 'undefined') {
        localStorage.setItem('isCollapsed', prevState.toString())
      }
      return prevState || false
    })
  }, [])

  return (
    <div className={`sticky top-0 h-screen flex flex-col ${isCollapsed ? "w-16" : "md:w-64 sm:w-16"} transition-all bg-[#de7665]/70`}>
      <div className="h-full pt-4 flex flex-col justify-between relative">
        {/* Collapse sidebar button */}
        <div className="absolute top-20 right-0 translate-x-1/2 z-10 p-1 border-2 border-gray-300 rounded-full bg-white flex items-center justify-center cursor-pointer hover:bg-orange-100" onClick={handleCollapse}>
          {isCollapsed ? (
            <svg xmlns="http://www.w3.org/2000/svg" className='w-3 h-3 text-gray-500 rotate-180 transition-all duration-300' viewBox="0 0 24 24"><path fill="currentColor" d="M15.41 16.58L10.83 12l4.58-4.59L14 6l-6 6l6 6z"/></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className='w-3 h-3 text-gray-500 transition-all duration-300' viewBox="0 0 24 24"><path fill="currentColor" d="M15.41 16.58L10.83 12l4.58-4.59L14 6l-6 6l6 6z"/></svg>
          )}
        </div>
        
        {/* Liste des modules */}
        <div className="px-4">
          <div className="w-full flex justify-center">
            <Image src="/assets/logo-index-ok.png" alt="Logo" width={150} height={150} />
          </div>
          <ul className="my-12 space-y-2">
            <li>
              <Link href="/dashboard" className={`relative flex items-center gap-2 p-2 rounded text-sm ${selected === "Home" ? "bg-white font-semibold" : "font-medium hover:bg-orange-50"}`} onClick={() => handleItemClick("Home")} onMouseEnter={() => setTooltip("Dashboard")} onMouseLeave={() => setTooltip("")}>
                <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' viewBox="0 0 24 24"><path fill="currentColor" d="M13 3v6h8V3m-8 18h8V11h-8M3 21h8v-6H3m0-2h8V3H3z" /></svg>
                <p className={`${isCollapsed ? "hidden" : "hidden md:block"}`}>Dashboard</p>

                {/* Tooltip */}
                <div className={`absolute -right-1 translate-x-full w-fit z-50 inline-block px-3 py-2 text-sm font-medium text-white text-nowrap bg-gray-800 rounded-lg shadow-sm transition-all ${tooltip === "Dashboard" && isCollapsed ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                  Dashboard
                </div>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/local-infos" className={`flex items-center gap-2 p-2 text-sm rounded ${selected === "LocalInfos" ? "bg-white font-semibold" : "font-medium hover:bg-orange-50"}`} onClick={() => handleItemClick("LocalInfos")} onMouseEnter={() => setTooltip("Infos Locales")} onMouseLeave={() => setTooltip("")}>
                <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' viewBox="0 0 24 24"><path fill="currentColor" d="M20 3H4c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2M5 7h5v6H5zm14 10H5v-2h14zm0-4h-7v-2h7zm0-4h-7V7h7z" /></svg>
                <p className={`${isCollapsed ? "hidden" : "hidden md:block"}`}>Infos Locales</p>

                {/* Tooltip */}
                <div role="tooltip" className={`absolute -right-1 translate-x-full w-fit z-50 inline-block px-3 py-2 text-sm font-medium text-white text-nowrap bg-gray-800 rounded-lg shadow-sm transition-all ${tooltip === "Infos Locales" && isCollapsed ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                  Infos Locales
                </div>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/videos" className={`flex items-center gap-2 p-2 text-sm rounded ${selected === "Videos" ? "bg-white font-semibold" : "font-medium hover:bg-orange-50"}`} onClick={() => handleItemClick("Videos")} onMouseEnter={() => setTooltip("Vidéos")} onMouseLeave={() => setTooltip("")}>
                <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' viewBox="0 0 24 24"><path fill="currentColor" d="M4 2h10v2H4v10H2V4c0-1.11.89-2 2-2m4 4h10v2H8v10H6V8c0-1.11.89-2 2-2m4 4h8c1.11 0 2 .89 2 2v8c0 1.11-.89 2-2 2h-8c-1.11 0-2-.89-2-2v-8c0-1.11.89-2 2-2m2 2v8l6-4z" /></svg>
                <p className={`${isCollapsed ? "hidden" : "hidden md:block"}`}>Vidéos</p>

                {/* Tooltip */}
                <div role="tooltip" className={`absolute -right-1 translate-x-full w-fit z-50 inline-block px-3 py-2 text-sm font-medium text-white text-nowrap bg-gray-800 rounded-lg shadow-sm transition-all ${tooltip === "Vidéos" && isCollapsed ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                  Vidéos
                </div>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/audios" className={`flex items-center gap-2 p-2 text-sm rounded pointer-events-none`} onMouseEnter={() => setTooltip("Audios")} onMouseLeave={() => setTooltip("")}>
                <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 text-black/50' viewBox="0 0 24 24"><path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M7.76 16.24l-1.41 1.41A7.9 7.9 0 0 1 4 12c0-2.05.78-4.1 2.34-5.66l1.41 1.41A6.05 6.05 0 0 0 6 12c0 1.54.59 3.07 1.76 4.24M12 16a4 4 0 0 1-4-4a4 4 0 0 1 4-4a4 4 0 0 1 4 4a4 4 0 0 1-4 4m5.66 1.66l-1.41-1.41A6.05 6.05 0 0 0 18 12c0-1.54-.59-3.07-1.76-4.24l1.41-1.41A7.9 7.9 0 0 1 20 12c0 2.05-.78 4.1-2.34 5.66M12 10a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2"/></svg>
                <p className={`${isCollapsed ? "hidden" : "hidden md:block"} text-black/50`}>Audios (À venir)</p>

                {/* Tooltip */}
                <div role="tooltip" className={`absolute -right-1 translate-x-full w-fit z-50 inline-block px-3 py-2 text-sm font-medium text-white text-nowrap bg-gray-800 rounded-lg shadow-sm transition-all ${tooltip === "Audios" && isCollapsed ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                  Livres Audios (Bientôt)
                </div>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/services-index" className={`flex items-center gap-2 p-2 text-sm rounded ${selected === "Services" ? "bg-white font-semibold" : "font-medium hover:bg-orange-50"}`} onClick={() => handleItemClick("Services")} onMouseEnter={() => setTooltip("Services")} onMouseLeave={() => setTooltip("")}>
                <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' viewBox="0 0 24 24"><path fill="currentColor" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2L9.19 8.62L2 9.24l5.45 4.73L5.82 21z"/></svg>
                <p className={`${isCollapsed ? "hidden" : "hidden md:block"}`}>Services</p>

                {/* Tooltip */}
                <div role="tooltip" className={`absolute -right-1 translate-x-full w-fit z-50 inline-block px-3 py-2 text-sm font-medium text-white text-nowrap bg-gray-800 rounded-lg shadow-sm transition-all ${tooltip === "Services" && isCollapsed ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                  Services
                </div>
              </Link>
            </li>
          </ul>
          <p className={`${isCollapsed ? "hidden" : "hidden md:block"} text-sm font-medium text-black/50 px-2 mb-4`}>Paramètres</p>
          <ul className="mt-2 space-y-2">
            <li>
              <Link href="/dashboard/members" className={`flex items-center gap-2 p-2 text-sm rounded ${selected === "Utilisateurs" ? "bg-white font-semibold" : "font-medium hover:bg-orange-50"}`} onClick={() => handleItemClick("Utilisateurs")} onMouseEnter={() => setTooltip("Utilisateurs")} onMouseLeave={() => setTooltip("")}>
                <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' viewBox="0 0 24 24"><path fill="currentColor" d="M12 5.5A3.5 3.5 0 0 1 15.5 9a3.5 3.5 0 0 1-3.5 3.5A3.5 3.5 0 0 1 8.5 9A3.5 3.5 0 0 1 12 5.5M5 8c.56 0 1.08.15 1.53.42c-.15 1.43.27 2.85 1.13 3.96C7.16 13.34 6.16 14 5 14a3 3 0 0 1-3-3a3 3 0 0 1 3-3m14 0a3 3 0 0 1 3 3a3 3 0 0 1-3 3c-1.16 0-2.16-.66-2.66-1.62a5.54 5.54 0 0 0 1.13-3.96c.45-.27.97-.42 1.53-.42M5.5 18.25c0-2.07 2.91-3.75 6.5-3.75s6.5 1.68 6.5 3.75V20h-13zM0 20v-1.5c0-1.39 1.89-2.56 4.45-2.9c-.59.68-.95 1.62-.95 2.65V20zm24 0h-3.5v-1.75c0-1.03-.36-1.97-.95-2.65c2.56.34 4.45 1.51 4.45 2.9z" /></svg>
                <p className={`${isCollapsed ? "hidden" : "hidden md:block"}`}>Administrateurs</p>

                {/* Tooltip */}
                <div role="tooltip" className={`absolute -right-1 translate-x-full w-fit z-50 inline-block px-3 py-2 text-sm font-medium text-white text-nowrap bg-gray-800 rounded-lg shadow-sm transition-all ${tooltip === "Utilisateurs" && isCollapsed ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                  Administrateurs
                </div>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/report" className="flex items-center gap-2 font-medium p-2 text-sm rounded hover:bg-orange-50" onClick={() => handleItemClick("Signaler")} onMouseEnter={() => setTooltip("Signaler")} onMouseLeave={() => setTooltip("")}>
                <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' viewBox="0 0 24 24"><path fill="currentColor" d="M21 0H3C1.9 0 1 .9 1 2v16c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2m0 5H3V2h18zM7 22h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z"/></svg>
                <p className={`${isCollapsed ? "hidden" : "hidden md:block"}`}>Logs d{`'`}activités</p>

                {/* Tooltip */}
                <div role="tooltip" className={`absolute -right-1 translate-x-full w-fit z-50 inline-block px-3 py-2 text-sm font-medium text-white text-nowrap bg-gray-800 rounded-lg shadow-sm transition-all ${tooltip === "Signaler" && isCollapsed ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                  Logs d{`'`}activités
                </div>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/report" className="flex items-center gap-2 font-medium p-2 text-sm rounded hover:bg-orange-50" onClick={() => handleItemClick("Signaler")} onMouseEnter={() => setTooltip("Signaler")} onMouseLeave={() => setTooltip("")}>
                <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' viewBox="0 0 24 24"><path fill="currentColor" d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97s-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1s.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64z"/></svg>
                <p className={`${isCollapsed ? "hidden" : "hidden md:block"}`}>Préférences</p>

                {/* Tooltip */}
                <div role="tooltip" className={`absolute -right-1 translate-x-full w-fit z-50 inline-block px-3 py-2 text-sm font-medium text-white text-nowrap bg-gray-800 rounded-lg shadow-sm transition-all ${tooltip === "Signaler" && isCollapsed ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                  Préférences
                </div>
              </Link>
            </li>
          </ul>
        </div>

        {/* Déconnexion */}
        <div className="w-full flex justify-between items-center bg-orange-50 p-4 mt-auto">
          {/* Profile */}
          <span className={`text-sm font-semibold ${isCollapsed ? "hidden" : "block"}`}>Déconnexion</span>

          {/* Bouton deconnexion */}
          <button className="flex items-center font-semibold p-2 rounded hover:bg-orange-100" onClick={() => {
            signOut()
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' viewBox="0 0 24 24"><path fill="currentColor" d="m17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5M4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4z" /></svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar