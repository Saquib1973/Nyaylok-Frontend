import React, { useEffect, useState } from "react";
import Wrapper from "../Components/Wrapper";
import { useNavigate, useParams } from "react-router-dom";
import { scrollToTop } from "../Components/Header";
import Pagination from "../Components/Pagination";
import backgroundImage from "../Utils/background1.png";
import {
  useGetCaseCountQuery,
  useLazyGetCasesQuery,
} from "../Redux/services/caseService";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Loader from "../Components/Loader";
const ViewCases = () => {
  // Config
  const params = useParams();
  const navigate = useNavigate();
  const [getCase, caseResponse] = useLazyGetCasesQuery();

  const caseCount = useGetCaseCountQuery();
  useEffect(() => {
    getCase(params?.page);
    // eslint-disable-next-line
  }, [params?.page]);
  const [countTotalCases, setCountTotalCases] = useState(null);
  useEffect(() => {
    setCountTotalCases(countCases());
    // eslint-disable-next-line
  }, [caseCount?.data?.response]);
  function countCases() {
    var count = 0;
    for (var i = 0; i < caseCount?.data?.response?.length; i += 1) {
      count += Number(Object.values(caseCount?.data?.response[i]));
    }
    return count;
  }
  return (
    <Wrapper>
      <div
        className="min-h-screen flex justify-center items-center bg-center bg-cover"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="bg-gray-600 flex flex-col rounded-lg text-xs sm:text-sm md:text-base lg:text-xl bg-opacity-50 min-h-3/5 mx-2 mb-16 w-full  py-10  px-1 sm:px-8 gap-4 ">
          <div className="heading w-full text-center py-2">View Cases</div>
          <div className="w-auto mx-2 sm:mx-6 rounded-lg py-3 bg-opacity-80 flex  px-2 sm:px-5 bg-white text-black">
            <div className="w-[40%] md:w-[25%]">CaseId</div>
            <div className="w-[30%] md:w-[15%]">Status</div>
            <div className="hidden md:block md:w-[40%]">Sections</div>
            <div className="w-[30%] md:w-[20%]">Date of Filling</div>
          </div>
          <div className="bg-gray-400 rounded-md h-full mx-2 sm:mx-6 w-auto bg-opacity-50">
            {caseResponse?.isFetching ||
            caseResponse?.status === "uninitialized" ? (
              <div className="bg-gray-400 h-auto py-4 w-full px-2">
                <Skeleton
                  // className="h-14"
                  height={60}
                  count={7}
                  direction="rtl"
                />
              </div>
            ) : caseResponse?.isError ? (
              <div className="h-96 w-full flex items-center justify-center text-sm sm:text-base md:text-3xl bg-redPrim bg-opacity-50">
                Some Error Occured Reload..
              </div>
            ) : (
              <>
                {caseResponse?.data?.paginatedCases.map((item, index) => {
                  return (
                    <div key={index}>
                      <div
                        className="w-auto px-1 sm:px-3  group transition-all duration-500 py-5 flex gap-1 sm:gap-4 hover:bg-[#ff8d93] cursor-pointer"
                        onClick={() => {
                          navigate(`/updateCase/${item.caseId}`);
                          scrollToTop();
                        }}
                      >
                        <div className="w-[40%] md:w-[25%] overflow-x-auto text-xs truncate">
                          {item.caseId}
                        </div>
                        <div className="w-[30%] md:w-[15%] overflow-x-auto truncate">
                          {item.status}
                        </div>
                        <div className="md:w-[40%] hidden md:flex overflow-x-auto gap-2 flex-wrap">
                          {item.IPCsections.map((i, indx) => {
                            return (
                              <p
                                key={indx}
                                className="bg-red-400 rounded-md text-xs p-1 sm:p-2 group-hover:scale-90 group-hover:bg-red-500 transition-all duration-1000"
                              >
                                {i}
                              </p>
                            );
                          })}
                        </div>
                        <div className="w-[30%] md:w-[20%] overflow-x-auto">
                          {item.DOR.split("T")[0]
                            .split("-")
                            .reverse()
                            .join("/")}
                        </div>
                      </div>
                      <div className="h-2 bg-gray-300" />
                    </div>
                  );
                })}
              </>
            )}
          </div>
          <div className="md:w-full items-center flex flex-col">
            {caseCount?.isFetching ? (
              <div className="bg-gradient-to-r from-red-300 to-redPrim animate-spin rounded-full p-4">
                <Loader />
              </div>
            ) : (
              <Pagination
                count={countTotalCases}
                perPage={6}
                pag={params?.page ? params?.page : 1}
              />
            )}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ViewCases;
