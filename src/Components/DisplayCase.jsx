import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import Loader from "./Loader";
const DisplayCase = ({ setUser, data, status, loading }) => {
  //eslint-disable-next-line

  return (
    <div className="flex w-full justify-center mt-10">
      <div
        className={`${
          status !== "rejected"
            ? "bg-graySec bg-opacity-90"
            : "bg-redPrim bg-opacity-50"
        }  text-white rounded-lg h-auto w-auto  p-6 sm:p-8 text-base sm:text-xl relative`}
      >
        {loading ? (
          <Loader />
        ) : (
          <>
            {status === "rejected" ? (
              <>
                <AiOutlineClose
                  className="top-1 right-1 text-white text-2xl absolute cursor-pointer hover:animate-pulse hover:bg-white hover:text-redPrim transition-all rounded-md"
                  onClick={() => setUser(false)}
                />
                <p>Some Error Occured</p>
              </>
            ) : (
              <>
                <AiOutlineClose
                  className="top-1 right-1 text-white text-2xl absolute cursor-pointer hover:animate-pulse hover:bg-white hover:text-redPrim transition-all rounded-md"
                  onClick={() => setUser(false)}
                />
                <p>Victim Name : {data?.victim}</p>
                <p>Case Status. : {data?.casePosition}</p>
                <p>Register Date : {data?.dor}</p>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default DisplayCase;
