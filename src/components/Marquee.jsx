import React from 'react'
import {motion} from 'framer-motion'

export const Marquee = () => {
  return (
    <div className='w-full py-10 bg-[#0f7385] rounded-t-[3vw]'>
        <div className='text flex whitespace-nowrap overflow-hidden'>
            <motion.h1 initial={{x:0}} animate={{x: "-96%"}} transition={{ease: "linear", repeat: Infinity, duration: 3}} className='mr-4 text-[6vw] leading-none font-semibold uppercase'>Musicccc</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 3}} className='mr-4 text-[6vw] leading-none font-semibold uppercase'>Musicccc</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 3}} className='mr-4 text-[6vw] leading-none font-semibold uppercase'>Musicccc</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 3}} className='mr-4 text-[6vw] leading-none font-semibold uppercase'>Musicccc</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 3}} className='mr-4 text-[6vw] leading-none font-semibold uppercase'>Musicccc</motion.h1>
        </div>
    </div>
  )
}
