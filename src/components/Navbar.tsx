import { Heart, Search, ShoppingCart, UserRound } from "lucide-react";

const Navbar = () => {
  return (
    <>
      <div className="grid grid-cols-2 py-2">
        <div className="flex justify-around items-center gap-2">
          <img src="/nextlogo.png" alt="" className="md:w-[110px]  w-[60px]" />
          <div className="border-2 border-black justify-center items-center rounded-3xl bg-indigo-50 hidden md:flex lg:flex">
            <div className="">
              <input
                type="search"
                className="border-none outline-none pl-5 p-3 py-2 w-[30vw] rounded-3xl bg-indigo-50"
                placeholder="Search for your brand or product"
              />
            </div>
            <img src="/search.png" alt="" className="w-[1rem] mr-2" />
          </div>
        </div>
        <div className="">
          <div className="flex justify-end items-center gap-5 px-5">
            <div className="sm:block md:hidden">
              <Search />
            </div>
            <UserRound />
            <Heart />
            <ShoppingCart />

            <button className="bg-green-400 rounded-3xl px-4 py-2 hidden md:block lg:block">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
