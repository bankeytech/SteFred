import "../index.css";
import { FaUsersCog, FaCogs } from "react-icons/fa";
import { TbTargetArrow } from "react-icons/tb";
import { BsLightbulbFill } from "react-icons/bs";

const Choose = () => {
  const cards = [
    {
      icon: <FaUsersCog />,
      title: "Skilled Professionals",
      text: "Our certified professionals deliver high-quality, reliable solutions tailored to your facility’s needs, ensuring smooth operations with years of expertise.",
      bg: "bg-[#7A2E2E]",
      textColor: "text-[#FFF4E0]",
      iconBg: "bg-[#FFF4E0]/20",
    },
    {
      icon: <FaCogs />,
      title: "End-To-End Services",
      text: "Stefred Davs offers full facility management, from maintenance to specialized solutions, ensuring excellence at every step.",
      bg: "bg-[#7A2E2E]/40",
      textColor: "text-[#2E2E2E]",
      iconBg: "bg-[#7A2E2E]/30",
    },
    {
      icon: <TbTargetArrow />,
      title: "Client Centric Philosophy",
      text: "We build lasting client relationships through personalized services, clear communication, and proactive solutions for smooth, efficient facility operations.",
      bg: "bg-[#7A2E2E]/40",
      textColor: "text-[#2E2E2E]",
      iconBg: "bg-[#7A2E2E]/30",
    },
    {
      icon: <BsLightbulbFill />,
      title: "Tailored Solutions",
      text: "We provide tailored solutions to meet your unique needs, optimizing performance, efficiency, and cost-effectiveness for your facility.",
      bg: "bg-[#7A2E2E]",
      textColor: "text-[#FFF4E0]",
      iconBg: "bg-[#FFF4E0]/20",
    },
  ];

  return (
    <div className="relative flex items-center justify-center">
      <div className="bg-[#FFF4E0] w-full pb-30">
        {/* Header Section */}
        <div className="lg:px-20 px-6 mt-20">
          <h2 className="font-bold text-3xl text-[#7A2E2E]">HOW IT WORKS</h2>
          <h4 className="text-4xl font-semibold pt-5">
            Why Choose Our Facility Management <br /> Solutions
          </h4>
        </div>

        {/* Content Section */}
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 lg:px-20 gap-6 pt-6 px-6">
          {/* Left Card */}
          <div className="Bcard w-full flex flex-col justify-end rounded-xl p-6 text-[#FFF4E0] lg:h-[99vh] md:h-[99vh] h-[50vh] bg-[#7A2E2E]">
            <h4 className="font-bold text-3xl pb-3">Why Choose Us</h4>
            <p>
              Our commitment to excellence, innovation, and client satisfaction
              sets us apart in the facility management industry, providing
              solutions tailored to your needs for seamless and efficient
              operations.
            </p>
          </div>

          {/* Right Grid */}
          <div className="flex flex-col gap-4">
            <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-4">
              {cards.slice(0, 2).map((card, index) => (
                <div
                  key={index}
                  className={`p-5 rounded-xl ${card.bg} ${card.textColor}`}
                >
                  <div
                    className={`lg:text-[2.5vw] md:text-[3vw] text-[4.5vw] p-3 ${card.iconBg} lg:w-[4.2vw] md:w-[5.8vw] w-[9.8vw] flex items-center justify-center rounded-xl`}
                  >
                    {card.icon}
                  </div>
                  <h3 className="font-semibold pt-5 pb-2 lg:text-[1.5vw] md:text-[2vw] text-[3.5vw]">
                    {card.title}
                  </h3>
                  <p className="lg:text-[1.2vw] md:text-[1.7vw] text-[2.9vw]">
                    {card.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-4">
              {cards.slice(2).map((card, index) => (
                <div
                  key={index + 2}
                  className={`p-5 rounded-xl ${card.bg} ${card.textColor}`}
                >
                  <div
                    className={`lg:text-[2.5vw] md:text-[3vw] text-[4.5vw] p-3 ${card.iconBg} lg:w-[4.2vw] md:w-[5.8vw] w-[9.8vw] flex items-center justify-center rounded-xl`}
                  >
                    {card.icon}
                  </div>
                  <h3 className="font-semibold pt-5 pb-2 lg:text-[1.5vw] md:text-[2vw] text-[3.5vw]">
                    {card.title}
                  </h3>
                  <p className="lg:text-[1.2vw] md:text-[1.7vw] text-[2.9vw]">
                    {card.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
