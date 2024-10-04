import Text from "../Common/Text/Text";
import email from "@/assets/Icons/email.svg";
import blink from "@/assets/CardImage/blink1.png"
import spiral1 from "@/assets/CardImage/spiral1.png";
import spiral2 from "@/assets/CardImage/spiral2.png";
import bluearrow from "@/assets/Icons/arrowicon.svg";
import Image from "next/image";

export default function Subscribe() {
  return (
    <div className="relative mb-[166px] ml-[-55px] h-[407px] w-[1257px] pr-[60px]">
      <Image
        src={bluearrow}
        alt="blue arrow"
        className="absolute right-[50px] top-[-15px] z-20"
      />
      <div className="flex h-full w-[1170px] flex-col items-center rounded-bl-[20px] rounded-br-[20px] rounded-tl-[129px] rounded-tr-[20px] bg-[#f9f7fe]">
        <Image
          src={spiral1}
          alt=""
          className="absolute right-[90px] top-[2px] z-10 opacity-10"
        />
        <Image
          src={spiral2}
          alt=""
          className="absolute left-[-70px] top-[45px] z-10"
        />
        <div className="h-[108px] w-[881px] pt-[79px]">
          <Text size="h3" variant="secondary" className="text-center font-bold">
            Subscribe to get information, latest news and other interesting
            offers about Jadoo
          </Text>
        </div>

        <div className="z-[20] mt-[150px] flex items-center">
          <div className="flex h-[68px] w-[421px] items-center rounded-[10px] border border-gray-200 bg-white px-4 py-2 shadow-sm">
            <Image src={email} alt="email icon" width={24} height={24} />

            <input
              className="ml-2 h-full w-full bg-transparent font-poppins text-[#39425D] focus:outline-none"
              placeholder="Your email"
              type="email"
            />
          </div>

          <button className="ml-[24px] h-[68px] w-[180px] rounded-lg bg-gradient-to-r from-[#FF946D] to-[#FF7D68] px-6 py-2 text-white">
            <Text size="h6" className="text-white">
              Subscribe
            </Text>
          </button>
        </div>
      </div>
      <Image src={blink} alt="blink" className="absolute right-[-20px] top-[310px] z-0"/>
    </div>
  );
}
