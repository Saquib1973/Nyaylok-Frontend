import React, { useState } from "react";
import Wrapper from "../Components/Wrapper";
import { BsCaretRight, BsCaretLeft } from "react-icons/bs";
import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { aboutUsData } from "../Components/RenderData";

export const UserCard = ({
  role = "",
  name = "",
  instagram = "",
  imgUrl = "",
  count = 0,
}) => {
  return (
    <div
      className={`mx-5 sm:mx-0 bg-gradient-to-br ${
        count % 2 === 0
          ? "from-gray-700 to-gray-900"
          : "to-gray-700 from-gray-900"
      } bg-opacity-75 rounded-2xl px-4 md:px-10 w-full h-2/4 sm:flex-row flex-col flex text-base sm:text-lg md:text-3xl items-center gap-10 justify-evenly`}
    >
      <img
        src={imgUrl}
        className="text-xs  h-44 w-44 rounded-full align-middle transition-all duration-1000"
        alt="Please Wait Loading..."
      />
      <div className="flex flex-col gap-4">
        <p className="space-x-10">Name: {name}</p>
        <p className="space-x-10">Role: {role}</p>
        <div className="flex gap-4 justify-evenly w-full">
          <Link
            to={instagram}
            className="hover:text-redPrim transition-all duration-500"
          >
            <AiOutlineInstagram />
          </Link>
          <Link
            to={instagram}
            className="hover:text-redPrim transition-all duration-500"
          >
            <AiOutlineTwitter />
          </Link>
          <Link
            to={instagram}
            className="hover:text-redPrim transition-all duration-500"
          >
            <AiOutlineLinkedin />
          </Link>
        </div>
      </div>
    </div>
  );
};

const AboutUs = () => {
  const [count, setCount] = useState(0);

  const handleLeftClick = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount(aboutUsData.length - 1);
    }
  };

  const handleRightClick = () => {
    if (count < aboutUsData.length - 1) {
      setCount(count + 1);
    } else {
      setCount(0);
    }
  };

  return (
    <Wrapper>
      <div className="h-screen flex items-center justify-center mx-2">
        <BsCaretLeft
          className="text-5xl cursor-pointer active:scale-75 transition-all duration-300"
          onClick={handleLeftClick}
        />
        <UserCard
          count={count}
          name={aboutUsData[count].name}
          imgUrl={aboutUsData[count].imgUrl}
          instagram={aboutUsData[count].instagram}
          twitter={aboutUsData[count].twitter}
          likedin={aboutUsData[count].likedin}
          role={aboutUsData[count].role}
        />
        <BsCaretRight
          className="text-5xl cursor-pointer active:scale-75 transition-all duration-300"
          onClick={handleRightClick}
        />
      </div>
    </Wrapper>
  );
};

export default AboutUs;
