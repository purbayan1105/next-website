type brandObjProps = {
  pId: number;
  bImg: string;
  bName: string;
};

type brandArrayProps = {
  info: brandObjProps[];
};

const Brandcard = ({ info }: brandArrayProps) => {
  return (
    <>
      {info.map((item) => (
        <div>
          <div className="mx-7 md:mx-0">
            <img
              src={item.bImg}
              alt=""
              className="md:w-[100px] w-10 rounded-full p-0"
            />
            <div className="text-center mt-2">{item.bName}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Brandcard;
