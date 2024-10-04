import Image from "next/image";
import Text from "../Common/Text/Text";
import blink from "@/assets/CardImage/blink.png";
import Card from "../Common/Card/Card";
import service1 from "@/assets/Icons/service1.svg";
import service2 from "@/assets/Icons/service2.svg";
import service3 from "@/assets/Icons/service3.svg";
import service4 from "@/assets/Icons/service4.svg";

export default function Service() {
  return (
    <div className="w-[1228px] h-[525px] pt-[197px] flex flex-col relative">
      <div className="flex pl-[300px]">
        <div className="w-[547px] h-[65px] text-center">
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
            className="pt-[10px] font-bold"
          >
            We Offer Best Services
          </Text>
        </div>
      </div>
      <Image src={blink} alt="blink" className="absolute right-0" />
      <div className="flex justify-center gap-[38px] w-auto h-auto pt-[100px]">
        <Card
          icon={<Image src={service1} alt="" className="mb-[30px]"/>}
          title="Calculated Weather"
          description="Built Wicket longer admire do barton vanity itself do in it."
        />
        <Card
          icon={<Image src={service2} alt="" className=""/>}
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
