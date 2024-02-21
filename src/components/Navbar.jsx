import { motion } from 'framer-motion'
import React from 'react'
import {Link } from 'react-router-dom'


export const Navbar = () => {
  return (
    <div className="fixed z-[999] w-full px-20 py-8 flex justify-between items-center">
        <div className='logo'>
        <Link to='/'>
        <img className='w-15 h-9' src='./Logo.png' alt='Logo' />
        </Link>
        </div>
        <div className='links flex gap-10'>
            {["Play", "Playlist", "Upload", "Contact"].map((item, index) => (
              <Link to='/play'>
                <motion.a key={index} className={`text-lg capitalize font-regular ${index === 3 && "ml-36"}`}>{item}</motion.a>
              </Link>
            ))}
        </div>
    </div>
  )
}
