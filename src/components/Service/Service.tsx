import Image from "next/image";
import Text from "../Common/Text/Text";
import blink from "@/assets/CardImage/blink.png";
// import Card from "../Common/Card/Card";
// import plane from "@/assets/Icons/service2.svg"
// import mic from "@/assets/Icons/service3.svg"

export default function Service() {
  return (
    <div className="w-[1228px] h-[525px] pt-[197px] flex relative">
      <div className="flex pl-[280px]">
        <div className="w-[547px] h-[65px] text-center">
          <Text size="h6" variant="secondary" className="uppercase font-semibold">
            Category
          </Text>
          <Text
            size="h2"
            variant="primary"
            fontFamily="volkhov"
            className="pt-[10px]"
          >
            We Offer Best Services
          </Text>
        </div>
      </div>
      <Image src={blink} alt="blink" className="absolute right-0" />
     
    </div>
  );
}
