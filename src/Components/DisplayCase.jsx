import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
const DisplayCase = ({ setUser }) => {
  //eslint-disable-next-line
  const [cas, setCas] = useState({
    caseNo: "#dsflk34234klls",
    caseStatus: 450,
  });
  return (
    <div className="flex w-full justify-center mt-10">
      <div className="bg-redPrim text-white rounded-lg h-auto w-auto  p-6 sm:p-8 text-base sm:text-xl relative">
        <AiOutlineClose
          className="top-1 right-1  text-2xl absolute cursor-pointer hover:animate-pulse hover: bg-white text-redPrim transition-all rounded-md"
          onClick={() => setUser(false)}
        />
        <p>CaseNo. : {cas.caseNo}</p>
        <p>Case Status : {cas.caseStatus}</p>
      </div>
    </div>
  );
};

export default DisplayCase;
