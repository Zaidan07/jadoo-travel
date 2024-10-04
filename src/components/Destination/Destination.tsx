import Text from "../Common/Text/Text";
import decore from "@/assets/CardImage/Decore.png";
import img1 from "@/assets/CardImage/img1.png";
import img2 from "@/assets/CardImage/img2.png";
import img3 from "@/assets/CardImage/img3.png";
import CardDestination from "../Common/Card/CardDestination";
import Image from "next/image";

export default function Destination() {
  return (
    <div className="w-[1102px] h-[617px] flex flex-col mt-[290px] pb-[186px] justify-center items-center relative">
      <div className="w-[547px] h-[65px] text-center pl-[50px]">
        <Text size="h6" variant="secondary" className="uppercase font-semibold">
          Top Selling
        </Text>
        <Text
          size="h2"
          variant="primary"
          fontFamily="volkhov"
          className="pt-[10px] font-bold"
        >
          Top Destinations
        </Text>
      </div>
      <div className="flex justify-center items-center gap-[60px] pt-[90px] pl-[50px] z-30">
        <CardDestination
          destination="Rome, Italy"
          price="$5.42k"
          duration="10 Days Trip"
          imageSrc={img1}
        />
        <CardDestination
          destination="London, UK"
          price="$4.2k"
          duration="12 Days Trip"
          imageSrc={img2}
        />
        <CardDestination
          destination="Full Europe"
          price="$15k"
          duration="28 Days Trip"
          imageSrc={img3}
        />
      </div>
      <div className="z-20">
        <Image src={decore} alt="decore" className="absolute top-[200px] right-[-60px]"/>
      </div>
    </div>
  );
}
