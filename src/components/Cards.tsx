import React from "react";

type arrayObj = {
  pId: number;
  pImg: string;
  pName: string;
  pLink: string;
};

type arrayProps = {
  info: arrayObj[];
};

const Cards = ({ info }: arrayProps) => {
  return (
    <>
      {info.map((item) => (
        <div
          className={`bg-center bg-cover h-96 mb-5`}
          key={item.pId}
          style={{ backgroundImage: `url(${item.pImg})` }}>
          <div className="flex gap-5 justify-around items-end h-[90%] font-bold">
            <div className="cursor-pointer underline hover:text-white">
              {item.pName}
            </div>
            <div className="cursor-pointer underline hover:text-white">
              {item.pLink}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Cards;
