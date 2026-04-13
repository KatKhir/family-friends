import Image from "next/image";

const SmallDogBar = () => {
  return (
    <div className="bg-white/45 w-fit p-2.5 rounded-2xl">
      <div className="flex gap-3">
        <Image src="https://placecats.com/neo/300/200" alt="Picture of cats" width={80} height={80} className="rounded-xl" />
        <p className="text-white font-medium">Dog Name</p>
      </div>
    </div>
  );
};

export default SmallDogBar;
