import { useState } from "react";
import Image from "next/image";
import Text from "../Text/Text";
import logo from "@/assets/Icons/Logo.svg";
import Dropdown from "../Dropdown/Dropdown";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="w-full h-auto flex justify-between items-center pt-[20px] pb-[20px] px-4 md:px-10 lg:px-20 relative z-20">
      {/* Logo */}
      <Image src={logo} alt="" width={115} height={33} className="cursor-pointer" />

      {/* Hamburger Menu Icon */}
      <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
        {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
      </div>

      {/* Menu items for desktop */}
      <div className={`hidden md:flex gap-[62px] items-center`}>
        <Text size="h6" variant="default" className="font-semibold cursor-pointer select-none hover:text-[#5E6282]">
          Destinations
        </Text>
        <Text size="h6" variant="default" className="font-semibold cursor-pointer select-none hover:text-[#5E6282]">
          Hotels
        </Text>
        <Text size="h6" variant="default" className="font-semibold cursor-pointer select-none hover:text-[#5E6282]">
          Flights
        </Text>
        <Text size="h6" variant="default" className="font-semibold cursor-pointer select-none hover:text-[#5E6282]">
          Bookings
        </Text>
        <Text size="h6" variant="default" className="font-semibold pl-[14px] cursor-pointer select-none hover:text-[#5E6282]">
          Login
        </Text>
      </div>

      {/* Sign Up button */}
      <div className="hidden md:block">
        <button className="transition ease-in-out cursor-pointer hover:bg-[#212832] border-[1px] rounded-[5px] border-[#212832]">
          <Text
            size="h6"
            variant="default"
            className="font-semibold px-[21px] py-[9px] hover:text-[#ffff]"
          >
            Sign up
          </Text>
        </button>
      </div>

      {/* Sidebar for mobile */}
      <div
        className={`fixed top-0 right-0 h-full w-[75%] bg-white shadow-lg z-30 transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex flex-col gap-4 items-center py-6">
          <Text size="h6" variant="default" className="font-semibold cursor-pointer select-none hover:text-[#5E6282]">
            Destinations
          </Text>
          <Text size="h6" variant="default" className="font-semibold cursor-pointer select-none hover:text-[#5E6282]">
            Hotels
          </Text>
          <Text size="h6" variant="default" className="font-semibold cursor-pointer select-none hover:text-[#5E6282]">
            Flights
          </Text>
          <Text size="h6" variant="default" className="font-semibold cursor-pointer select-none hover:text-[#5E6282]">
            Bookings
          </Text>
          <Text size="h6" variant="default" className="font-semibold cursor-pointer select-none hover:text-[#5E6282]">
            Login
          </Text>
          <button className="transition ease-in-out cursor-pointer hover:bg-[#212832] border-[1px] rounded-[5px] border-[#212832]">
            <Text
              size="h6"
              variant="default"
              className="font-semibold px-[21px] py-[9px] hover:text-[#ffff]"
            >
              Sign up
            </Text>
          </button>
        </div>
      </div>

      {/* Dropdown component */}
      <Dropdown />
    </div>
  );
}
