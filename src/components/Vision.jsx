import React from 'react'
import { FaEye, FaRocket } from "react-icons/fa";          // simple and clear

const Vision = () => {
  return (
    <div className='relative flex items-center justify-center'>
      <div className='bg-[#FFF4E0] w-full'>
        <div className="p-6 lg:px-20">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
            <div className="p-8 rounded-2xl drop-shadow-xl drop-shadow-[#7A2E2E] bg-[#FFF4E0]">
              <h2 className='lg:text-[2.7vw] text-[4vw] font-semibold py-3 text-[#7A2E2E] flex items-center justify-between'>
                Vision 
                <FaEye />
                </h2>
              <h6 className='text-[#2E2E2E] lg:text-[1.6vw] text-[3vw]'>To become the ultimate provider of sustainable and technology-driven total facilities management services throughout Nigeria and West Africa.</h6>
            </div>
            <div className="p-8 rounded-2xl drop-shadow-xl drop-shadow-[#7A2E2E] bg-[#FFF4E0]">
              <h2 className='lg:text-[2.7vw] text-[4vw] font-semibold py-3 text-[#7A2E2E] flex items-center justify-between'>
                Mission
                <FaRocket />
                </h2>
              <h6 className='text-[#2E2E2E] lg:text-[1.6vw] text-[3vw]'>To deliver excellence in total facilities management 
                services focusing on sustainable best practice while being led by innovative technology,
                which satisfies the needs and exceeds the expectations of our customers, business partners.
              </h6>
            </div>
          </div> 
       </div>
     </div> 
   </div>
  )
}

export default Vision