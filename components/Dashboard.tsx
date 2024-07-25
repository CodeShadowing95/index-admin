import Image from 'next/image'
import React from 'react'

const Dashboard = () => {
  return (
    <div className="w-full p-8">
        <div className="flex justify-between items-center">
            <div>
                <h1 className="text-2xl font-semibold text-gray-900">Welcome Back, Olivier 👋</h1>
                <p className="text-gray-500">Consultez la vue générale de vos activités et gérez votre espace.</p>
            </div>
            <div className="flex gap-2">
                <button data-dropdown-toggle="dropdown" className="text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center" type="button">
                    Tout
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-2" viewBox="0 0 24 24"><path fill="currentColor" d="m7 10l5 5l5-5z"/></svg>
                </button>
                <button data-dropdown-toggle="dropdown" className="text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center" type="button">
                    Exporter
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-2" viewBox="0 0 24 24"><path fill="currentColor" d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6m-1 1.5L18.5 9H13m-4.07 3.22H16v7.07l-2.12-2.12L11.05 20l-2.83-2.83l2.83-2.82"/></svg>
                </button>
            </div>
        </div>
        <div className="h-[1px] bg-gray-200 my-6"></div>
        <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Card "Nombre de visiteurs" */}
            <div className="h-fit p-1 rounded-lg shadow relative overflow-hidden">
                {/* Overlay & content */}
                <div className="absolute inset-0 bg-gray-600 overflow-hidden -z-10">
                    <div className="absolute -top-10 -right-10 w-52 h-52">
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-full h-full opacity-10' viewBox="0 0 24 24"><path fill="currentColor" d="M16.5 15.5c1.72 0 3.75.8 4 1.28v.72h-8v-.72c.25-.48 2.28-1.28 4-1.28m0-1.5c-1.83 0-5.5.92-5.5 2.75V19h11v-2.25c0-1.83-3.67-2.75-5.5-2.75M9 13c-2.33 0-7 1.17-7 3.5V19h7v-1.5H3.5v-1c0-.63 2.79-2.16 6.32-2a5.1 5.1 0 0 1 1.55-1.25A12.3 12.3 0 0 0 9 13m0-6.5A1.5 1.5 0 1 1 7.5 8A1.5 1.5 0 0 1 9 6.5M9 5a3 3 0 1 0 3 3a3 3 0 0 0-3-3m7.5 3.5a1 1 0 1 1-1 1a1 1 0 0 1 1-1m0-1.5A2.5 2.5 0 1 0 19 9.5A2.5 2.5 0 0 0 16.5 7"/></svg>
                    </div>
                </div>
                <div className="w-full z-10 p-4">
                    <div className="w-full flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            {/* Image */}
                            <div className="flex justify-center items-center p-2 bg-white/30 rounded-lg overflow-hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6 text-white' viewBox="0 0 24 24"><path fill="currentColor" d="M16.5 12A2.5 2.5 0 0 0 19 9.5A2.5 2.5 0 0 0 16.5 7A2.5 2.5 0 0 0 14 9.5a2.5 2.5 0 0 0 2.5 2.5M9 11a3 3 0 0 0 3-3a3 3 0 0 0-3-3a3 3 0 0 0-3 3a3 3 0 0 0 3 3m7.5 3c-1.83 0-5.5.92-5.5 2.75V19h11v-2.25c0-1.83-3.67-2.75-5.5-2.75M9 13c-2.33 0-7 1.17-7 3.5V19h7v-2.25c0-.85.33-2.34 2.37-3.47C10.5 13.1 9.66 13 9 13"/></svg>
                            </div>
                            {/* Texte */}
                            <p className="text-[15px] leading-5 font-medium text-white">Les visites en général</p>
                        </div>
                        <div className="flex justify-center items-center p-2 hover:bg-white/10 rounded-full cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6 text-white' viewBox="0 0 24 24"><path fill="currentColor" d="M16 12a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2m-6 0a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2m-6 0a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2"/></svg>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <p className="text-5xl font-semibold text-white mt-6">300</p>
                        <div className="px-4 py-1 bg-white/10 rounded-full text-white font-medium text-sm text-center">+10%</div>
                    </div>
                    <p className="text-[13px] leading-5 text-white mt-4">Données obtenues depuis les 10 derniers jours de 200 visites à 300 visites.</p>
                </div>
            </div>

            <div className="bg-orange-50 rounded-lg p-1">
                <div className="w-full z-10 p-4">
                    <div className="w-full flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            {/* Image */}
                            <div className="flex justify-center items-center p-2 bg-white shadow rounded-lg overflow-hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6 text-slate-800' viewBox="0 0 24 24"><path fill="currentColor" d="M13 9h-2V7h2m0 10h-2v-6h2m-1-9A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"/></svg>
                            </div>
                            {/* Texte */}
                            <p className="text-[15px] leading-5 font-medium text-slate-800">Autre option</p>
                        </div>
                        <div className="flex justify-center items-center p-2 hover:bg-slate-100 rounded-full cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6 text-slate-800' viewBox="0 0 24 24"><path fill="currentColor" d="M16 12a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2m-6 0a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2m-6 0a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2"/></svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shadow bg-orange-50 rounded-lg"></div>
            <div className="shadow bg-orange-50 rounded-lg"></div>
        </div>
        <div className="w-full h-[300px] mt-8 bg-gray-100"></div>
    </div>
  )
}

export default Dashboard