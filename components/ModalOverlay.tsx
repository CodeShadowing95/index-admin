import React from 'react'

const ModalOverlay = ({ children }: { children: React.ReactNode }) => {
  return (
    // Overlay
    <div className="fixed inset-0 flex justify-end bg-neutral-900/40 z-50 overflow-hidden transition-all duration-300 ease-in-out p-3">
      {children}
    </div>
  )
}

export default ModalOverlay