import React, { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  const moreDetail = [
    { name: "Register Case", link: "registerCase" },
    { name: "View Case", link: "viewCases" },
  ];

  //eslint-disable-next-line
  const [registerd, setRegisterd] = useState(true);
  const [userState, setUserState] = useState(false);

  return (
    <div className=" z-10 w-full flex justify-center py-8 bg-transparent opacity-95  fixed left-0 top-0">
      <div
        className={`dynamic-island flex justify-around items-center bg-white text-black px-2 py-4 rounded-full h-16 shadow-inner border-4 border-transparent hover:border-[#b22e3d]  ${
          registerd ? (userState ? `w-[15%]` : "w-[35%]") : "w-[12%]"
        } transition-all`}
      >
        {userState ? (
          <div className="flex items-center justify-evenly w-full">
            <p
              className="hover:cursor-pointer"
              onClick={() => setUserState(!userState)}
            >
              User
            </p>
            <p>Logout</p>
          </div>
        ) : (
          <>
            <NavLink to={`/`}>
              <AiFillHome className="text-2xl hover:cursor-pointer hover:text-gray-600 transition-all" />
            </NavLink>
            {registerd && (
              <>
                {moreDetail.map((item, index) => {
                  return (
                    <Link to={`${item.link}`} key={index}>
                      <p className="w-24">{item.name}</p>
                    </Link>
                  );
                })}
              </>
            )}
            <FaUser
              className="text-xl hover:cursor-pointer hover:text-gray-600 transition-all"
              onClick={() => setUserState(!userState)}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
