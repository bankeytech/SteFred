import React from 'react'

const Hero = () => {
  return (
    <div className='bg-[#FFF4E0] lg:h-[30vw] md:h-[40vw] h-[55vw] '>
      <div className='relative '>
      <div className='absolute top-[7vw] right-0 px-8 py-6 mx-auto max-w-screen-xl w-full sm:px-6 lg:px-18 '>
       <div className='mt-10'>
        <div className='flex items-center justify-start gap-27'>
          <h1 className='font-bold text-[5vw]'>Integrated Facility</h1>
          <h5 className='font-medium hidden lg:block md:block'> Ensuring Seamless Operations, <br /> Safety, and Efficiency for all your Assets</h5>
        </div>

        <div className='flex  flex-col items-end lg:justify-end sm:justify-start'>

          <h1 className='font-bold text-[5vw]'>
            Management Excellence
          </h1>
          <h5 className='font-medium block lg:hidden md:hidden w-full py-2 text-[2.3vw]'> Ensuring Seamless Operations, <br /> Safety, and Efficiency for all your Assets</h5>
        </div>

       </div>


      </div>
    </div>
    </div>
  )
}

export default Hero