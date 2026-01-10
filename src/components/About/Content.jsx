import React from 'react'
import Bground from "/src/assets/images/Welimg.png";

const Content = () => {
  return (
   <div className='bg-[#FFF4E0] lg:h-[65vw] md:h-[40vw] h-[55vw] '>
     <div className='relative'>
        <div className='absolute top-[7vw] right-0 px-8 py-6 mx-auto max-w-screen-xl w-full sm:px-6 lg:px-18 '>
          <div>
            <h2 className='text-[3vw] text-center font-bold text-[#7A2E2E]'>About Us</h2>
          </div>
          <div className='grid lg:grid-cols-2 gap-12 mt-[3vw]'>
            <div>
                <h3 className='text-[#2E2E2E] font-semibold text-[2vw]'>Who We Are</h3>
                <p className='text-[#444] text-sm sm:text-base lg:text-lg leading-relaxed p-3'> 
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, iusto. Nihil 
                    dolore ab, porro tempore placeat reiciendis nobis vero eligendi dolor dignissimos 
                    ipsum minus quisquam autem earum enim facere neque.
                </p>

                <p className='text-[#444] text-sm sm:text-base lg:text-lg leading-relaxed p-3'> 
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, iusto. Nihil 
                  dolore ab, porro tempore placeat reiciendis nobis vero eligendi dolor dignissimos 
                  ipsum minus quisquam autem earum enim facere neque. Lorem ipsum dolor sit amet, 
                  consectetur adipisicing elit. Animi praesentium, quasi possimus voluptas excepturi 
                  eveniet eligendi esse aliquam rem repellat qui fugiat veritatis mollitia optio 
                  necessitatibus labore. Beatae, minus sint.
                </p>
            </div>
            <div className="w-full flex justify-center">
                <img
                src={Bground}
                alt="Welcome"
                className="w-full max-w-md sm:max-w-lg lg:max-w-full rounded-2xl object-contain"
                />
            </div>
           
          </div>
        </div>
     </div>
    </div>
  )
}

export default Content