import React from 'react'

const ModalOverlay = ({ children }: { children: React.ReactNode }) => {
  return (
    // Overlay
    <div className="fixed inset-0 flex justify-end bg-gray-900/70 bg-opacity-75 z-50 overflow-hidden transition-opacity ease-in-out p-3">
        {children}
    </div>
  )
}

export default ModalOverlay