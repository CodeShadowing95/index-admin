"use client";

import React, { useEffect, useState } from 'react'
import ModalOverlay from '../ModalOverlay'

const ModalVideo = ({ onToggleModal, isOpen }: { onToggleModal: any, isOpen: boolean }) => {
  const [toggleContent, setToggleContent] = useState(false)
  // Make toggleContent true after 2.5 seconds when isOpen is true
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setToggleContent(true)
      }, 100)
    } else {
      setToggleContent(false)
      setTimeout(() => {
        setToggleContent(false)
      }, 50)
    }
  }, [isOpen])

  return (
    <ModalOverlay>
      <div className={`w-full max-w-lg bg-white rounded-lg ease-out transition-transform duration-200 transform ${toggleContent ? 'translate-x-0' : 'translate-x-[150%]'}`}>
        <div className=" flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold text-gray-900">Ajouter une vidéo</h2>
          <div className="w-8 h-8 flex justify-center items-center rounded-full hover:bg-gray-200 cursor-pointer" onClick={() => onToggleModal(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24"><path fill="currentColor" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z" /></svg>
          </div>
        </div>
      </div>
    </ModalOverlay>
  )
}

export default ModalVideo