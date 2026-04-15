import { BsTypeH1 } from "react-icons/bs";
import DetailDog from "../../../components/DetailDog";
import Temperament from "../../../components/Temperament";

const Detail = async ({ params }) => {
  const { id } = await params;

  const response = await fetch(`https://api.thedogapi.com/v1/breeds/${id}`, {
    headers: {
      "x-api-key": process.env.API_KEY,
    },
  });
  const breed = await response.json();

  return (
    <div>
      <DetailDog image={breed.image.url} />
      <h1 className="text-gray-900 text-4xl font-semibold mt-4 mb-4 ml-8">{breed.name}</h1>
      <Temperament image={breed.image.url} />
      <div className="mx-8 mb-4">
        <h2 className="text-gray-500 text-s font-medium">Breed description</h2>
        <p className="text-gray-700 text-xl">{breed.description}</p>
      </div>
      <div className="mx-8">
        <h2 className="text-gray-500 font-medium">Breed history</h2>
        <p className="text-gray-700 text-xl">{breed.history}</p>
      </div>
    </div>
  );
};

export default Detail;
