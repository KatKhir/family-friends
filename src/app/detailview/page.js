import { BsTypeH1 } from "react-icons/bs";
import DetailDog from "../components/DetailDog";
import Temperament from "../components/Temperament";

const Detail = () => {
  return (
    <div>
      <DetailDog />
      <h1 className="text-gray-900 text-4xl font-semibold mt-4 mb-4 ml-8">Dog Name</h1>
      <Temperament />
      <div className="mx-8 mb-4">
        <h2 className="text-gray-500 text-s font-medium">Breed description</h2>
        <p className="text-gray-700 text-xl">lore ipsum dolor sit amet lore ipsum dolor sit amet lore ipsum dolor sit amet lore ipsum dolor sit amet lore ipsum dolor sit amet</p>
      </div>

      <div className="mx-8">
        <h2 className="text-gray-500 font-medium">Breed history</h2>
        <p className="text-gray-700 text-xl">lore ipsum dolor sit amet lore ipsum dolor sit amet lore ipsum dolor sit amet lore ipsum dolor sit amet lore ipsum dolor sit amet</p>
      </div>
    </div>
  );
};

export default Detail;
