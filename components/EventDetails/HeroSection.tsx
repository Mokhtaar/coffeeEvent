"use client";
import Image from "next/image";
import Hero from '../../public/Eventdetailhero.png'

export default function HeroSection() {
  return (
    <div className="relative z-40 h-full w-full">
      <Image
        alt="Coffee"
        src={Hero}
        className="h-full w-full object-cover"
      />
      <p className="absolute bottom-0  p-4 text-white backdrop-blur-[3px] left-[21.8%] w-[56.3%] blur-[4px] brightness-[-24] lg:h-[104px] bg-black bg-opacity-[0.27] lg:text-[25px] text-[4vw] flex items-center">
        April 20th | 19:00 | USA, LA
      </p>
    </div>
  );
}
