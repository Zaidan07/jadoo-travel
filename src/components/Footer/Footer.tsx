import Text from "../Common/Text/Text";
import ig from "@/assets/Icons/ig1.png";
import tw from "@/assets/Icons/tw.svg";
import fb from "@/assets/Icons/fb.svg";
import playStore from "@/assets/Icons/Google Play.svg";
import appStore from "@/assets/Icons/Play Store.svg";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="w-[1060px] h-[275px]">
      <div className=" grid grid-cols-4">
        <div className="w-[207px] h-[133px] flex flex-col gap-[19px]  ">
          <Text
            size="h3"
            variant="primary"
            className="font-semibold text-[44px]"
          >
            Jadoo.
          </Text>
          <Text
            size="p"
            variant="secondary"
            className="text-[13px] leading-[16px]"
          >
            Book your trip in minute, get full Control for much longer.
          </Text>
        </div>
        <div className="w-[474px] h-[153px] flex gap-[72px] col-span-2 items-center justify-center ml-[38px]">
          <div className="w-[108px] h-[151px] pt-[15px] flex flex-col">
            <Text size="h4" variant="default" className="font-bold">
              Company
            </Text>
            <div className="pt-[34px] flex flex-col gap-[12px]">
              <Text size="h5" variant="secondary">
                About
              </Text>
              <Text size="h5" variant="secondary">
                Careers
              </Text>
              <Text size="h5" variant="secondary">
                Mobile
              </Text>
            </div>
          </div>
          <div className="w-[108px] h-[151px] pt-[15px] flex flex-col">
            <Text size="h4" variant="default" className="font-bold">
              Contact
            </Text>
            <div className="pt-[34px] flex flex-col gap-[12px]">
              <Text size="h5" variant="secondary">
                Help/FAQ
              </Text>
              <Text size="h5" variant="secondary">
                Press
              </Text>
              <Text size="h5" variant="secondary">
                Affilates
              </Text>
            </div>
          </div>
          <div className="w-[114pxpx] h-[151px] pt-[15px] flex flex-col">
            <Text size="h4" variant="default" className="font-bold">
              More
            </Text>
            <div className="pt-[34px] flex flex-col gap-[12px]">
              <Text size="h5" variant="secondary">
                Airlinefees
              </Text>
              <Text size="h5" variant="secondary">
                Airline
              </Text>
              <Text size="h5" variant="secondary">
                Low fare tips
              </Text>
            </div>
          </div>
        </div>
        <div className="w-[214px] h-[147px] flex flex-col ml-[30px]">
          <div className="flex gap-[25px]">
            <Image src={fb} alt="fb" />
            <Image src={ig} alt="ig" />
            <Image src={tw} alt="tw" />
          </div>
          <Text size="h4" variant="secondary" className="pt-[26px]">
            Discover our app
          </Text>
          <div className="flex gap-[7px] pt-[16px]">
            <Image src={playStore} alt="playStore" />
            <Image src={appStore} alt="appStore" />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-[84px] pb-[79px]">
        <Text size="h6" variant="secondary">All rights reserved@jadoo.co</Text>
      </div>
    </div>
  );
}
