"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Text from "../Text/Text";
import logo from "@/assets/Icons/Logo.svg";
import Dropdown from "../Dropdown/Dropdown";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null); // Ref to the menu container

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <div className="w-full h-auto flex md:justify-between items-center pt-[20px] pb-[20px] relative z-20">
      <Image src={logo} alt="" className="cursor-pointer w-[90px] h-[20px] md:w-[115px] md:h-[33px]" />

      <div className="md:hidden pl-[150px] md:pl-[0px] cursor-pointer" onClick={toggleMenu}>
        {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
      </div>

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

      <div
        ref={menuRef} 
        className={`fixed top-0 right-0 h-full w-[75%] bg-white shadow-lg z-30 transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex flex-col gap-[16px] items-center py-[24px]">
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

      <Dropdown />
    </div>
  );
}
