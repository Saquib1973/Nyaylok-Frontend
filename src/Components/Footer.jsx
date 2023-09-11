import React from "react";
import img from "../Utils/medium-poster-narendra-modi-ji-poster-poster-for-wall-decoration-original-imafqqrrsvjcnkqg.webp";
const Footer = () => {
  return (
    <div className="bg-blackPrim py-2">
      <div className="flex mx-2 rounded-md  flex-col items-center justify-between gap-8 py-12 pb-16 bg-grayPrim text-white px-12">
        <div>Made with 💖 by Hacktivators+</div>
        <div className="w-full flex justify-between pl-20">
          <div className="w-[80%] flex items-center justify-center gap-12">
            <div className="w-1/3">
              <p className="cursor-pointer">Ministry of Justice</p>
              <p className="cursor-pointer">MHRD</p>
            </div>
            <div className="w-1/3">
              <p className="cursor-pointer">Contact Local Court</p>
              <p className="cursor-pointer">Government of India</p>
            </div>
            <div className="w-1/3">
              <p className="cursor-pointer">Indian Institute of Ranchi</p>
            </div>
          </div>
          <div className="w-[20%] flex justify-center">
            {/* <img src={img} className="h-4" alt="" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
