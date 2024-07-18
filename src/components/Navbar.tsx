import { useState } from "react";
import logo from "./../assets/images/logo.png";
import { TiHome } from "react-icons/ti";
import { FaPlus, FaStar } from "react-icons/fa";
import { BiSolidMoviePlay, BiSolidSearch } from "react-icons/bi";
import { PiTelevisionFill } from "react-icons/pi";
import { HiDotsVertical } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menu = [
    { title: "HOME", icon: <TiHome /> },
    { title: "SEARCH", icon: <BiSolidSearch /> },
    { title: "WATCH LIST", icon: <FaPlus /> },
    { title: "ORIGINALS", icon: <FaStar /> },
    { title: "MOVIES", icon: <BiSolidMoviePlay /> },
    { title: "SERIES", icon: <PiTelevisionFill /> },
  ];

  const displayedMenu = menu.slice(0, 3);
  const hiddenMenu = menu.slice(3);

  return (
    <div className="flex items-center justify-between px-4">
      <div className="flex items-center space-x-6">
        <img src={logo} width={80} className="md:w-[150px] p-5 object-cover" />
        <div className="hidden md:flex space-x-6">
          {menu.map((item, index) => (
            <div
              key={index}
              className="text-white flex items-center gap-3 font-semibold cursor-pointer hover:underline underline-offset-8"
            >
              {item.icon} <span className="hidden md:inline">{item.title}</span>
            </div>
          ))}
        </div>
        <div className="flex md:hidden space-x-6">
          {displayedMenu.map((item, index) => (
            <div
              key={index}
              className="text-white flex items-center gap-3 font-semibold cursor-pointer hover:underline underline-offset-8"
            >
              {item.icon} <span className="sr-only">{item.title}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center space-x-6">
        <div className="relative md:hidden flex items-center">
          <button
            className="text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <IoMdClose size={20} /> : <HiDotsVertical size={20} />}
          </button>
          {isMenuOpen && (
            <div className="absolute top-10 right-0 bg-[#121212] border border-gray-700 rounded-lg shadow-lg p-5">
              {hiddenMenu.map((item, index) => (
                <div
                  key={index}
                  className="text-white flex items-center gap-3 font-semibold cursor-pointer hover:underline underline-offset-8"
                >
                  {item.icon} <span className="sr-only">{item.title}</span>
                </div>
              ))}
            </div>
          )}
        </div>
        <img
          src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png"
          className="w-10 h-10 md:w-[55px] md:h-[55px] rounded-full space-x-6"
        />
      </div>
    </div>
  );
};

export default Navbar;
