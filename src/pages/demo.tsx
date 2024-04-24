import Imagecard from "@/components/Imagecard";

const demo = () => {
  const pArray = [
    {
      pId: 1,
      pImg: "/v1.jpg",
      pName: "Cool Tees",
      pLink: "Shop Now",
    },
    {
      pId: 2,
      pImg: "/v2.jpg",
      pName: "Classy W's Tees",
      pLink: "Shop Now",
    },
    {
      pId: 3,
      pImg: "/v3.jpg",
      pName: "Gym Crop Tees",
      pLink: "Shop Now",
    },
    {
      pId: 4,
      pImg: "/v4.jpg",
      pName: "Cool Tees",
      pLink: "Travel frocks",
    },
  ];
  return (
    <>
      <div className="grid grid-cols-2 gap-8">
        {pArray.map((item) => {
          return <Imagecard key={item.pId} info={item} />;
        })}
      </div>
    </>
  );
};

export default demo;
