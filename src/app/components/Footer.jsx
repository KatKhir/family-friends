import { FiHome } from "react-icons/fi";
import { FaRegStar } from "react-icons/fa";
import { BsChat } from "react-icons/bs";
import { GoPerson } from "react-icons/go";

const Footer = () => {
  return (
    <footer className=" bg-gray-100 sticky bottom-0 w-full pt-4 pb-7 rounded-full">
      <nav className="flex gap-15 justify-center items-center text-4xl">
        <FiHome className="text-gray-400" />
        <FaRegStar className="text-gray-400" />
        <BsChat className="text-gray-400" />
        <GoPerson className="text-gray-400" />
      </nav>
    </footer>
  );
};

export default Footer;
