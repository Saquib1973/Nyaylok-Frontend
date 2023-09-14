import React from "react";
import Wrapper from "../Components/Wrapper";
import { useNavigate } from "react-router-dom";
import { scrollToTop } from "../Components/Header";
const ViewCases = () => {
  const navigate = useNavigate();
  const arr = [1, 2, 3, 4, 5, 6];
  return (
    <Wrapper>
      <div className="min-h-screen flex justify-center items-center">
        <div className="bg-gray-600 flex flex-col rounded-lg  bg-opacity-50 min-h-3/5 mx-2 mb-10 w-full sm:w-4/5 py-14  px-1 sm:px-8 gap-4">
          <div className="heading w-full text-center py-2">View Cases</div>
          <div className="w-auto mx-2 sm:mx-6 rounded-lg py-3 bg-opacity-80 flex  px-5 bg-white text-black">
            <div className="w-[15%]">CaseId</div>
            <div className="w-[15%]">Status</div>
            <div className="w-[45%]">Sections</div>
            <div className="w-[25%]">Date of Filling</div>
          </div>
          <div className="bg-gray-400 rounded-md h-full mx-2 sm:mx-6 w-auto bg-opacity-50">
            {arr.map((item) => {
              return (
                <>
                  <div
                    className="w-auto px-3  transition-all duration-500 py-5 flex gap-4 hover:bg-[#fe7e85]"
                    onClick={() => {
                      navigate(`/updateCase/${item}`);
                      scrollToTop();
                    }}
                  >
                    <div className="w-[15%] overflow-x-auto">Lorem ipsum</div>
                    <div className="w-[15%] overflow-x-auto">lorem20</div>
                    <div className="w-[45%] overflow-x-auto">lorem20</div>
                    <div className="w-[25%] overflow-x-auto">
                      Date of Filling
                    </div>
                  </div>
                  <div className="h-2 bg-gray-300" />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ViewCases;
