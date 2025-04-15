import React from "react";
import ScaleLoader from "react-spinners/ScaleLoader";

const Loading = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <ScaleLoader
        color="#22d3ee"
        height={80}
        radius={2}
        margin={3}
        width={7}
      />
      <h1 className="text-base mt-10 text-white font-bold">
        Web<span className="text-cyan-500">Glide</span> loading ...
      </h1>
    </div>
  );
};

export default Loading;
