import Image from "next/image";
import Text from "../Common/Text/Text";
import blink from "@/assets/CardImage/blink.png";
import Card from "../Common/Card/Card";
import service1 from "@/assets/Icons/service1.svg";
import service2 from "@/assets/Icons/service33.png";
import service3 from "@/assets/Icons/service3.svg";
import service4 from "@/assets/Icons/service4.svg";

export default function Service() {
  return (
    <div className="w-full md:w-[1228px] h-[525px] mb-[1000px] pt-[197px] flex flex-col relative">
      <div className="flex md:pl-[300px]">
        <div className="w-full h-auto md:w-[547px] md:h-[65px] text-center z-10">
          <Text
            size="h6"
            variant="secondary"
            className="uppercase font-semibold"
          >
            Category
          </Text>
          <Text
            size="h2"
            variant="primary"
            fontFamily="volkhov"
            className="pt-[2px] md:pt-[10px] font-bold"
          >
            We Offer Best Services
          </Text>
        </div>
      </div>
      <Image src={blink} alt="blink" className="absolute right-0 z-0 w-[100px] h-[120px] md:w-[153px] md:h-[166px]" />
      <div className="flex flex-col items-center justify-center gap-[38px] w-auto h-auto pt-[100px]">
        <Card
          icon={<Image src={service1} alt="" className="mb-[30px]"/>}
          title="Calculated Weather"
          description="Built Wicket longer admire do barton vanity itself do in it."
        />
        <Card
          icon={<Image src={service2} alt="" className="mb-[30px]"/>}
          title="Best Flights"
          description="Engrossed listening. Park gate sell they west hard for the."
        />
        <Card
          icon={<Image src={service3} alt="" className="mb-[30px]"/>}
          title="Local Events"
          description="Barton vanity itself do in it. Preffered to men it engrossed listening."
        />
        <Card
          icon={<Image src={service4} alt="" className="mb-[30px]"/>}
          title="Customization"
          description="We deliver outsourced aviation services for military customers."
        />
      </div>
    </div>
  );
}
