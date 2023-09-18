import React from "react";

const Loader = ({ clr = "white" }) => {
  return (
    <div
      className={`bg-transparent border-2 border-${clr} border-x-0 h-7 w-7 rounded-full animate-spin`}
    />
  );
};

export default Loader;
