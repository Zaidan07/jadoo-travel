import Image from "next/image";
import Text from "../Text/Text";
import logo from "@/assets/Icons/Logo.svg";
import Dropdown from "../Dropdown/Dropdown";

export default function Navbar() {
  return (
    <div className="w-[1168px] h-auto flex pt-[40px] items-center z-20 relative">
      <Image src={logo} alt="" width={115} height={33} className="cursor-pointer"/>
      <div className="flex gap-[62px] pl-[222px]">
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
      <div className="pl-[32px]">
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
      <Dropdown/>
    </div>
  );
}
