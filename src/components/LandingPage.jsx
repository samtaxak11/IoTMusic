import { motion } from 'framer-motion'
import React from 'react'

export const LandingPage = () => {
  return (
    <div className='w-full h-[83vh] bg-zinc-900 pt-2'>
        <div className='textstructure mt-[10vw] px-20'>
            {["Play.", "Listen.", "Enjoy."].map((item, index) => {
                return <div className='masker'>
                <div className='w-fit flex items-center overflow-hidden'>
                {index === 1 &&  (<motion.div initial={{width: 0}} animate={{width: "9vw"}} transition={{ease: [0.76, 0, 0.24, 1]}} duration={1} className='mr-[1vw] w-[9vw] h-[5.2vw] relative top-[.5vw] rounded-md'>
                  <img className='rounded-md relative' src='./music.webp' alt='music' />
                </motion.div>)}
                <h1 className='uppercase text-[7.5vw] leading-[7vw] tracking-tighter font-medium'>
                    {item}
                </h1>
                </div>
            </div>
            })}
        </div>
        {/* <div className='border-t-[1px] border-zinc-800 mt-[4vw]'>

        </div> */}
    </div>
  )
}
