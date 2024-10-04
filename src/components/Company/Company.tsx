"use client";
import alitalia from '@/assets/Company/alitalia.svg';
import axon from '@/assets/Company/axon.svg';
import expedia from '@/assets/Company/expedia.svg';
import jetstar from '@/assets/Company/jetstar.svg';
import qantas from '@/assets/Company/qantas.svg';
import Image from 'next/image';

export default function Company() {
  const logos = [
    { src: alitalia, alt: 'Alitalia' },
    { src: axon, alt: 'Axon Airlines' },
    { src: expedia, alt: 'Expedia' },
    { src: qantas, alt: 'Qantas' },
    { src: jetstar, alt: 'Jetstar' },
  ];

  return (
    <div className="flex justify-around items-center py-[32px] mb-[111px]">
      {logos.map((logo, index) => (
        <div
          key={index}
          className="bg-white rounded-lg p-4 transition-transform transform hover:-translate-y-2 hover:shadow-lg"
        >
          <div className="transition-all filter grayscale hover:grayscale-0">
            <Image src={logo.src} alt={logo.alt} className="w-[162px] h-[32px] object-contain" />
          </div>
        </div>
      ))}
    </div>
  );
};
