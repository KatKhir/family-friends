import Image from "next/image";
import FavoritElement from "./FavoritElement";
import SmallDogBar from "./SmallDogBar";
import GoBackArrow from "./GoBackArrow";

const DetailDog = ({ image }) => {
  return (
    <div className="relative w-fit flex justify-center items-center mx-8">
      <FavoritElement />
      <GoBackArrow />
      {/* <div>
        <Image src={image} alt="Picture of dog" width={500} height={500} className="rounded-4xl" />
      </div> */}
      <div className="absolute bottom-4 left-4">{/* <SmallDogBar /> */}</div>
    </div>
  );
};

export default DetailDog;
