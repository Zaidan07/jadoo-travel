import Text from "../Common/Text/Text";
import email from "@/assets/Icons/email.svg";
import blink from "@/assets/CardImage/blink1.png";
import spiral1 from "@/assets/CardImage/spiral1.png";
import spiral2 from "@/assets/CardImage/spiral2.png";
import bluearrow from "@/assets/Icons/arrowicon.svg";
import Image from "next/image";

export default function Subscribe() {
  return (
    <div className="relative mb-[50px] sm:mb-[80px] md:mb-[120px] lg:mb-[166px] mx-auto w-full h-auto px-4 md:px-0 flex items-center justify-center">
      <Image
        src={bluearrow}
        alt="blue arrow"
        className="absolute right-[20px] md:right-[0px] top-[-20px] z-20 w-[50px] h-[50px] md:w-[70px] md:h-[70px]"
      />
      <div className="relative flex w-full max-w-[1170px] flex-col items-center rounded-bl-[20px] rounded-br-[20px] rounded-tl-[50px] md:rounded-tl-[129px] rounded-tr-[20px] bg-[#f9f7fe] px-4 py-6 md:px-0 md:py-8 z-10">
        <Image
          src={spiral1}
          alt=""
          className="absolute right-[30px] md:right-[3px] top-[2px] z-10 opacity-0 md:opacity-10"
        />
        <Image
          src={spiral2}
          alt=""
          className="absolute left-[-30px] md:left-[-70px] top-[60px] z-10 opacity-0 md:opacity-100"
        />
        <div className="w-full max-w-[881px] text-center pt-4 md:pt-[79px]">
          <Text size="h3" variant="secondary" className="md:font-bold leading-[20px]">
            Subscribe to get information, latest news and other interesting
            offers about Jadoo
          </Text>
        </div>

        <div className="relative z-20 mt-[24px] md:mt-[100px] flex flex-col md:flex-row items-center w-full max-w-[500px] md:max-w-none space-y-4 md:space-y-0 justify-center">
          <div className="flex h-[55px] md:h-[68px] w-full max-w-[300px] md:max-w-[421px] items-center rounded-[10px] border border-gray-200 bg-white px-4 shadow-sm">
            <Image src={email} alt="email icon" width={24} height={24} />

            <input
              className="ml-2 h-full w-full bg-transparent font-poppins text-[#39425D] focus:outline-none"
              placeholder="Your email"
              type="email"
            />
          </div>

          <button className="md:ml-[24px] h-[55px] md:h-[68px] w-full md:w-[180px] rounded-lg bg-gradient-to-r from-[#FF946D] to-[#FF7D68] px-6 py-2 text-white">
            <Text size="h6" className="text-white">
              Subscribe
            </Text>
          </button>
        </div>
      </div>
      <Image
        src={blink}
        alt="blink"
        className="absolute right-[-10px] md:right-[-90px] top-[230px] md:top-[310px] z-0 w-[80px] h-[80px] md:w-[153px] md:h-[166px]"
      />
    </div>
  );
}
