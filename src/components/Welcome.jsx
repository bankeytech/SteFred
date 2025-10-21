import React from 'react'
import { FiEdit } from "react-icons/fi";
import Bground from "../assets/images/Welimg.png"
import "../index.css"

const services = [
  {
    title: "Soft Services",
    description:
      "Cleaning, landscaping, pest control, and waste management to keep spaces safe, clean, and welcoming.",
  },
  {
    title: "Hard Services",
    description:
      "Maintenance of HVAC, electrical, plumbing, and fire safety systems for seamless building operations.",
  },
  {
    title: "Specialized Services",
    description:
      "Advanced solutions like energy management, IoT monitoring, and smart security tailored to your facility needs.",
  },
];

const Welcome = () => {
  return (
    <div className='relative flex items-center justify-center'>
      <div className='bg-[#FFF4E0] w-full'>
        <div className='grid lg:grid-cols-2 sm:grid-cols-1 p-8 px-18 gap-10 place-items-center'>
          <div className='flex flex-col items-start'>
            <h2 className='font-bold text-[4.5vw] leading-[5vw] pb-3'>
              Welcome To Stefred Davs Ventures LTD.
            </h2>
            <h6 className=''>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
              Iste eaque br hic <br /> delectus, id est molestiae corrupti nostrum 
              aliquam vel accusantium. <br /> A tenetur inventore culpa ut, 
              deserunt mollitia molestias corporis quas!
            </h6> 
            
           <div className="flex flex-col gap-4 pt-3 pr-[7.25rem]">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-[#F4A300]/50 p-4 rounded-2xl text-[#2E2E2E]"
                >
                  <h3 className="font-bold text-[1.5vw]">{service.title}</h3>
                  <h5>{service.description}</h5>
                </div>
              ))}
            </div>
          </div>

          <div className='contain'>
            <img src={Bground} alt="img" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome