import { CgSearch } from "react-icons/cg";

const SearchBar = () => {
  return (
    <div className="flex gap-4 mx-8 mb-10">
      <div className=" bg-red-300 rounded-full w-14 h-14 flex items-center justify-center">
        <CgSearch className="text-white text-3xl" />
      </div>

      <input type="text" placeholder="search breeds" className="border border-gray-400 px-4 text-gray-500 p-2 rounded-full w-100" />
    </div>
  );
};

export default SearchBar;
