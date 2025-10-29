import React, { useState, useEffect } from "react";
import Logo from "../assets/images/Logo1.svg"

const navA =
  "flex items-center gap-3 text-[#2E2E2E] dark:text-[#2E2E2E] transition duration-200 hover:text-orange-500 dark:hover:text-orange-400 cursor-pointer text-[1.2vw]";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [revealHeight, setRevealHeight] = useState(700); // default for desktop

  // ✅ Detect screen size and set revealHeight accordingly
  useEffect(() => {
    const updateRevealHeight = () => {
      if (window.innerWidth < 768) {
        setRevealHeight(700); // mobile
      } else {
        setRevealHeight(828); // desktop
      }
    };
    updateRevealHeight(); // run once on load
    window.addEventListener("resize", updateRevealHeight);
    return () => window.removeEventListener("resize", updateRevealHeight);
  }, []);

   // Track scroll to control SVG reveal
    useEffect(() => {
    const handleScroll = () => {
      const scrolled = Math.min(window.scrollY / revealHeight, 1);
      setScrollProgress(scrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [revealHeight]);

     // helper to blend between two colors (from and to)
      const blendColor = (from, to, progress) => {
      const f = parseInt(from.slice(1), 16);
      const t = parseInt(to.slice(1), 16);

      const rf = (f >> 16) & 0xff,
        gf = (f >> 8) & 0xff,
        bf = f & 0xff;
      const rt = (t >> 16) & 0xff,
        gt = (t >> 8) & 0xff,
        bt = t & 0xff;

      const r = Math.round(rf + (rt - rf) * progress);
      const g = Math.round(gf + (gt - gf) * progress);
      const b = Math.round(bf + (bt - bf) * progress);

      return `rgb(${r}, ${g}, ${b})`;
    };

    const dynamicColor = blendColor("#7A2E2E", "#FFF4E0", scrollProgress);
    const dynamicColor2 = blendColor("#F4A300", "#F4A300", scrollProgress);

      // background fade (white with variable transparency)
    // const bgOpacity = scrollProgress; // 0 → 1
    // const backgroundColor = `rgba(255, 244, 224, ${bgOpacity})`; // #FFF4E0 with fade

  // Only Services has sub-items; other items have empty arrays (no dropdown)
  const navItems = [
    { label: "Home", href: "#" , dropdown: [] },
    { label: "About", href: "#" , dropdown: [] },
    { label: "Services", href: "#services", dropdown: ["Consulting", "Design", "Development"] },
    { label: "Projects", href: "#" , dropdown: [] },
    { label: "Contact", href: "#" , dropdown: [] },
  ];

  return (
    <div className="relative ">
      <header 
      className="fixed w-full z-100 transition-all lg:bg-transparent md:bg-transparent bg-[#7A2E2E]"
    
      >
           {/* Animated SVG background */}
        <svg
          className="lg:block absolute top-0 left-0 w-full -z-10 transition-all duration-300 md:block hidden"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 215"
          style={{
            opacity: scrollProgress, // gradually visible
            transform: `translateY(${(1 - scrollProgress) * -100}px)`, // optional smooth rise
            transition: "opacity 0.3s ease, transform 0.3s ease",
          }}
        >
          <path
            fill="#7A2E2E"
            fillOpacity="1"
            d="M0,128L80,112C160,96,320,64,480,74.7C640,85,800,139,960,149.3C1120,160,1280,128,1360,112L1440,
            96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>


        <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4 py-6 sm:px-6 lg:px-8 lg:py-12 md:py-5 sm:py-12 lg:shadow-none md:shadow-none shadow ">
          {/* Logo */}
          <a className="flex items-center" href="#">
            <img src={Logo} alt="Logo" className="lg:w-14 w-10" />
            <div className="flex items-center justify-center p-2">
              <h4
                className="font-bold text-[2.5vw] md:text-[1.5vw] lg:text-[2vw] lg:block md:block hidden"
                style={{ color: dynamicColor }}
              >
                STEFRED
              </h4>
              <h4
                className="font-bold text-[#FFF4E0] text-[2.5vw] md:text-[1.5vw] lg:text-[2vw] block lg:hidden md:hidden "         
              >
                STEFRED
              </h4>
              <h4 className="p-4 lg:block md:block hidden" style={{ color: dynamicColor }}>
                |
              </h4>
              <h4 className="p-4  block lg:hidden md:hidden text-[#FFF4E0]" >
                |
              </h4>
              <h4
                className="font-semibold text-[1.8vw] md:text-[1.0vw] lg:text-[1.2vw]"
                style={{ color: dynamicColor2 }}
              >
                FACILITY MANAGEMENT
              </h4>
            </div>
          </a>

          <div>
            <div className="flex gap-12">
            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-10 text-sm">
              {navItems.map((item, index) => {
                const hasDropdown = item.dropdown && item.dropdown.length > 0;

                return (
                  <div
                    key={index}
                    className="relative group"
                    // only attach hover handlers if there is a dropdown
                    onMouseEnter={() => hasDropdown && setOpenDropdown(index)}
                    onMouseLeave={() => hasDropdown && setOpenDropdown(null)}
                  >
                    {/* If item has no dropdown, render as normal link */}
                    {!hasDropdown ? (
                    <a href={item.href} className={navA} style={{ color: dynamicColor }}>
                      {item.label}
                    </a>
                    ) : (
                      // If item has dropdown, render as button-like span with arrow
                      <button
                        type="button"
                        aria-expanded={openDropdown === index}
                        aria-controls={`dropdown-${index}`}
                        className={navA}
                        style={{ color: dynamicColor }}
                        onClick={() =>
                          // allow click to toggle on desktop as well (optional)
                          setOpenDropdown(openDropdown === index ? null : index)
                        }
                      >
                        <span className="flex items-center gap-1">
                          {item.label}
                          {/* Down Arrow (only for items with dropdown) */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`w-3 h-3 mt-[1px] transition-transform duration-200 ${
                              openDropdown === index ? "rotate-180" : ""
                            }`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            aria-hidden="true"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </span>
                      </button>
                    )}

                    {/* Dropdown (desktop) */}
                    {hasDropdown && openDropdown === index && (
                      <ul
                        id={`dropdown-${index}`}
                        className="absolute left-0 mt-2 w-44 bg-[#7A2E2E] rounded-md shadow-lg z-20"
                      >
                        {item.dropdown.map((sub, i) => (
                          <li key={i}>
                            <a
                              href="#"
                              className="block px-4 py-2 text-sm text-[#FFF4E0] hover:bg-gray-50 dark:hover:bg-gray-700"
                            >
                              {sub}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Login Button (desktop) */}
            <div className="hidden md:flex items-center gap-4">
              <a
                className="rounded-4xl border border-[#2E2E2E] px-[4vw] py-2.5 text-[1.3vw] font-medium text-[#2E2E2E] transition duration-300"
                href="#"
                style={{
                borderColor: dynamicColor,
                color: dynamicColor,
                }}
              >
                Contact Us
              </a>
            </div>
          </div>
          </div>

        

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => {
              setMenuOpen(!menuOpen);
              // close any open dropdown when toggling mobile menu
              if (menuOpen) setOpenDropdown(null);
            }}
            className="block md:hidden rounded-sm  p-2.5 text-[#FFF4E0] transition"
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
            // style={{ color: dynamicColor }}
          >
            <span className="sr-only">Toggle menu</span>
            {menuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

         
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="md:hidden bg-[#7A2E2E] ">
            <ul className="flex flex-col gap-2 p-4">
              {navItems.map((item, index) => {
                const hasDropdown = item.dropdown && item.dropdown.length > 0;

                return (
                  <li key={index} className="relative">
                    {/* If no dropdown, render a plain link */}
                    {!hasDropdown ? (
                      <a href={item.href} className="block w-full py-2 text-gray-700 dark:text-gray-300">
                        {item.label}
                      </a>
                    ) : (
                      // If dropdown exists, render toggle button + arrow
                      <>
                        <button
                          className="flex justify-between items-center w-full text-left text-gray-700 dark:text-gray-300 py-2"
                          onClick={() => setOpenDropdown(openDropdown === index ? null : index)}
                          aria-expanded={openDropdown === index}
                          aria-controls={`mobile-dropdown-${index}`}
                        >
                          <span className="flex items-center gap-1">
                            {item.label}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className={`h-4 w-4 transform transition-transform ${openDropdown === index ? "rotate-180" : ""}`}
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth="2"
                              aria-hidden="true"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                          </span>
                        </button>

                        {/* Mobile dropdown items */}
                        {openDropdown === index && (
                          <ul id={`mobile-dropdown-${index}`} className="pl-4 bg-[#7A2E2E]">
                            {item.dropdown.map((sub, i) => (
                              <li key={i}>
                                <a href="#" className="block py-1 text-sm text-[#FFF4E0] hover:text-orange-500">
                                  {sub}
                                </a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </>
                    )}
                  </li>
                );
              })}

              {/* Mobile Login */}
              <li>
                <a
                  className="block rounded-md bg-[#FFF4E0] px-5 py-2.5 text-sm font-medium text-[#2E2E2E] transition text-center mt-2"
                  href="#"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        )}

    </header>
    </div>
    
  );
};

export default Nav;
