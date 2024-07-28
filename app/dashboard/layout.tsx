import { Navbar, Sidebar } from '@/components'
import React from 'react'

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-[100dvw] min-h-[100dvh] flex relative">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        {children}
      </div>
    </div>
  )
}

export default HomeLayout