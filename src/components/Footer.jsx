import React from "react";
import Logo from "../assets/images/Logo1.svg";
import {
  BsFacebook,
  BsInstagram,
  BsTwitterX,
  BsLinkedin,
} from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="relative flex items-center justify-center text-[#FFF4E0]">
      <div className="bg-[#7A2E2E] w-full flex flex-col items-center justify-center -mt-3">
        {/* Wave Divider */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 230"
          className="w-full"
        >
          <path
            fill="#FFF4E0"
            fillOpacity="1"
            d="M0,128L80,112C160,96,320,64,480,74.7C640,85,800,139,960,149.3C1120,160,1280,128,1360,112L1440,
            96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>

        {/* Logo */}
        <img src={Logo} alt="Company Logo" className="lg:w-16 w-12" />

        {/* Contact & Info Section */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-10 py-8 px-6 text-center lg:text-left w-full lg:px-30">
          {/* Email */}
          <div>
            <h3 className="font-semibold text-lg mb-2">Email</h3>
            <p>Stefreddavs@gmail.com</p>
            <p>fred.bayodeji@gmail.com</p>
          </div>

          {/* Phone */}
          <div>
            <h3 className="font-semibold text-lg mb-2">Phone</h3>
            <p>08033267172</p>
            <p>07088788328</p>
          </div>

          {/* Office */}
          <div>
            <h3 className="font-semibold text-lg mb-2">Office</h3>
            <p>
              245-B TTK Road, Deevan Shib Garden, Royapettah, Chennai,
              Tamil&nbsp;Nadu
            </p>
          </div>

          {/* Socials */}
          <div>
            <h3 className="font-semibold text-lg mb-2">Socials</h3>
            <div className="flex justify-center lg:justify-start gap-4 text-xl pt-2">
              <a href="#" aria-label="Facebook">
                <BsFacebook />
              </a>
              <a href="#" aria-label="Instagram">
                <BsInstagram />
              </a>
              <a href="#" aria-label="Twitter / X">
                <BsTwitterX />
              </a>
              <a href="#" aria-label="LinkedIn">
                <BsLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full px-10">
          <hr className="border-[#FFF4E0]/40" />
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 py-5 text-sm text-center">
          <p>© 2025 Stefred Davs Venture LTD. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
