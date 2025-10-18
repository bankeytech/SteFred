import React, { useState } from "react";
import Logo from "../assets/images/Logo1.svg"

const navA =
  "flex items-center gap-3 text-[#2E2E2E] dark:text-[#2E2E2E] transition hover:text-orange-500 dark:hover:text-orange-400 cursor-pointer text-[1.2vw]";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

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
      <header className="fixed w-full shadow z-100  bg-white dark:bg-[#FFF4E0] ">
        {/* <svg className="block absolute bottom-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 190"><path fill="#7777" fill-opacity="1" 
          d="M0,224L60,202.7C120,181,240,139,360,144C480,149,600,203,720,208C840,213,960,171,1080,149.3C1200,128,1320,128,1380,128L1440,128L1440,0L1380,
          0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg> */}

          {/* <svg className="block absolute bottom-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 215"><path fill="#7A2E2E" fill-opacity="0.5" 
          d="M0,192L80,176C160,160,320,128,480,138.7C640,149,800,203,960,213.3C1120,224,1280,192,1360,176L1440,
          160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg> */}

        <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4 py-6 sm:px-6 lg:px-8 lg:py-12 md:py-12 sm:py-12 ">
          {/* Logo */}
          <a className="flex" href="#">          
            <img
              src={Logo}
              alt="Logo"
              className="lg:w-14 w-10"
            />
            <a className="flex items-center justify-center  p-2">
              <h4 className="font-bold text-[2.5vw] md:text-[1.5vw] lg:text-[2vw] text-[#2E2E2E]">STEFRED</h4>
              <h4 className="p-4 text-[#7A2E2E]">|</h4>
              <h4 className="font-semibold text-[#7A2E2E] text-[1.8vw] md:text-[1.0vw] lg:text-[1.2vw]">FACILITY MANAGEMENT</h4>
            </a>
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
                      <a className={navA} href={item.href}>
                        {item.label}
                      </a>
                    ) : (
                      // If item has dropdown, render as button-like span with arrow
                      <button
                        type="button"
                        aria-expanded={openDropdown === index}
                        aria-controls={`dropdown-${index}`}
                        className={navA}
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
                        className="absolute left-0 mt-2 w-44 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-md shadow-lg z-20"
                      >
                        {item.dropdown.map((sub, i) => (
                          <li key={i}>
                            <a
                              href="#"
                              className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
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
                className="rounded-4xl border border-[#2E2E2E] px-[4vw] py-2.5 text-[1.3vw] font-medium text-[#2E2E2E]"
                href="#"
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
            className="block md:hidden rounded-sm  p-2.5 text-[#2E2E2E] transition"
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
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
                          <ul id={`mobile-dropdown-${index}`} className="pl-4 border-l border-gray-200 dark:border-gray-700">
                            {item.dropdown.map((sub, i) => (
                              <li key={i}>
                                <a href="#" className="block py-1 text-sm text-gray-600 dark:text-gray-400 hover:text-orange-500">
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

         {/* <svg className="block absolute bottom-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 230"><path fill="#ffff" fill-opacity="1" 
          d="M0,224L60,202.7C120,181,240,139,360,144C480,149,600,203,720,208C840,213,960,171,1080,149.3C1200,128,1320,128,1380,128L1440,128L1440,0L1380,
          0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg> */}

          {/* <svg className="block absolute -top-15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 230"><path fill="#7777" fill-opacity="1" 
          d="M0,224L60,202.7C120,181,240,139,360,144C480,149,600,203,720,208C840,213,960,171,1080,149.3C1200,128,
          1320,128,1380,128L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,
          480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg> */}

          {/* 100 */}

          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" 
          d="M0,192L80,176C160,160,320,128,480,138.7C640,149,800,203,960,213.3C1120,224,1280,192,1360,176L1440,
          160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg> */}
    </header>
    </div>
    
  );
};

export default Nav;
