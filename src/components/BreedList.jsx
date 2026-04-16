import Dog from "./Dog";
import Link from "next/link";

const BreedList = ({ searchParams }) => {
  return (
    <>
      <FetchBreed searchParams={searchParams} />
    </>
  );
};

const FetchBreed = async ({ searchParams }) => {
  "use server";
  const { query } = await searchParams;
  const url = query ? `https://api.thedogapi.com/v1/breeds/search?q=${query}` : "https://api.thedogapi.com/v1/breeds";
  try {
    const response = await fetch(url, {
      headers: {
        "x-api-key": process.env.API_KEY,
      },
    });
    const breeds = await response.json();

    return breeds.map((breed) => {
      return (
        <div key={breed.id}>
          <Dog id={breed.id} breedGroup={breed.breed_group} origin={breed.origin} image={breed.image.url} />
        </div>
      );
    });
  } catch (error) {
    return <p>Der skete en fejl......</p>;
  }
};

export default BreedList;
