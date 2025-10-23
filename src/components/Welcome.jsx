import Bground from "../assets/images/Welimg.png";

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
    <section className="relative flex items-center justify-center bg-[#FFF4E0] w-full py-16 px-6 sm:px-10 lg:px-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
        {/* LEFT TEXT SECTION */}
        <div className="flex flex-col items-start space-y-6">
          <h2 className="font-bold text-[#2E2E2E] text-3xl sm:text-4xl lg:text-5xl leading-tight">
            Welcome To <br className="hidden sm:block" /> Stefred Davs Ventures LTD.
          </h2>

          <p className="text-[#444] text-sm sm:text-base lg:text-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eaque
            reprehenderit hic delectus, id est molestiae corrupti nostrum aliquam
            vel accusantium. A tenetur inventore culpa ut, deserunt mollitia
            molestias corporis quas!
          </p>

          <div className="flex flex-col gap-4 w-full">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-[#F4A300]/40 hover:bg-[#F4A300]/60 transition p-4 rounded-xl shadow-sm text-[#2E2E2E]"
              >
                <h3 className="font-semibold text-lg sm:text-xl mb-1">{service.title}</h3>
                <p className="text-sm sm:text-base">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="w-full flex justify-center">
          <img
            src={Bground}
            alt="Welcome"
            className="w-full max-w-md sm:max-w-lg lg:max-w-full rounded-2xl object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Welcome;