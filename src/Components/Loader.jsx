import React from "react";

const Loader = ({ clr = "white", size = "sm" }) => {
  return (
    <div
      className={`bg-transparent border-2 border-${clr} border-x-0 ${
        size === "sm" ? "h-7 w-7" : "h-20 w-20"
      } rounded-full animate-spin`}
    />
  );
};

export default Loader;
