import { url } from "inspector";

const Banner = () => {
  return (
    <>
      <div
        className="bg-cover md:bg-center md:h-screen mx-8 mt-5 h-[20rem] flex justify-center items-end md:justify-end md:items-center pb-4 md:pb-0"
        style={{ backgroundImage: `url("/banner.png")` }}>
        <div className="md:mx-10">
          <div className="md:text-8xl text-3xl font-bold bg-gradient-to-tl from-blue-500 to-green-400 text-transparent bg-clip-text md:text-left text-center">
            <div className="">Welcome To</div>
          </div>
          <div className="md:text-8xl text-3xl font-bold py-3 bg-gradient-to-tl from-purple-500 to-indigo-500 text-transparent bg-clip-text text-center md:text-left">
            <div className="">Our Spring Sales</div>
          </div>
          <div className="mt-4 md:mt-10 md:text-4xl text-xl text-center md:text-left">
            Get upto 70% discount on all products
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
