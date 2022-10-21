import React from "react";
import { HashLoader, PropagateLoader } from "react-spinners";

function Loading() {
  return (
    <div className="bg-[#091B18] h-screen flex flex-col items-center justify-center">
      {/* <div className="flex items-center space-x-2 mb-10"> */}
      <h1 className="text-xl text-white font-bold">Loading...</h1>
      <HashLoader className="mt-5" color="white" size={60} />
    </div>
    // </div>
  );
}

export default Loading;
