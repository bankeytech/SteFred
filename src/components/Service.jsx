import React from 'react'
import Pip from "../assets/images/tett1.png"
import Pip1 from "../assets/images/img6.jpeg";
import Pip2 from "../assets/images/img7.jpeg";
import Pip3 from "../assets/images/img8.jpeg";
import Pip4 from "../assets/images/img11.jpeg";
import Pip5 from "../assets/images/img1 .jpeg";



const timelineData = [
  {
    title: "Maintenance Management System",
    description:
      "A centralized digital platform to schedule, track, and manage all maintenance activities for improved reliability and control.",
    image: Pip1,
  },
  {
    title: "Energy Management",
    description:
      "Smart monitoring and optimization of energy use to reduce costs, improve efficiency, and support sustainability goals.",
    image: Pip2,
  },
  {
    title: "Electrical Service",
    description:
      "Your building’s electrical system is very important,so it’s best to trust our experts to repair and maintain it safely and reliably.",
    image: Pip3 ,
  },
  {
    title: "Plumbing Service",
    description:
      "From bathroom upgrades to emergency repairs, our experts provide complete plumbing services and handle all your needs efficiently.",
    image: Pip4,
  },
  {
    title: "Facilities Management",
    description:
      "We’re available 24/7 to handle your facility needs—HVAC, electrical, and more—all with one contact and one invoice for your convenience.",
    image: Pip5,
  },
  
  
];

const Service = () => {
  return (
    <div className='relative flex items-center justify-center'>
      <div className='bg-[#FFF4E0] w-full'>
        <div className='lg:px-20 px-6 mt-20'>
          <h2 className='font-bold text-3xl text-[#7A2E2E]'>Services</h2>
          <h4 className='text-4xl font-semibold pt-5'>Our Valuable Facility Management <br /> Services</h4>
        </div>
        <div className="m-10 lg:px-48 mt-15 hidden md:block lg:block">
          <ol className="relative space-y-8 before:absolute before:top-0 before:left-1/2 before:h-full before:w-0.5 before:-translate-x-1/2 before:rounded-full dark:before:bg-gray-700">
            {timelineData.map((item, index) => (
              <li
                key={index}
                className="group relative grid grid-cols-2 odd:-me-3 even:-ms-3"
              >
                <div className="relative flex items-start gap-4 group-odd:flex-row-reverse group-odd:text-right group-even:order-last">
                  <span className="size-3 shrink-0 rounded-full bg-[#7A2E2E]  "></span>

                  <div className="-mt-2">
                   <div className=''>
                     <img
                      src={item.image}
                      alt={item.title}
                      className="rounded-4xl w-full h-60"
                    />

                   </div>
                    <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>

                    <p className="mt-0.5 text-md text-gray-700">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div aria-hidden="true"></div>
              </li>
            ))}
          </ol>
        </div>

        {/* Mobile */}
      <div className=" m-10 block lg:hidden md:hidden">
        <ol className="relative space-y-8 before:absolute before:-ml-px before:h-full before:w-0.5 before:rounded-full before:bg-gray-700">

          {timelineData.map((item, index) => (
              <li
                key={index}
                className="relative -ms-1.5 flex items-start gap-4"
              >
                
                <span className="size-3 shrink-0 rounded-full bg-[#7A2E2E]"></span>

                <div className="-mt-2">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="rounded-2xl w-[80%]"
                  />

                  <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>

                  <p className="mt-0.5 text-sm text-gray-700">
                    {item.description}
                  </p>
                </div>
                  
               <div aria-hidden="true"></div>
              </li>
            ))}
       
        </ol>
        </div>
      </div>
   </div>
  )
}

export default Service