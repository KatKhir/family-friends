import Image from "next/image";
import { FaRegStar } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import SmallDogBar from "./SmallDogBar";

const DetailDog = () => {
  return (
    <div className="relative w-fit flex justify-center items-center mx-8">
      <div className="absolute top-2 right-2 bg-white/35 rounded-full w-12 h-12 flex items-center justify-center ">
        <FaRegStar className="text-white text-3xl" />
      </div>
      <div className="absolute top-2 left-2 bg-white/35 rounded-full w-12 h-12 flex items-center justify-center">
        <IoIosArrowBack className="text-3xl" />
      </div>
      <div>
        <Image src="https://placecats.com/neo/300/200" alt="Picture of cats" width={500} height={500} className="rounded-4xl" />
      </div>
      <div className="absolute bottom-4 left-4">
        <SmallDogBar />
      </div>
    </div>
  );
};

export default DetailDog;
