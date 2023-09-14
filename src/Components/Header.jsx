import React, { useEffect, useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { BsThreeDots } from "react-icons/bs";
import { loggedIn } from "./RenderData";
//Scroll Top Function
export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
const Header = () => {
  // States
  //eslint-disable-next-line
  const [registerd, setRegisterd] = useState(true);
  const [userState, setUserState] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [mobilePress, setMobilePress] = useState(false);
  // Scroll to top onclick fucntion

  // Useeffect to handle the scrollY , if anyything less than 80 then island will shrink
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 80) {
        setMobilePress(false);
        setUserState(false);
        setScroll(true);
      } else {
        setScroll(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scroll]);
  // Long Press Setup
  let pressTimer;
  const startPress = () => {
    pressTimer = setTimeout(() => {
      setScroll(false);
      setMobilePress(false);
    }, 500);
  };
  const endPress = () => {
    clearTimeout(pressTimer);
  };
  return (
    <div className=" z-10 w-full flex justify-center py-8 bg-transparent opacity-95  fixed left-0 top-0 ">
      <div
        className={`active:scale-95 delay-75 flex justify-around items-center bg-white text-black px-2 sm:py-4 rounded-full ${
          mobilePress ? "h-16" : "h-14"
        } sm:h-16 shadow-inner border-4 border-transparent hover:border-redPrim transition-all  duration-300 ${
          registerd
            ? userState
              ? `w-[50%] lg:w-[30%]`
              : `w-[${scroll ? `40%` : `50%`}] lg:w-[${scroll ? `15%` : `30%`}]`
            : ` w-[40%] lg:w-[15%]`
        } transition-all`}
        onMouseDown={startPress}
        onMouseUp={endPress}
        onMouseLeave={endPress}
        onTouchStart={startPress}
        onTouchEnd={endPress}
      >
        {userState ? (
          registerd ? (
            <div className="flex items-center justify-evenly w-full">
              <Link
                to={"user"}
                className="hover:cursor-pointer"
                onClick={() => {
                  setUserState(!userState);
                  scrollToTop();
                }}
              >
                User
              </Link>
              <p
                onClick={() => {
                  setRegisterd(false);
                  scrollToTop();
                }}
                className="hover:cursor-pointer"
              >
                Logout
              </p>
            </div>
          ) : (
            <div className="flex items-center justify-evenly w-full">
              <Link
                to={`login`}
                className="hover:cursor-pointer"
                onClick={() => {
                  scrollToTop();
                  setUserState(!userState);
                }}
              >
                Login
              </Link>
              <Link
                to={`register`}
                onClick={() => {
                  scrollToTop();
                  setUserState(!userState);
                }}
              >
                Register
              </Link>
            </div>
          )
        ) : (
          <>
            <NavLink to={`/`} onClick={() => scrollToTop()}>
              <AiFillHome
                className={`text-2xl hover:cursor-pointer hover:text-redPrim transition-all ${
                  mobilePress ? "hidden" : "block"
                } sm:block`}
              />
            </NavLink>
            {registerd && !scroll && (
              <>
                {loggedIn.map((item, index) => {
                  return (
                    <Link
                      to={`${item.link}`}
                      key={index}
                      className={`hover:text-redPrim transition-all text-center text-xs sm:text-base ${
                        mobilePress ? "block" : "hidden"
                      } sm:block `}
                      onClick={() => scrollToTop()}
                    >
                      <p className="w-20 sm:w-28">{item.name}</p>
                    </Link>
                  );
                })}
              </>
            )}
            <FaUser
              className={`text-xl hover:cursor-pointer hover:text-redPrim transition-all ${
                mobilePress ? "hidden" : "block"
              } sm:block`}
              onClick={() => {
                setUserState(!userState);
              }}
            />
            <BsThreeDots
              className={`${
                mobilePress || scroll ? "hidden" : "block"
              } sm:hidden`}
              onClick={() => setMobilePress(!mobilePress)}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
