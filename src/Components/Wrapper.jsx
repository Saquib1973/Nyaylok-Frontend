import React from "react";

// Wrapper sets up the page's top
// to use it define the height of the page you are using it in
const Wrapper = ({ children }) => {
  return (
    <div className="pt-28 md:px-[10vw] lg:px[12vw] xl:px-[20vw] bg-[#000000]  z-0 text-white">
      {children}
    </div>
  );
};

export default Wrapper;
