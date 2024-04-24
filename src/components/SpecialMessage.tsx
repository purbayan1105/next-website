import React from "react";

const SpecialMessage = () => {
  return (
    <div className="flex justify-center items-center h-[10vh]">
      <div className="text-center">
        <h2 className="text-xl md:text-3xl font-bold mb-4 bg-gradient-to-tl from-indigo-600 to-green-400 text-transparent bg-clip-text">
          Upto 70% off On All Orders
        </h2>
        <h3 className="text-xl font-bold mb-2 animate-pulse delay-300 bg-gradient-to-tl from-indigo-600 to-purple-500 text-transparent bg-clip-text">
          Spring Sale is Online
        </h3>
      </div>
    </div>
  );
};

export default SpecialMessage;
