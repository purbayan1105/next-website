import Cards from "./Cards";

const Products = () => {
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
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5 mx-8">
        <Cards info={pArray} />
      </div>
    </>
  );
};

export default Products;
