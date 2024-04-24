import Link from "next/link";

const CenterBanner = () => {
  return (
    <>
      <div className="grid md:grid-cols-3 h-90dvh gap-4 mx-8">
        <div className="h-[100%]">
          <img src="/cb2.jpg" alt="" className="md:h-[60]" />
          <div className="md:flex justify-center items-center md:h-[40%]">
            <div className="text-center md:text-left">
              <div className="text-xl font-semibold">SPRING'24</div>
              <div className="md:text-[46px] font-bold font-[seoge UI symbol] text-2xl  md:mt-5">
                TRENDING TEXTURES
              </div>
              <div className="md:mt-5">
                <Link href="" className="underline font-bold ">
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <img src="cb1.jpg" alt="" />
        </div>
      </div>
    </>
  );
};

export default CenterBanner;
