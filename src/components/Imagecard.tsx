type ImageCardProp = {
  info: {
    pId: number;
    pImg: string;
    pName: string;
    pLink: string;
  };
};

const Imagecard = ({ info }: ImageCardProp) => {
  return (
    <>
      <div className="w-[500px] relative h-[600px]">
        <img
          src={info.pImg}
          alt=""
          className="absolute -z-10 h-[600px] w-[500px]"
        />
        <div className="flex justify-center items-center w-[500px] h-[600px]">
          {info.pName}
        </div>
      </div>
    </>
  );
};

export default Imagecard;
