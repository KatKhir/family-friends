import Image from "next/image";
import { FaRegStar } from "react-icons/fa";

const Dog = ({ breedGroup, origin }) => {
  return (
    <div className="bg-white w-fit rounded-2xl mb-5 pb-5">
      <div className="relative w-fit">
        <div className="absolute top-1 right-1 bg-white/35 rounded-full w-9 h-9 flex items-center justify-center ">
          <FaRegStar className="text-white text-2xl" />
        </div>
        <Image src="https://placecats.com/neo/300/200" alt="Picture of cats" width={220} height={220} className="rounded-2xl" />
      </div>
      <h2 className="font-semibold text-2xl ml-5 mt-3 mb-1">Breed group</h2>
      <h3 className="text-gray-400 ml-5">origin</h3>
    </div>
  );
};

export default Dog;
