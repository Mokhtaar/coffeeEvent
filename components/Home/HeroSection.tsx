"use client";
import Link from "next/link";
import Hero from "../../public/hero.png";
import Image from "next/image";
import Herouser from "../../public/herouse.png";

export default function HeroSection() {
  return (
    <div className="">
      <div className="relative isolate">
          <Image
            src={Hero}
            alt="Hero"
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          />
          <Image
            src={Herouser}
            alt="herouser"
            className="absolute lg:-top-[2.75rem] -top-[1.8rem] right-0 ml-auto h-full 3xl:w-[71%] object-cover -z-10"
          />
        <img
          src="./cup.png"
          alt=""
          className="z-1 absolute bottom-[-100px] right-0 h-[240px] sm:h-[400px] lg:-bottom-56 lg:right-20 lg:h-[580px]"
        />
        <div className="ml-[14px] max-w-2xl py-32 sm:ml-[24px] sm:py-48 lg:ml-20 lg:py-56">
          <div className="text-left">
            <h1 className="font-Heading text-[30px] font-bold text-white sm:text-[40px] lg:space-y-8 lg:text-[103px]">
              <p>TIME TO </p>
              <p> DISCOVER</p>
              <p>COFFEE PLACE</p>
            </h1>
            <p className="mt-6 font-Body text-[25px] font-medium text-gray-300">
              What We Call The 3 C&apos;s <br /> Coffee - Community -
              Convenience
            </p>
            <div className="mt-10">
              <a
                href="#"
                className="rounded-full bg-[#9c8164df] px-4 py-4 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
              >
                Find your next event
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
