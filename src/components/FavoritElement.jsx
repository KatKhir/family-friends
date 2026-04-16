"use client";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import useFavorites from "@/store/favorite";

const FavoritElement = ({ id, breed }) => {
  const { favorites, setFavorites, removeFavorite } = useFavorites();
  if (favorites.some((favorite) => favorite.id === id)) {
    return (
      <div className="absolute top-2 right-2 bg-white/35 rounded-full w-10 h-10 flex items-center justify-center ">
        <FaStar className="text-yellow-500 text-3xl" onClick={() => removeFavorite(id)} />
      </div>
    );
  } else {
    return (
      <div className="absolute top-2 right-2 bg-white/35 rounded-full w-10 h-10 flex items-center justify-center ">
        <FaRegStar
          className="text-white text-3xl"
          onClick={() => {
            setFavorites(id);
          }}
        />
      </div>
    );
  }
};

export default FavoritElement;
