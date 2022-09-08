import React from "react";

const Heading = ({ title }) => {
  return (
    <div className="static">
      <div className="text-center text-sky-800 text-xl  font-Poppins font-semibold  md:text-3xl m-5">{title}</div>
      <div className=" w-16 bottom-10 left-0 right-0 mx-auto h-[4px] rounded-full bg-pink-500"></div>
    </div>
  );
};

export default Heading;