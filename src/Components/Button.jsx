import React from "react";

const Button = ({ name}) => {
  return (
    <div className="bg-redPrim/80 px-10 cursor-pointer hover:bg-redPrim transition-all duration-500 text-xl py-4 rounded-full">
      {name}
    </div>
  );
};

export default Button;
