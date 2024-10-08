import Text from "../Common/Text/Text";
import ig from "@/assets/Icons/ig1.png";
import tw from "@/assets/Icons/tw.svg";
import fb from "@/assets/Icons/fb.svg";
import playStore from "@/assets/Icons/Google Play.svg";
import appStore from "@/assets/Icons/Play Store.svg";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="h-auto w-full bg-white px-4 py-8 md:px-[32px] md:py-[48px] lg:px-[30px] lg:py-[64px]">
      <div className="grid grid-cols-1 gap-[50px] md:grid-cols-4">
        <div className="flex flex-col gap-[16px] items-center md:items-start">
          <Text
            size="h3"
            variant="primary"
            className="text-[28px] font-semibold md:text-[44px]"
          >
            Jadoo.
          </Text>
          <Text
            size="p"
            variant="secondary"
            className="text-[13px] leading-[16px] md:text-[14px] text-center md:text-left"
          >
            Book your trip in minute, get full Control for much longer.
          </Text>
        </div>

        <div className="flex flex-col items-center gap-6 text-center md:col-span-2 md:flex-row md:items-start md:justify-between md:text-left">
          <div className="flex flex-col">
            <Text size="h4" variant="default" className="font-bold">
              Company
            </Text>
            <div className="flex flex-col gap-2 pt-4">
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

          <div className="flex flex-col">
            <Text size="h4" variant="default" className="font-bold">
              Contact
            </Text>
            <div className="flex flex-col gap-2 pt-4">
              <Text size="h5" variant="secondary">
                Help/FAQ
              </Text>
              <Text size="h5" variant="secondary">
                Press
              </Text>
              <Text size="h5" variant="secondary">
                Affiliates
              </Text>
            </div>
          </div>

          <div className="flex flex-col">
            <Text size="h4" variant="default" className="font-bold">
              More
            </Text>
            <div className="flex flex-col gap-2 pt-4">
              <Text size="h5" variant="secondary">
                Airline Fees
              </Text>
              <Text size="h5" variant="secondary">
                Airline
              </Text>
              <Text size="h5" variant="secondary">
                Low Fare Tips
              </Text>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <div className="flex justify-center gap-4">
            <Image src={fb} alt="Facebook" />
            <Image src={ig} alt="Instagram" />
            <Image src={tw} alt="Twitter" />
          </div>
          <Text
            size="h4"
            variant="secondary"
            className="pt-6 text-center md:text-left"
          >
            Discover our app
          </Text>
          <div className="flex justify-center gap-3 pt-4">
            <Image src={playStore} alt="Google Play" />
            <Image src={appStore} alt="App Store" />
          </div>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center md:mt-12">
        <Text size="h6" variant="secondary">
          All rights reserved @jadoo.co
        </Text>
      </div>
    </div>
  );
}
