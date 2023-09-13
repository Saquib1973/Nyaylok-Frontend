import React from "react";
import Wrapper from "./../Components/Wrapper";
import backgroundImage from "../Utils/background2.jpg";
import backgroundImage2 from "../Utils/background3.jpg";
import { BsSearch } from "react-icons/bs";
const Home = () => {
  return (
    <Wrapper>
      {/* First Section of Home Page */}
      <div
        className="bg-cover text-xs sm:text-sm md:text-base lg:text-xl bg-no-repeat bg-center h-[85vh]  w-full flex items-center px-16 gap-4"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="w-full md:w-2/3 lg:w-1/2 flex gap-4 flex-col">
          <p className="text-white text-right font-julius">
            “When freedom does not have a purpose, when it does not wish to know
            anything about the rule of law engraved in the hearts of men and
            women, when it does not listen to the voice of conscience, it turns
            against humanity and society.”
          </p>
          <p className="text-right font-julius">~Pope John Paul</p>
        </div>
        <div className="w-0 md:w-1/3 lg:w-1/2"></div>
      </div>
      {/* Section 2 of Home Page to keep a count on the number of cases */}
      <div className="bg-black mt-16 h-screen py-20  px-10 flex flex-col gap-20 md:gap-40">
        <p className="text-white text-xl md:text-3xl lg:text-5xl tracking-widest">
          Milestones
        </p>
        <div className="flex-col md:flex-row flex gap-12 flex-wrap justify-between w-full items-center">
          <div className="bg-white h-32 md:h-48 w-32 md:w-48 rounded-2xl flex flex-col items-center justify-evenly px-10">
            <p className="text-black text-3xl md:text-6xl font-semibold">69</p>
            <p className="text-black">Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="bg-red-600/80 h-32 md:h-48 w-32 md:w-48 rounded-2xl flex flex-col items-center justify-evenly px-10">
            <p className="text-white text-3xl md:text-6xl font-semibold">69</p>
            <p className="text-white">Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="bg-white h-32 md:h-48 w-32 md:w-48 rounded-2xl flex flex-col items-center justify-evenly px-10">
            <p className="text-black text-3xl md:text-6xl font-semibold">69</p>
            <p className="text-black">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
      {/* Section 3 of Home Page to get common user a case's number */}
      <div
        className="py-20 h-screen pb-20 lg:pb-10 bg-no-repeat bg-opacity-5 bg-center bg-contain rounded-md px-10"
        style={{ backgroundImage: `url(${backgroundImage2})` }}
      >
        <p className="text-2xl sm:text-3xl md:text-5xl pl">Get Case Detail</p>
        <div className="h-full py-64 w-full sm:w-2/3 mx-auto relative">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-400 placeholder:text-white outline-none rounded-2xl p-3 bg-opacity-60 px-12 w-full text-xl md:text-3xl"
            />
            <BsSearch
              className="absolute top-[20%] text-4xl right-5 cursor-pointer"
              onClick={() => alert("hello")}
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Home;
