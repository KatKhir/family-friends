import Dog from "./Dog";
import Link from "next/link";

const BreedList = () => {
  return (
    <>
      <FetchBreed />
    </>
  );
};

const FetchBreed = async () => {
  "use server";
  const response = await fetch("https://api.thedogapi.com/v1/breeds", {
    headers: {
      "x-api-key": process.env.API_KEY,
    },
  });
  const breeds = await response.json();

  return breeds.map((breed) => {
    return (
      <div key={breed.id}>
        <Link href={`/detailview/id/${breed.id}`}>
          <Dog key={breed.id} breedGroup={breed.breed_group} origin={breed.origin} image={breed.image.url} />
        </Link>
      </div>
    );
  });
};

export default BreedList;
