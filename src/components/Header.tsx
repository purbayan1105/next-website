import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className="flex justify-end items-center py-2 bg-gray-200">
        <div className="mx-16">
          <Link href="" className="font-semibold text-sm roboto">
            Store Locator
          </Link>
          <span className="text-[#8a8a8a]"> | </span>
          <Link href="" className="font-semibold text-sm">
            Help
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
