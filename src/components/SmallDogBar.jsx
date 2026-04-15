import Image from "next/image";

const SmallDogBar = ({ image, name }) => {
  return (
    <div className="bg-white/45 w-fit p-2.5 rounded-2xl">
      <div className="flex gap-3">
        <Image src={image} alt="Picture of cats" width={80} height={80} className="rounded-xl" />
        <p className="text-white font-medium">name</p>
      </div>
    </div>
  );
};

export default SmallDogBar;
