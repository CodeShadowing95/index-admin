import React from 'react'
import { Navbar, Sidebar } from '@/components'

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full min-h-[100dvh] flex relative">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        {children}
      </div>
    </div>
  )
}

export default HomeLayout