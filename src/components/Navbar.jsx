import React from 'react'

export const Navbar = () => {
  return (
    <div className="fixed z-[999] w-full px-20 py-8 flex justify-between items-center">
        <div className='logo'>
        <img className='w-15 h-9' src='./Logo.png' alt='Logo' />
        </div>
        <div className='links flex gap-10'>
            {["Play", "Playlist", "Upload", "Contact"].map((item, index) => (
                <a key={index} className={`text-lg capitalize font-regular ${index === 3 && "ml-36"}`}>{item}</a>
            ))}
        </div>
    </div>
  )
}
