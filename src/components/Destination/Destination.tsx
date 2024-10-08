import Text from "../Common/Text/Text";
import decore from "@/assets/CardImage/Decore.png";
import img1 from "@/assets/CardImage/img1.png";
import img2 from "@/assets/CardImage/img2.png";
import img3 from "@/assets/CardImage/img3.png";
import CardDestination from "../Common/Card/CardDestination";
import Image from "next/image";

export default function Destination() {
  return (
    <div className="w-full h-auto md:w-[1102px] md:h-[617px] flex flex-col pt-[300px] md:mt-[50px] mb-[186px] md:mb-[400px] items-center justify-center relative">
      <div className="w-full md:w-[547px] md:h-[65px] text-center md:pl-[50px] flex flex-col justify-center">
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
      <div className="flex flex-col md:flex-row justify-center items-center gap-[60px] pt-[90px] md:pl-[50px] z-30">
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
        <Image src={decore} alt="decore" className="absolute top-[500px] md:top-[200px] right-[-35px] md:right-[-60px]"/>
      </div>
    </div>
  );
}
