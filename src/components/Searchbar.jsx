import { CgSearch } from "react-icons/cg";

const SearchBar = ({ searchParams }) => {
  return (
    <form className="flex gap-4 mx-8 mb-10">
      <button type="submit" className=" bg-red-300 rounded-full w-14 h-14 flex items-center justify-center">
        <CgSearch className="text-white text-3xl" />
      </button>
      <input type="search" name="query" placeholder="search breeds" className="border border-gray-400 px-4 text-gray-500 p-2 rounded-full w-100" />
    </form>
  );
};

export default SearchBar;
