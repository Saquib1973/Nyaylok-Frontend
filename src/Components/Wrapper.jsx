import React from "react";

const Wrapper = ({ children }) => {
  return (
    <div className="pt-36 px-[20vw] bg-[#000000]  z-0 text-white">
      {children}
    </div>
  );
};

export default Wrapper;
