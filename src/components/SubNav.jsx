/* eslint-disable no-unused-vars */
import { motion } from "motion/react"
import Tool from "../assets/images/Soio.png"

const SubNav = () => {
  return (
    <div className='relative flex items-center justify-center'>
      <div className="bg-[#7A2E2E] w-full">
        <div className="flex flex-col items-center -my-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 230"><path fill="#FFF4E0" fill-opacity="1"
            d="M0,128L80,112C160,96,320,64,480,74.7C640,85,800,139,960,149.3C1120,160,1280,128,1360,112L1440,
            96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>    
          <motion.div className="relative flex items-center ">
            <motion.img 
              src={Tool} 
              alt="rotating Gear" 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
              className="-mt-[11vw] z-10 lg:w-[40vw] w-[70vw]"
            />
            <div className='absolute lg:-right-[20vw] md:-right-[8vw] right-[0vw] lg:bottom-[8vw] md:bottom-[10vw] bottom-[12vw] flex flex-col lg:gap-5 md:gap-3 gap-2'>
              <button className='rounded-4xl border border-[#FFF4E0] px-[4vw] py-2.5 text-[1.3vw] font-medium text-[#FFF4E0]'>
                About Us
              </button>
              <button className='rounded-4xl border border-[#F4A300] bg-[#F4A300] px-[4vw] py-2.5 text-[1.3vw] font-medium text-[#FFF4E0]'>
                Services
              </button>
            </div>
          </motion.div>
          <svg className="-mt-[14vw]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 230"><path fill="#FFF4E0" fill-opacity="1" 
            d="M0,128L80,112C160,96,320,64,480,74.7C640,85,800,139,960,149.3C1120,160,1280,128,1360,112L1440,96L1440,
            320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
        </div>
      </div>
    </div>
  )
}

export default SubNav