"use client";

import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { ChartExample } from '@/components';
import { ModalKpi } from '@/components/Modals';
import { AddKpiBtn } from '../mobile';

const Dashboard = () => {
  const { data: session } = useSession()

  // Dropdowns & Menus
  const [togglePeriod, setTogglePeriod] = useState(false)
  const [selectedPeriod, setSelectedPeriod] = useState("Semaine")
  const [parameter, setParameter] = useState("Général")
  // Modals
  const [toggleModalKpi, setToggleModalKpi] = useState(false)

  // Close the dropdown when the user clicks outside of it
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (togglePeriod && !event.target.closest('#dropdown-period')) {
        setTogglePeriod(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [togglePeriod])



  return (
    <div className="relative">
      {/* Mobile - Add Kpi STARTS */}
      <AddKpiBtn />
      {/* Mobile - Add Kpi ENDS */}

      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Welcome Back, {session?.user?.name ? session?.user?.name.split(" ")[0] : "User Indextv"} 👋</h1>
          <p className="text-gray-500 text-sm">Présentation de la vue générale de vos activités et gestion de votre espace.</p>
        </div>
        <button type="button" className="px-3 py-2 text-xs font-medium text-center md:inline-flex hidden items-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300" onClick={() => setToggleModalKpi(true)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" viewBox="0 0 24 24"><path fill="currentColor" d="M22 5v2h-3v3h-2V7h-3V5h3V2h2v3zm-3 14H5V5h6V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-6h-2zm-4-6v4h2v-4zm-4 4h2V9h-2zm-2 0v-6H7v6z" /></svg>
          Nouveau KPI
        </button>
      </div>
      {/* Options */}
      <div className="w-full flex sm:flex-row flex-col gap-4 justify-between items-center mt-10">
        <div className="flex gap-2 p-1 bg-gray-200 rounded-lg shadow">
          <button data-dropdown-toggle="dropdown" className={`text-gray-900 ${parameter === "Général" ? "bg-white" : "hover:bg-gray-100"} focus:ring-4 focus:outline-none focus:ring-gray-200 font-medium rounded-lg text-xs px-5 py-2 text-center inline-flex items-center`} type="button" onClick={() => setParameter("Général")}>Général</button>
          <button data-dropdown-toggle="dropdown" className={`text-gray-900  ${parameter === "Tracking" ? "bg-white" : "hover:bg-gray-100"} focus:ring-4 focus:outline-none focus:ring-gray-200 font-medium rounded-lg text-xs px-5 py-2 text-center inline-flex items-center`} type="button" onClick={() => setParameter("Tracking")}>Tracking</button>
        </div>
        <div className="flex gap-2">
          <div className='relative'>
            <button data-dropdown-toggle="dropdown" id='dropdown-period' className="text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 font-medium rounded-lg text-xs px-5 py-2 text-center inline-flex items-center shadow" type="button" onClick={() => setTogglePeriod(!togglePeriod)}>
              Semaine
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-2" viewBox="0 0 24 24"><path fill="currentColor" d="m7 10l5 5l5-5z" /></svg>
            </button>
            {/* Dropdown menu */}
            <div className={`absolute left-0 p-2 -bottom-2 translate-y-full origin-bottom-left w-32 z-10 ${togglePeriod ? "" : "hidden"} bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}>
              <button className={`w-full flex items-center gap-2 p-2 rounded ${selectedPeriod === "Jour" ? "bg-gray-200" : "hover:bg-gray-100"} text-sm text-gray-900`} onClick={() => setSelectedPeriod("Jour")}>Jour</button>
              <button className={`w-full flex items-center gap-2 p-2 rounded ${selectedPeriod === "Semaine" ? "bg-gray-200" : "hover:bg-gray-100"} text-sm text-gray-900`} onClick={() => setSelectedPeriod("Semaine")}>Semaine</button>
              <button className={`w-full flex items-center gap-2 p-2 rounded ${selectedPeriod === "Mois" ? "bg-gray-200" : "hover:bg-gray-100"} text-sm text-gray-900`} onClick={() => setSelectedPeriod("Mois")}>Mois</button>
              <button className={`w-full flex items-center gap-2 p-2 rounded ${selectedPeriod === "Année" ? "bg-gray-200" : "hover:bg-gray-100"} text-sm text-gray-900`} onClick={() => setSelectedPeriod("Année")}>Année</button>
            </div>
          </div>
          <button data-dropdown-toggle="dropdown" className="text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-xs px-5 py-2 text-center inline-flex items-center shadow" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2" viewBox="0 0 24 24"><path fill="currentColor" d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6m-1 1.5L18.5 9H13m-4.07 3.22H16v7.07l-2.12-2.12L11.05 20l-2.83-2.83l2.83-2.82" /></svg>
            Exporter
          </button>
        </div>
      </div>
      {/* <div className="h-[1px] bg-gray-200 my-6" /> */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-6">
        {/* Card "Nombre de visiteurs" */}
        <div className="p-1 rounded-lg shadow-lg relative overflow-hidden">
          {/* Overlay & content */}
          <div className="absolute inset-0 bg-gray-700 overflow-hidden -z-10">
            <div className="absolute -top-12 -right-12 w-52 h-52">
              <svg xmlns="http://www.w3.org/2000/svg" className='w-full h-full opacity-10' viewBox="0 0 24 24"><path fill="currentColor" d="M16.5 15.5c1.72 0 3.75.8 4 1.28v.72h-8v-.72c.25-.48 2.28-1.28 4-1.28m0-1.5c-1.83 0-5.5.92-5.5 2.75V19h11v-2.25c0-1.83-3.67-2.75-5.5-2.75M9 13c-2.33 0-7 1.17-7 3.5V19h7v-1.5H3.5v-1c0-.63 2.79-2.16 6.32-2a5.1 5.1 0 0 1 1.55-1.25A12.3 12.3 0 0 0 9 13m0-6.5A1.5 1.5 0 1 1 7.5 8A1.5 1.5 0 0 1 9 6.5M9 5a3 3 0 1 0 3 3a3 3 0 0 0-3-3m7.5 3.5a1 1 0 1 1-1 1a1 1 0 0 1 1-1m0-1.5A2.5 2.5 0 1 0 19 9.5A2.5 2.5 0 0 0 16.5 7" /></svg>
            </div>
          </div>
          <div className="w-full p-4">
            <div className="w-full flex items-center justify-between">
              <div className="flex items-center gap-2">
                {/* Image */}
                <div className="flex justify-center items-center p-2 bg-white/30 rounded-lg overflow-hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6 text-white' viewBox="0 0 24 24"><path fill="currentColor" d="M16.5 12A2.5 2.5 0 0 0 19 9.5A2.5 2.5 0 0 0 16.5 7A2.5 2.5 0 0 0 14 9.5a2.5 2.5 0 0 0 2.5 2.5M9 11a3 3 0 0 0 3-3a3 3 0 0 0-3-3a3 3 0 0 0-3 3a3 3 0 0 0 3 3m7.5 3c-1.83 0-5.5.92-5.5 2.75V19h11v-2.25c0-1.83-3.67-2.75-5.5-2.75M9 13c-2.33 0-7 1.17-7 3.5V19h7v-2.25c0-.85.33-2.34 2.37-3.47C10.5 13.1 9.66 13 9 13"/></svg>
                </div>
                {/* Texte */}
                <p className="text-[15px] leading-5 font-medium text-white">Clients</p>
              </div>
              <div className="flex justify-center items-center p-2 hover:bg-white/10 rounded-full cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6 text-white' viewBox="0 0 24 24"><path fill="currentColor" d="M13 9h-2V7h2m0 10h-2v-6h2m-1-9A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"/></svg>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-5xl text-white mt-6">152K</p>
              <div className="px-2 py-1 bg-white rounded-full text-gray-900 font-medium text-xs text-center">
                +10%
                <svg xmlns="http://www.w3.org/2000/svg" className='w-4 h-4 inline ml-1 text-green-600' viewBox="0 0 24 24"><path fill="currentColor" d="m16 6l2.29 2.29l-4.88 4.88l-4-4L2 16.59L3.41 18l6-6l4 4l6.3-6.29L22 12V6z"/></svg>
              </div>
            </div>
            <p className="text-[13px] leading-5 text-white mt-4">
              {selectedPeriod === "Jour" && "Par rapport aux dernières 24 heures"}
              {selectedPeriod === "Semaine" && "Par rapport aux 7 derniers jours"}
              {selectedPeriod === "Mois" && "Par rapport aux 30 derniers jours"}
              {selectedPeriod === "Année" && "Par rapport aux 12 derniers mois"}
            </p>
          </div>
        </div>
        <div className="p-1 rounded-lg shadow-lg relative overflow-hidden">
          {/* Overlay & content */}
          <div className="absolute inset-0 bg-red-700 overflow-hidden -z-10">
            <div className="absolute -top-12 -right-12 w-52 h-52">
              <svg xmlns="http://www.w3.org/2000/svg" className='w-full h-full opacity-10' viewBox="0 0 24 24"><path fill="currentColor" d="m5.8 21l1.6-7L2 9.2l7.2-.6L12 2l2.8 6.6l7.2.6l-3.2 2.8H18c-.7 0-1.4.1-2.1.4l2.2-1.9l-4.4-.4l-1.7-4l-1.7 4l-4.4.4l3.3 2.9l-1 4.3l3.8-2.3l.5.3c-.2.5-.4 1.1-.4 1.6zm12 .2l-2.8-3l1.2-1.2l1.6 1.6l3.6-3.6l1.2 1.4z"/></svg>
            </div>
          </div>
          <div className="w-full z-10 p-4">
            <div className="w-full flex items-center justify-between">
              <div className="flex items-center gap-2">
                {/* Image */}
                <div className="flex justify-center items-center p-2 bg-white/30 rounded-lg overflow-hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6 text-white' viewBox="0 0 24 24"><path fill="currentColor" d="m5.8 21l1.6-7L2 9.2l7.2-.6L12 2l2.8 6.6l7.2.6l-3.2 2.8H18c-3.1 0-5.6 2.3-6 5.3zm12 .2l4.8-4.8l-1.3-1.4l-3.6 3.6l-1.5-1.6l-1.2 1.2z"/></svg>
                </div>
                {/* Texte */}
                <p className="text-[15px] leading-5 font-medium text-white">Abonnements</p>
              </div>
              <div className="flex justify-center items-center p-2 hover:bg-white/10 rounded-full cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6 text-white' viewBox="0 0 24 24"><path fill="currentColor" d="M13 9h-2V7h2m0 10h-2v-6h2m-1-9A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"/></svg>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-5xl text-white mt-6">65</p>
              <div className="px-2 py-1 bg-white rounded-full text-gray-900 font-medium text-xs text-center">
                constant
                <svg xmlns="http://www.w3.org/2000/svg" className='w-4 h-4 ml-1 inline text-blue-600' viewBox="0 0 24 24"><path fill="currentColor" d="m22 12l-4-4v3H3v2h15v3z"/></svg>
              </div>
            </div>
            <p className="text-[13px] leading-5 text-white mt-4">
              {selectedPeriod === "Jour" && "Par rapport aux dernières 24 heures"}
              {selectedPeriod === "Semaine" && "Par rapport aux 7 derniers jours"}
              {selectedPeriod === "Mois" && "Par rapport aux 30 derniers jours"}
              {selectedPeriod === "Année" && "Par rapport aux 12 derniers mois"}
            </p>
          </div>
        </div>
        <div className="p-1 rounded-lg shadow-lg relative overflow-hidden">
          {/* Overlay & content */}
          <div className="absolute inset-0 bg-teal-700 overflow-hidden -z-10">
            <div className="absolute -top-12 -right-12 w-52 h-52">
              <svg xmlns="http://www.w3.org/2000/svg" className='w-full h-full opacity-10' viewBox="0 0 24 24"><path fill="currentColor" d="M20 6v12H4V6zm0-2H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2m-9 6H6v4h5z"/></svg>
            </div>
          </div>
          <div className="w-full z-10 p-4">
            <div className="w-full flex items-center justify-between">
              <div className="flex items-center gap-2">
                {/* Image */}
                <div className="flex justify-center items-center p-2 bg-white/30 rounded-lg overflow-hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6 text-white' viewBox="0 0 24 24"><path fill="currentColor" d="M20 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2M10 14H5v-4h5z"/></svg>
                </div>
                {/* Texte */}
                <p className="text-[15px] leading-5 font-medium text-white">Revenus</p>
              </div>
              <div className="flex justify-center items-center p-2 hover:bg-white/10 rounded-full cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6 text-white' viewBox="0 0 24 24"><path fill="currentColor" d="M13 9h-2V7h2m0 10h-2v-6h2m-1-9A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"/></svg>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-5xl text-white mt-6">€ 712M</p>
              <div className="px-2 py-1 bg-white rounded-full text-gray-900 font-medium text-xs text-center">
                +5%
                <svg xmlns="http://www.w3.org/2000/svg" className='w-4 h-4 inline ml-1 text-green-600' viewBox="0 0 24 24"><path fill="currentColor" d="m16 6l2.29 2.29l-4.88 4.88l-4-4L2 16.59L3.41 18l6-6l4 4l6.3-6.29L22 12V6z"/></svg>
              </div>
            </div>
            <p className="text-[13px] leading-5 text-white mt-4">
              {selectedPeriod === "Jour" && "Par rapport aux dernières 24 heures"}
              {selectedPeriod === "Semaine" && "Par rapport aux 7 derniers jours"}
              {selectedPeriod === "Mois" && "Par rapport aux 30 derniers jours"}
              {selectedPeriod === "Année" && "Par rapport aux 12 derniers mois"}
            </p>
          </div>
        </div>
        <div className="p-1 rounded-lg shadow-lg relative overflow-hidden">
          {/* Overlay & content */}
          <div className="absolute inset-0 bg-amber-700 overflow-hidden -z-10">
            <div className="absolute -top-12 -right-12 w-52 h-52">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-10" viewBox="0 0 24 24"><path fill="currentColor" d="M20 5H9c-1.1 0-2 .9-2 2v14l4-4h9c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 10h-9.8L9 16.2V7h11zM3 7c-.6 0-1 .4-1 1s.4 1 1 1h2V7zm-1 4c-.6 0-1 .4-1 1s.4 1 1 1h3v-2zm-1 4c-.6 0-1 .4-1 1s.4 1 1 1h4v-2z"/></svg>
            </div>
          </div>
          <div className="w-full z-10 p-4">
            <div className="w-full flex items-center justify-between">
              <div className="flex items-center gap-2">
                {/* Image */}
                <div className="flex justify-center items-center p-2 bg-white/30 rounded-lg overflow-hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" viewBox="0 0 24 24"><path fill="currentColor" d="M3 7c-.6 0-1 .4-1 1s.4 1 1 1h2V7zm-1 4c-.6 0-1 .4-1 1s.4 1 1 1h3v-2zm-1 4c-.6 0-1 .4-1 1s.4 1 1 1h4v-2zM20 5H9c-1.1 0-2 .9-2 2v14l4-4h9c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2"/></svg>
                </div>
                {/* Texte */}
                <p className="text-[15px] leading-5 font-medium text-white">Feedbacks</p>
              </div>
              <div className="flex justify-center items-center p-2 hover:bg-white/10 rounded-full cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6 text-white' viewBox="0 0 24 24"><path fill="currentColor" d="M13 9h-2V7h2m0 10h-2v-6h2m-1-9A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"/></svg>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-5xl text-white mt-6">23</p>
              <div className="px-2 py-1 bg-white rounded-full text-gray-900 font-medium text-xs text-center">
                -7%
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 inline ml-1 text-red-600" viewBox="0 0 24 24"><path fill="currentColor" d="m16 18l2.29-2.29l-4.88-4.88l-4 4L2 7.41L3.41 6l6 6l4-4l6.3 6.29L22 12v6z"/></svg>
              </div>
            </div>
            <p className="text-[13px] leading-5 text-white mt-4">
              {selectedPeriod === "Jour" && "Par rapport aux dernières 24 heures"}
              {selectedPeriod === "Semaine" && "Par rapport aux 7 derniers jours"}
              {selectedPeriod === "Mois" && "Par rapport aux 30 derniers jours"}
              {selectedPeriod === "Année" && "Par rapport aux 12 derniers mois"}
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-[300px] mt-8 bg-gray-300 animate-pulse"></div>
      <div className="w-full grid grid-cols-3 gap-4 mt-8">
        <div className="w-full h-[300px] bg-gray-300 animate-pulse"></div>
        <div className="w-full h-[300px] bg-gray-300 animate-pulse"></div>
        <div className="w-full h-[300px] bg-gray-300 animate-pulse"></div>
      </div>
      <div className="w-full flex gap-4 mt-8">
        <div className="w-3/5 max-w-3/5 h-[300px] mx-auto bg-gray-300 animate-pulse"></div>
        <div className="w-2/5 max-w-2/5 h-[300px] mx-auto bg-gray-300 animate-pulse"></div>
      </div>
      <div className="w-full h-[300px] mt-8 bg-gray-300 animate-pulse"></div>
      <div className="w-full flex gap-4 mt-8">
        <div className="w-1/5 max-w-1/5 h-[300px] mx-auto bg-gray-300 animate-pulse"></div>
        <div className="w-2/5 max-w-2/5 h-[300px] mx-auto bg-gray-300 animate-pulse"></div>
        <div className="w-2/5 max-w-2/5 h-[300px] mx-auto bg-gray-300 animate-pulse"></div>
      </div>


      {/* Modals */}
      {toggleModalKpi && (
        <ModalKpi
          isOpen={toggleModalKpi}
          onToggleModal={setToggleModalKpi}
        />
      )}
    </div>
  )
}

export default Dashboard