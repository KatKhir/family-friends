import { FaRegStar } from "react-icons/fa";

const FavoritElement = () => {
  return (
    <div className="absolute top-2 right-2 bg-white/35 rounded-full w-9 h-9 flex items-center justify-center ">
      <FaRegStar className="text-white text-2xl" />
    </div>
  );
};

export default FavoritElement;
