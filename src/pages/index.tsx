import Banner from "@/components/Banner";
import Brandcard from "@/components/Brandcard";
import BrandDiv from "@/components/BrandDiv";
import CenterBanner from "@/components/CenterBanner";
import Header from "@/components/Header";
import Heaer2 from "@/components/Heaer2";
import Navbar from "@/components/Navbar";
import Products from "@/components/Products";
import SpecialMessage from "@/components/SpecialMessage";

const index = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Heaer2 />
      <Banner />
      <Products />
      <SpecialMessage />
      <CenterBanner />
      <BrandDiv />
    </>
  );
};

export default index;
