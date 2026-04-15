import { IoIosArrowBack } from "react-icons/io";

const GoBackArrow = () => {
  return (
    <div className="absolute top-2 left-2 bg-white/35 rounded-full w-12 h-12 flex items-center justify-center">
      <IoIosArrowBack className="text-3xl" />
    </div>
  );
};

export default GoBackArrow;
