"use client";
import Image from "next/image";
import { useState } from "react";
import vector from "@/assets/Icons/Vector.svg";
import Text from "../Text/Text";

const Dropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left pl-[20px]">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full px-[8px] py-[4px] bg-transparent"
          onClick={toggleDropdown}
        >
          <Text size="h6" variant="default" className="font-semibold ">
            EN
          </Text>
          <Image src={vector} alt="vector" className="mt-[8px] ml-[7px]" />
        </button>
      </div>

      {isOpen && (
        <div
          className="absolute right-0 mt-[8px] w-[80px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="py-[4px]" role="none">
            <a
              href="#"
              className="block px-[16px] py-[8px] hover:bg-gray-100"
              role="menuitem"
            >
              <Text size="h6" variant="default">
                EN
              </Text>
            </a>
            <a
              href="#"
              className="block px-[16px] py-[8px] hover:bg-gray-100"
              role="menuitem"
            >
              <Text size="h6" variant="default">ID</Text>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
