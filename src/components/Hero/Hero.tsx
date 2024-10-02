"use client";
import Navbar from "../Common/Navbar/Navbar";
import Image from "next/image";
import decore from "@/assets/Hero/Decore1.png";
import textDecore from "@/assets/Hero/Decore.png";
import imageContent from "@/assets/Hero/Traveller1.png";
import plane from "@/assets/Hero/Plane.png";
import Text from "../Common/Text/Text";
import { Plane } from "./Plane";

export default function Hero() {
  return (
    <div className="w-full h-auto ">
      <Navbar />
      <div className="w-[1200px] h-[764px] flex pt-[130px] realtive">
        <Image
          src={decore}
          alt="decore"
          className="absolute top-0 right-0 z-10"
        />
        <Image
          src={textDecore}
          alt="textDecore"
          className="absolute z-10 top-[335px] left-[420px]"
          width={385}
          height={12}
        />
        <div className="w-[630px] h-[535px] z-10">
          <Text
            size="h4"
            className=" uppercase text-[#DF6951] pb-[24px] font-bold"
          >
            Best Destinations around the world
          </Text>
          <Text
            size="h1"
            variant="primary"
            fontFamily="volkhov"
            className="tracking-[-4px] pb-[30px]"
          >
            Travel, enjoy and live a new and full life
          </Text>
          <Text size="p" variant="secondary" className="w-[477px] h-[90px]">
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </Text>
        </div>
        <div>
          <Image
            src={imageContent}
            alt="imageContent"
            className="z-30 absolute right-[140px] top-[120px]"
            width={765}
          />
          <Plane className="z-20 absolute top-[170px] right-[590px]">
            <Image
              src={plane}
              alt="plane"
              
            />
          </Plane>
          <Plane className="z-20 absolute top-[220px] right-[130px]">
            <Image
              src={plane}
              alt="plane"
              
            />
          </Plane>
        </div>
      </div>
    </div>
  );
}
