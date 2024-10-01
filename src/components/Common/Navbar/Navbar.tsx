import Image from "next/image";
import Text from "../Text/Text";
import logo from "@/assets/Icons/Logo.svg"


export default function Navbar () {
    return (
        <div className="w-[1168px] h-[40px] flex ">
            <Image src={logo} alt=""/>
            <div className="flex gap-[55px] pl-[222px]">
                <Text size="h6" variant="default" className="font-poppins">Destinations</Text>
                <Text size="h6" variant="default" className="font-poppins">Hotels</Text>
                <Text size="h6" variant="default" className="font-poppins">Flights</Text>
                <Text size="h6" variant="default" className="font-poppins">Bookings</Text>
                <Text size="h6" variant="default" className="font-poppins">Login</Text>
            </div>

        </div>
    );
}