import React from "react";
import error from "../Utils/404.jpg";
import { Link } from "react-router-dom";

// Error page

const Error = () => {
  return (
    <>
      <div
        className="h-screen bg-contain bg-no-repeat bg-center bg-[#10110F] "
        style={{ backgroundImage: `url(${error})` }}
      >
        <div className="text-white h-full w-full flex items-center justify-center">
          <Link
            to={"/"}
            className="bg-gray-800 px-2 lg:px-4 py-1 lg:py-2 rounded-xl rounded-tl-none rounded-br-none cursor-pointer ml-[40vw] mt-[12vh] sm:mt-[4vh] md:mt-[6vh] lg:mt-[8vh] text-sm md:text-lg lg:text-2xl transition-all duration-500 hover:rounded-b-none border-b-4 border-transparent hover:border-redPrim"
          >
            {" "}
            Return
          </Link>
        </div>
      </div>
    </>
  );
};

export default Error;
