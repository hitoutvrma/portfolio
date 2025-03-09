import React from 'react'
import {animate, hover, motion} from 'framer-motion'
import AnimatedParagraph from './AnimatedParagraph'
function Front() {
  return (
    <div className='sm:h-screen md:h-screen'>
    <div className="sm:flex">
      <div className='hero sm:p-5 sm:text-[3vw] text-[8vw]  sm:w-[53vw]'>
      <logo className='text-4xl sm:text-5xl font-semibold font-[serif]'>hitoutvrma</logo>
        <p className='mt-28 leading-none text-[#8c8c8c]'><span className='text-white font-semibold'>Hitesh Verma</span> is an award-winning multidisciplinary digital web developer based in India</p>

        <div className='text-xl pt-4'>
          <p className='text-[#8c8c8c]'>creative Director and founder at </p>
          <p className='font-semibold'>bitCheat</p>
          {/* <AnimatedParagraph/> */}
        </div>
        <div className='flex sm:text-[2vh] sm:pb-0 pb-12 text-[1.8vh]  sm:pt-25 pt-28 flex-col sm:gap-3 gap-1'>
          <p className='text-[#8c8c8c] pb-4 text-[1.6vh]  sm:text-[2vh]'>CONNECT</p>
          <motion.div animate={{scale:2}} transition={}
        className="relative w-[90%]  font-bold text-white text-md cursor-pointer"
        initial="initial"
        whileHover="hover"
      >
        <p className='pb-2'>Twitter/X</p>

        {/* Static Gray Line */}
        <div className="absolute left-0 bottom-0 w-full    h-[0.1vh] bg-[#4c4c4c]"></div>

        {/* Animated Green Line */}
        <motion.div
          className="absolute left-0 bottom-0 h-[2px] bg-green-400"
          variants={{
            initial: { width: "0%" },
            hover: { width: "100%" },
            exit: {width: "0%"}
          }}
          transition={{hover: { duration: 2, ease: "easeInOut" }, 
          exit: { duration: 0.01 } }}
        />
      </motion.div>

      <motion.div 
        className="relative w-[90%]  font-bold text-white text-md cursor-pointer"
        initial="initial"
        whileHover="hover"
      >
        <p className='pb-2'>Linkedin</p>

        {/* Static Gray Line */}
        <div className="absolute left-0 bottom-0 w-full    h-[0.1vh] bg-[#8c8c8c]"></div>

        {/* Animated Green Line */}
        <motion.div
          className="absolute left-0 bottom-0 h-[2px] bg-green-400"
          variants={{
            initial: { width: "0%" },
            hover: { width: "100%" },
            exit: {width: "0%"}
          }}
          transition={{hover: { duration: 2, ease: "easeInOut" }, 
          exit: { duration: 0.01 } }}
        />
      </motion.div>

      <motion.div 
        className="relative w-[90%]  font-bold text-white text-md cursor-pointer"
        initial="initial"
        whileHover="hover"
      >
        <p className='pb-2'>Email</p>

        {/* Static Gray Line */}
        <div className="absolute left-0 bottom-0 w-full    h-[0.1vh] bg-[#8c8c8c]"></div>

        {/* Animated Green Line */}
        <motion.div
          className="absolute left-0 bottom-0 h-[2px] bg-green-400"
          variants={{
            initial: { width: "0%" },
            hover: { width: "100%" },
            exit: {width: "0%"}
          }}
          transition={{hover: { duration: 2, ease: "easeInOut" }, 
          exit: { duration: 0.01 } }}
        />
      </motion.div>
      
      <motion.div 
        className="relative w-[90%]  font-bold text-white text-md cursor-pointer"
        initial="initial"
        whileHover="hover"
      >
        <p className='pb-2'>Instagram</p>

        {/* Static Gray Line */}
        <div className="absolute left-0 bottom-0 w-full    h-[0.1vh] bg-[#8c8c8c]"></div>

        {/* Animated Green Line */}
        <motion.div
          className="absolute left-0 bottom-0 h-[2px] bg-green-400"
          variants={{
            initial: { width: "0%" },
            hover: { width: "100%" },
            exit: {width: "0%"}
          }}
          transition={{hover: { duration: 2, ease: "easeInOut" }, 
          exit: { duration: 0.01 } }}
        />
      </motion.div>
        </div>
        </div>
        <motion.div initial={{scale:0.6}} transition={{duration:1.5, delay:1}} animate={{scale:1}} style={{ backgroundImage: "url('/user.jpg')" }} className='bg-cover sm:bg-[center_top_60%] bg-[center_top_80%] w-[95%] h-[50vh] sm:w-[43vw] sm:h-[92vh]  bg-[#3a3a3a] rounded-md'>          
        </motion.div>
      </div>
        </div>
  )
}

export default Front
