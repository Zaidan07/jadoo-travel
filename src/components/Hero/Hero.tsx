"use client";
import Navbar from "../Common/Navbar/Navbar";
import Image from "next/image";
import decore from "@/assets/Hero/Decore1.png";
import textDecore from "@/assets/Hero/Decore.png";
import imageContent from "@/assets/Hero/Traveller1.png";
import plane from "@/assets/Hero/Plane.png";
import play from "@/assets/Icons/play.svg";
import Text from "../Common/Text/Text";
import { ButtonPress, Plane } from "./Hero.styled";

export default function Hero() {
  return (
    <div className="relative h-auto w-full">
      <Navbar />
      <Image
        src={decore}
        alt="decore"
        className="absolute right-[-29px] top-0 z-10 md:right-[-179px]"
      />

      <div className="relative mx-auto flex h-[764px] w-full max-w-[1200px] flex-col pt-[70px] md:pt-[130px] md:flex">
        <Image
          src={textDecore}
          alt="textDecore"
          className="absolute left-[130px] top-[140px] z-10 h-[6px] w-[185px] md:h-[12px] md:w-[385px] md:left-[240px] md:top-[250px]"
        />
        <div className="z-10 h-[228px] w-[331px] md:h-[535px] md:w-[630px]">
          <Text
            size="h4"
            className="pb-[5px] font-bold uppercase text-[#DF6951] md:pb-[24px]"
          >
            Best Destinations around the world
          </Text>
          <Text
            size="h1"
            variant="primary"
            fontFamily="volkhov"
            className="pb-[8px] tracking-[-1px] md:pb-[30px] md:tracking-[-4px]"
          >
            Travel, enjoy and live a new and full life
          </Text>
          <Text
            size="p"
            variant="secondary"
            className="h-auto w-[300px] md:h-[90px] md:w-[477px]"
          >
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </Text>
          <div>
            <Image
              src={imageContent}
              alt="imageContent"
              className="absolute left-[10px] top-[510px] md:left-[420px] md:top-[20px] z-30"
              width={780}
            />
            <Plane className="absolute top-[530px] left-[50px] md:left-[500px] md:top-[100px] z-20">
              <Image src={plane} alt="plane" className="w-[100px] h-[65px] md:w-[167px] md:h-[154px]"/>
            </Plane>
            <Plane className="absolute top-[570px] left-[150px] md:left-[980px] md:top-[150px] z-20">
              <Image src={plane} alt="plane" className="w-[100px] h-[65px] md:w-[167px] md:h-[154px]" />
            </Plane>
          </div>
          <div className="mt-[34px] flex items-center gap-[20px] md:gap-[44px]">
            <ButtonPress className="rounded-[10px] bg-[#F1A501] shadow-xl shadow-orange-100">
              <Text size="h5" className="px-[8px] py-[7px] md:px-[26px] md:py-[20px] text-white">
                Find out more
              </Text>
            </ButtonPress>
            <div className="flex items-center">
              <ButtonPress className="rounded-full border-none bg-[#DF6951] shadow-xl shadow-red-200">
                <Image src={play} alt="play" className="mx-[10px] my-[10px] md:mx-[20px] md:my-[20px]" />
              </ButtonPress>
              <Text size="h6" variant="secondary" className="ml-[10px] md:ml-[20px]">
                Play Demo
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
