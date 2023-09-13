import React from "react";
import { Link, NavLink } from "react-router-dom";
import { scrollToTop } from "./Header";
// Footer Component
const Footer = () => {
  return (
    <div className="bg-blackPrim py-2">
      <div className="flex mx-2 rounded-md  flex-col items-center justify-between gap-8 py-12 pb-16 bg-grayPrim text-white px-4 md:px-12">
        <div className="w-full flex items-center justify-center">
          Made with 💖 by Hacktivators+
        </div>
        <div className="w-full flex items-center justify-around px-0 sm:px-5 md:px-20">
          <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-12">
            <div className="w-full text-center sm:w-1/3">
              <p className="cursor-pointer">Ministry of Justice</p>
              <p className="cursor-pointer">MHRD</p>
            </div>
            <div className="w-full text-center sm:w-1/3">
              <p className="cursor-pointer">Contact Local Court</p>
              <p className="cursor-pointer">Government of India</p>
            </div>
            <div className="w-full text-center sm:w-1/3">
              <NavLink
                to={"https://iiitranchi.ac.in/"}
                target="_blank"
                className="cursor-pointer block"
              >
                IIIT Ranchi
              </NavLink>
              <Link to={"aboutUs"} onClick={() => scrollToTop()}>
                About Us{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
