import Image, { StaticImageData } from "next/image";
import arrow from "@/assets/Icons/Navigation.svg";
import Text from "../Text/Text";

interface CardDestinationProps {
  destination: string;
  price: string;
  duration: string;
  imageSrc: StaticImageData | string;
}

export default function CardDestination({
  destination,
  price,
  duration,
  imageSrc,
}: CardDestinationProps) {
  return (
    <div className=" bg-white rounded-[24px] shadow-xl overflow-hidden hover:scale-95 transition-transform duration-300 ease-in-out">
      <div className="relative w-[315px] h-[317px] ">
        <Image
          src={imageSrc}
          alt={destination}
          objectFit="cover"
          layout="fill"
        />
      </div>

      <div className="pt-[27px] px-[25px] pb-[42px]">
        <div className="flex gap-[103px]">
          <Text size="h6" variant="secondary" className="font-medium">
            {destination}
          </Text>
          <Text size="p" variant="secondary" className="font-medium">{price}</Text>
        </div>
        <div className="flex items-center mt-[10px] gap-[14px]">
          <Image src={arrow} alt="arrow" />
          <Text size="p" variant="secondary">{duration}</Text>
        </div>
      </div>
    </div>
  );
}
