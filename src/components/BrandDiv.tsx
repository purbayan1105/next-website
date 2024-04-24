import Brandcard from "./Brandcard";

const BrandDiv = () => {
  const brandNameArray = [
    { pId: 1, bImg: "/b1.jpg", bName: "DH Gallery" },
    { pId: 2, bImg: "/b2.jpg", bName: "Infinity" },
    { pId: 3, bImg: "/b3.jpg", bName: "Bailey" },
    { pId: 4, bImg: "/b4.jpg", bName: "Air Finder" },
    { pId: 5, bImg: "/b5.jpg", bName: "Advanced Decider" },
    { pId: 6, bImg: "/b6.jpg", bName: "Auto-Ruler" },
  ];
  return (
    <>
      <div className="flex justify-center md:justify-around items-center mt-5 overflow-x-scroll md:overflow-x-hidden">
        <Brandcard info={brandNameArray} />
      </div>
    </>
  );
};

export default BrandDiv;
