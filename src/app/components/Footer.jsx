import { FiHome } from "react-icons/fi";
import { FaRegStar } from "react-icons/fa";
import { BsChat } from "react-icons/bs";
import { GoPerson } from "react-icons/go";

const Footer = () => {
  return (
    <nav className="flex gap-12 justify-center items-center h-16 text-3xl">
      <FiHome className="text-gray-500" />
      <FaRegStar className="text-gray-500" />
      <BsChat className="text-gray-500" />
      <GoPerson className="text-gray-500" />
    </nav>
  );
};

export default Footer;
