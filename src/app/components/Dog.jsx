import Image from "next/image";
import FavoritElement from "./FavoritElement";

const Dog = ({ breedGroup, origin, image }) => {
  return (
    <div className="bg-white w-55 rounded-2xl mb-5 pb-3 shadow-md overflow-hidden">
      <div className="relative w-fit">
        <FavoritElement />
        <Image src={image} alt="Picture of cats" width={220} height={220} className="w-full h-auto rounded-2xl" />
      </div>
      <h2 className="text-gray-900 font-semibold text-2xl ml-5 mt-3 mb-1">{breedGroup}</h2>
      <h3 className="text-gray-400 ml-5 break-word inline-block overflow-hidden">{origin}</h3>
    </div>
  );
};

export default Dog;
