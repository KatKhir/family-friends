import { FiBell } from "react-icons/fi";

const Header = () => {
  return (
    <nav className="flex justify-between mx-6 mb-10 mt-5">
      <h1 className="text-black font-bold text-2xl">FamilyFriends</h1>
      <div className="relative">
        <div className="absolute top-0.8 right-1 bg-red-300 rounded-full w-2.5 h-2.5 border-1 border-white"></div>
        <FiBell className="text-3xl" />
      </div>
    </nav>
  );
};

export default Header;
