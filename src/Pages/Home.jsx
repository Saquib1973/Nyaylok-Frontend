import React, { useEffect, useState } from "react";
import Wrapper from "./../Components/Wrapper";
import backgroundImage from "../Utils/background2.jpg";
import backgroundImage2 from "../Utils/background3.jpg";
import { BsSearch } from "react-icons/bs";
import DisplayCase from "./../Components/DisplayCase";
import { useDispatch, useSelector } from "react-redux";
import { clearMessage, setMessage } from "../Redux/reducer/globalReducer";
import {
  useGetCaseCountQuery,
  useLazyGetParticularCaseQuery,
} from "../Redux/services/caseService";
import Loader from "./../Components/Loader";

// Home Component
const Home = () => {
  // Configs
  const dispatch = useDispatch();
  const { userToken } = useSelector((state) => state.authReducer);
  // States
  // This data need to be fetched from the bacckend and displayed
  const dummy = ["Not Found", "Not Found", "Not Found"];
  const [userCase, setUserCase] = useState(false);
  const [particularCaseId, setParticularCaseId] = useState("");
  const getCaseCount = useGetCaseCountQuery();
  const [particularId, particularCaseResponse] =
    useLazyGetParticularCaseQuery();
  // Function
  const handleSearchCase = async () => {
    await particularId(particularCaseId);
    setUserCase(!userCase);
  };
  useEffect(() => {
    if (particularCaseResponse?.status === "fulfilled") {
      dispatch(
        setMessage({
          message: particularCaseResponse?.data?.message,
          type: true,
        })
      );
      setTimeout(() => {
        dispatch(clearMessage());
      }, 2500);
    } else if (particularCaseResponse?.status === "rejected") {
      dispatch(
        setMessage({
          message: particularCaseResponse?.error?.data?.message,
          type: false,
        })
      );
      setTimeout(() => {
        dispatch(clearMessage());
      }, 3000);
    }
    //eslint-disable-next-line
  }, [particularCaseResponse?.status]);
  return (
    <Wrapper>
      {/* First Section of Home Page */}
      <div
        className="text-xs sm:text-sm md:text-base bg-cover lg:text-xl bg-no-repeat bg-center h-[85vh]  w-full flex items-center px-16 gap-4"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="w-full md:w-2/3 lg:w-1/2 flex gap-4 flex-col">
          <p className="text-white text-right font-julius">
            {/* Random Quote to be generated here */}
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
        <p className="heading">Milestones</p>
        <div className="flex-col md:flex-row flex gap-4 h-full sm:gap-12 flex-wrap justify-between w-full items-center">
          {!getCaseCount?.data?.response ? (
            <>
              {/* Skeleton for cards */}
              {dummy.map((item, index) => {
                return (
                  <div key={index}>
                    <CountBox
                      name={item}
                      index={index}
                      loading={
                        getCaseCount?.isFetching &&
                        getCaseCount?.isLoading &&
                        !getCaseCount?.isSuccess
                      }
                    />
                  </div>
                );
              })}
            </>
          ) : (
            <>
              {/* Cards for backend fetched data */}
              {getCaseCount?.data?.response.map((item, index) => {
                return (
                  <div key={index}>
                    <CountBox
                      count={item[Object.keys(item)[0]]}
                      name={Object.keys(item)[0]}
                      index={index}
                      loading={getCaseCount?.isLoading}
                    />
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
      {/* Section 3 of Home Page to get common user a case's number */}
      {!userToken && (
        <div
          className="py-20 h-screen pb-20 lg:pb-10 bg-no-repeat bg-opacity-5 bg-center bg-contain rounded-md px-10"
          style={{ backgroundImage: `url(${backgroundImage2})` }}
        >
          <p className="heading">Get Case Detail</p>
          <div className="h-full py-[30vh] w-full sm:w-2/3 mx-auto relative">
            <div className="relative">
              <input
                disabled={particularCaseResponse?.status === "pending"}
                type={"text"}
                placeholder={"Search"}
                className="bg-graySec placeholder:text-white outline-none rounded-2xl p-2 sm:p-3 bg-opacity-70 border-[1px] border-white px-12 w-full text-xl md:text-3xl placeholder:tracking-wider placeholder:pl-1"
                onChange={(e) => setParticularCaseId(e.target.value)}
                onClick={() => setUserCase(false)}
              />
              {!userCase && (
                <BsSearch
                  className="absolute top-[30%] sm:top-[20%] text-2xl sm:text-4xl right-5 cursor-pointer active:scale-75 duration-300 transition-all "
                  onClick={handleSearchCase}
                />
              )}
              {userCase && (
                <DisplayCase
                  setUser={setUserCase}
                  data={particularCaseResponse?.data}
                  status={particularCaseResponse?.status}
                  loading={particularCaseResponse?.isLoading}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </Wrapper>
  );
};

export default Home;

// Count box component

const CountBox = ({ count, name, index, loading }) => {
  return (
    <div
      className={`transition-all cursor-pointer hover:scale-105 hover:-translate-y-1 active:scale-95 duration-700 ${
        index % 2 === 0
          ? "bg-white text-black hover:text-redPrim hover:bg-white"
          : "text-white bg-redPrim hover:bg-white hover:text-redPrim"
      } h-32 md:h-48 w-32 md:w-48 rounded-2xl flex flex-col items-center justify-evenly px-10`}
    >
      {loading ? (
        <Loader clr={index % 2 === 0 ? "redPrim" : "white"} />
      ) : (
        <>
          <p className="text-3xl md:text-6xl font-semibold">{count}</p>
          <p className="text-xs sm:text-sm">{name}</p>
        </>
      )}
    </div>
  );
};
