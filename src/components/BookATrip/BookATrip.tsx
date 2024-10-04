import icon1 from "@/assets/Icons/icon1.svg";
import icon2 from "@/assets/Icons/icon2.svg";
import icon3 from "@/assets/Icons/icon3.svg";
import img from "@/assets/CardImage/img.png";
import Image from "next/image";
import Text from "../Common/Text/Text";

export default function BookATrip() {
  return (
    <div className="flex w-[1114px] h-[492px]">
      <div className="w-[640px] h-[492px]">
        <Text size="p" variant="secondary" className="font-semibold">
          Easy and Fast
        </Text>
        <Text size="h2" variant="primary" fontFamily="volkhov" className="font-bold capitalize">
          Book your next trip in 3 easy steps
        </Text>
        <div className="w-[395px] h-[289px] pt-[37px] flex flex-col gap-[48px]">
          <div className="w-full h-[64px] flex gap-[21px]">
            <Image src={icon1} alt="icon1" />
            <div className="w-full h-auto">
              <Text
                size="p"
                variant="secondary"
                className="font-bold text-[16px]"
              >
                Choose Destination
              </Text>
              <Text
                size="p"
                variant="secondary"
                className="text-[16px] leading-[19px]"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.
              </Text>
            </div>
          </div>
          <div className="w-full h-[64px] flex gap-[21px]">
            <Image src={icon2} alt="icon1" />
            <div className="w-full h-auto">
              <Text
                size="p"
                variant="secondary"
                className="font-bold text-[16px]"
              >
                Make Payment
              </Text>
              <Text
                size="p"
                variant="secondary"
                className="text-[16px] leading-[19px]"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.
              </Text>
            </div>
          </div>
          <div className="w-full h-[64px] flex gap-[21px]">
            <Image src={icon3} alt="icon1" />
            <div className="w-full h-auto">
              <Text
                size="p"
                variant="secondary"
                className="font-bold text-[16px]"
              >
                Reach Airport on Selected Date
              </Text>
              <Text
                size="p"
                variant="secondary"
                className="text-[16px] leading-[19px]"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.
              </Text>
            </div>
          </div>
        </div>
      </div>
      <div className="items-center flex">
      <Image src={img} alt="img" className="ml-[118px]"/>
      </div>
    </div>
  );
}
