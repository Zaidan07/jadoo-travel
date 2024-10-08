// components/Testimonial.tsx
"use client";
import { useState } from "react";
import Text from "../Common/Text/Text";
import FadeDiv from "./Testimonial.styled";
import avatar1 from "@/assets/Company/avatar1.svg";
import avatar2 from "@/assets/Company/avatar2.svg";
import up from "@/assets/Icons/up.svg";
import down from "@/assets/Icons/down.svg";
import Image from "next/image";

interface Testimonial {
  avatar: string;
  text: string;
  name: string;
  location: string;
}

const testimonials: Testimonial[] = [
  {
    avatar: avatar1,
    text: "“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”",
    name: "Mike Taylor",
    location: "Lahore, Pakistan",
  },
  {
    avatar: avatar2,
    text: "“Another testimonial text that is inspirational and uplifting...”",
    name: "Sarah Williams",
    location: "New York, USA",
  },
];

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const handleNext = () => {
    setIsVisible(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      setIsVisible(true);
    }, 500);
  };

  const handlePrev = () => {
    setIsVisible(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1,
      );
      setIsVisible(true);
    }, 500);
  };

  return (
    <div className="mx-auto mb-[112px] mt-[100px] md:mt-[300px] flex flex-col md:flex-row h-auto w-full md:w-[1165px]">
      <div className="flex h-auto w-full md:w-[409px] flex-col pt-[8px]">
        <Text size="h6" variant="secondary" className="font-semibold uppercase">
          Testimonials
        </Text>
        <Text
          size="h2"
          variant="primary"
          className="font-bold capitalize leading-[30px]"
          fontFamily="volkhov"
        >
          What people say about Us.
        </Text>
      </div>

      <div className="relative md:ml-[150px] mt-[60px] md:mt-[32px] w-full md:h-[245px] md:w-[504px] rounded-lg bg-white p-6 shadow-xl">
        <div className="absolute top-[25px] left-[10px] md:-top-[30px] md:left-[-20px]">
          <Image
            src={testimonials[currentIndex].avatar}
            alt="Avatar"
            className="w-[40px] h-[40px] md:h-[64px] md:w-[64px] rounded-full border-4 border-none"
          />
        </div>

        <FadeDiv isVisible={isVisible}>
          <Text
            size="p"
            variant="secondary"
            className="px-[34px] ;eading-[20px] md:leading-[32px]"
          >
            {testimonials[currentIndex].text}
          </Text>
          <div className="pl-[34px]">
            <Text size="h5" variant="secondary" className="mt-4 font-bold">
              {testimonials[currentIndex].name}
            </Text>
            <Text size="p" variant="secondary" className="text-[14px]">
              {testimonials[currentIndex].location}
            </Text>
          </div>
        </FadeDiv>
      </div>
      <div className="mt-[80px] flex flex-col gap-[57px] pl-[66px] md:rotate-0 rotate-90">
        <button
          onClick={handlePrev}
          className="text-gray-500 transition-colors hover:text-gray-900"
        >
          <Image
            src={up}
            alt="up arrow"
            className="ml-2"
            width={24}
            height={24}
          />
        </button>
        <button
          onClick={handleNext}
          className="text-gray-500 transition-colors hover:text-gray-900"
        >
          <Image
            src={down}
            alt="down arrow"
            className="ml-2"
            width={24}
            height={24}
          />
        </button>
      </div>
    </div>
  );
}
