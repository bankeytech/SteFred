import React from 'react';
import { FaHospital, FaHandshake, FaThumbsUp, FaPeopleCarry, FaWrench } from "react-icons/fa";

const Value = () => {
  const coreValues = [
    { Icon: FaHospital, label: 'Safety' },
    { Icon: FaHandshake, label: 'Customer Satisfaction' },
    { Icon: FaThumbsUp, label: 'Integrity' },
    { Icon: FaPeopleCarry, label: 'Teamwork' },
    { Icon: FaWrench, label: 'Professionalism' }
  ];

  return (
    <div className='bg-[#FFF4E0] lg:h-[30vw] md:h-[40vw] h-[35vw]'>
      <div className='relative text-center py-9 text-[#7A2E2E]'>
        <h3 className='py-9 font-bold text-[3vw]'>Our Core Value</h3>
        <div className='flex items-center justify-center gap-12'>
          {coreValues.map(({ Icon, label }) => (
            <div key={label} className='flex flex-col items-center justify-center gap-2'>
              <span className='border-2 border-[#F4A300] p-7 rounded-[7vw]'>
                <Icon size={60} />
              </span>
              <h4 className='text-[2vw] font-semibold'>{label}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Value;