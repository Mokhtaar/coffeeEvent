import React from "react";
import {
  ExclamationCircleIcon,
  CalendarDaysIcon,
  ClockIcon,
  MapPinIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/outline";
import HeartIcon from "../../public/hearticon.svg";
import Uploadeicon from "../../public/uploadeicon.svg";
import OtherEvents from "./OtherEvents";
import Organizer from "./Organizer";
import Image from "next/image";
import { FiPlus } from "react-icons/fi";
import { FaAngleDown } from "react-icons/fa";

const links = {
  social: [
    {
      name: "Instagram",
      href: "#",
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: "#",
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "YouTube",
      href: "#",
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: "#",
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
  ],
};

const Content = () => {
  return (
    <div className="mx-auto px-2 py-10 sm:px-4 lg:px-[160px]">
      <p className="text-lg">Apr 20</p>
      <div className="grid 2xl:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-5
       pb-24  gap-y-7">
        <div className="space-y-10 col-span-2 max-w-[928px]">
          <div className="font-Body text-[#613907]">
            <h3 className="mt-3 font-WorkSans text-2xl font-extrabold capitalize text-[#613907] sm:text-5xl">
              Get to know connecting you to batch roasters program
            </h3>
          </div>
          <p className="mt-[55px] font-Body text-[18px] text-[#613907] xl:whitespace-nowrap">
            Come hear about our batch roasters program and learn some career
            tips from our CTO and co-found.
          </p>

          <div className="min-h-[150px] w-full items-center rounded-md bg-white md:pl-[52px] md:pr-[39px] p-4 shadow-lg sm:flex sm:justify-between">
            <div className="sm:flex sm:items-center">
              <img
                className="h-8 w-8 rounded-full object-cover sm:h-[95px] sm:w-[95px] sm:flex-shrink-0"
                src="./hero2.png"
              ></img>
              <div className="mt-3 sm:ml-[32px] sm:mt-0">
                <div className="text-[25px] font-bold text-[#613907]">
                  <span className="font-Inter font-bold text-[#A1825F]">
                    By{" "}
                  </span>
                  Roasters program
                </div>
                <div className="mt-1 font-Body text-[18px] font-bold text-[#A1825F] sm:flex sm:items-center">
                  <div>40 followers</div>
                </div>
              </div>
            </div>
            <div className="mt-4 sm:ml-6 sm:mt-0 sm:flex-shrink-0  w-fit">
              <button
                type="button"
                className="flex h-[68px] w-[167px] items-center justify-center rounded-[3px] bg-[#9c8164df] font-Inter text-[20px] font-bold text-white ring-0 drop-shadow-box"
              >
                Follow
              </button>
            </div>
          </div>
        </div>
        <div className="2xl:col-span-1 md:col-span-2">
          <div className="flex items-center justify-end gap-x-[56px] md:mr-0 mr-3">
            <Image src={HeartIcon} alt="HeartIcon" />
            <Image src={Uploadeicon} alt="uploadeicon" />
          </div>
          <div className="mt-[55px] rounded-xl border border-gray-300 p-[30px]">
            <div className="flex flex-row justify-between rounded-xl border-2 border-[#b48759df] p-[30px] pb-[18px] xl:flex-nowrap flex-wrap">
              <div>
                <p className="2xl:pr-[67px] font-WorkSans text-[20px] font-medium text-[#613907]">
                  Get to know connecting you to batch roasters program
                </p>
                <div className="mt-5 flex items-center gap-x-3">
                  <p className=" font-WorkSans text-[20px] font-medium text-[#613907]">
                    Free
                  </p>
                  <ExclamationCircleIcon className="h-[18px] w-[18px] text-[#613907]" />
                </div>
              </div>
              <div className="flex h-fit gap-x-2">
                <button className="flex h-[39px] w-[39px] items-center justify-center rounded-md bg-[#EFE3D5]">
                  <span className="block h-[3px] w-[15px] rounded-full bg-[#D8C1A8]"></span>
                </button>
                <p className="font-Body text-[25px] font-semibold text-[#613907]">
                  1
                </p>
                <button className="flex h-[39px] w-[39px] items-center justify-center rounded-md bg-[#A1825F] text-[#EFE3D5]">
                  <FiPlus className="h-[25px] w-[25px]" />
                </button>
              </div>
            </div>
            <button className="mx-auto mt-[20px] w-full rounded-md bg-[#D1410C] py-[15px] font-Inter text-[20px] font-bold text-white">
              Reserve a spot
            </button>
          </div>
        </div>
      </div>





      <div className="pb-24">
        <div className="space-y-6">
          <div className="max-w-2xl text-left">
            <h3 className="font-Body text-2xl font-semibold tracking-tight text-[#62390b] sm:text-[50px]">
              When and Where
            </h3>
          </div>
          <div className="mt-[34px] flex-col justify-between sm:flex sm:flex-row lg:w-[893px]">
            <div className="flex  w-72">
              <div className="mr-4 flex max-h-[65px] min-w-[65px] items-center justify-center rounded-md bg-[#e9e1d9]">
                <Image
                  src="./calendar.svg"
                  alt="calender"
                  width={27}
                  height={30}
                />
              </div>
              <div>
                <h4 className="font-Inter text-[20px] font-bold">
                  Date and Time
                </h4>
                <p className="lg:whitespace-nowrap text-[15px] text-[#A1825F]">
                  wednesday, April 20. 8 - 9:00 PM IDT
                </p>
              </div>
            </div>
            <div className="flex  w-72 md:mt-0 mt-5">
              <div className="mr-4 flex max-h-[65px] min-w-[65px] items-center justify-center rounded-md bg-[#e9e1d9]">
                <Image
                  src="./calendar.svg"
                  alt="calender"
                  width={27}
                  height={30}
                />
              </div>
              <div>
                <h4 className="font-Inter text-[20px] font-bold">
                  Date And Time
                </h4>
                <p className="lg:whitespace-nowrap font-Inter text-[15px] text-[#A1825F]">
                  Coffee House USA, Los Angeles,
                  <br />
                  Los Angeles District 000 USA
                </p>
                <p className=" mt-5 flex items-center gap-[14px] whitespace-nowrap font-Inter text-[15px] font-bold text-[#613907]">
                  Show Map <FaAngleDown />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[118px]">
          <div className="max-w-2xl text-left text-[#a0600cfb]">
            <h3 className="font-Body text-2xl font-semibold tracking-tight text-[#62390b] sm:text-[50px]">
              About this event
            </h3>
          </div>
          <div className="mt-[32px] flex-col justify-between sm:flex sm:flex-row lg:w-[48rem]">
            <div className="flex  w-72 items-center">
              <div className="mr-4 flex min-h-[65px] min-w-[65px] items-center justify-center rounded-md bg-[#e9e1d9]">
                {/* <Image src='./calendar.svg' alt='calender' width={27} height={30} /> */}
                <ClockIcon className="w-[30px]" />
              </div>
              <h4 className="font-Inter text-[20px] font-bold text-[#613907]">
                {" "}
                1 Hour 30 Minutes
              </h4>
            </div>
            <div className="flex  w-72 items-center md:mt-0 mt-5">
              <div className="mr-4 flex min-h-[65px] min-w-[65px] items-center justify-center rounded-md bg-[#e9e1d9]">
                <Image
                  src="./Mobile.svg"
                  alt="calender"
                  width={27}
                  height={30}
                />
              </div>
              <h4 className="font-Inter text-[20px] font-bold text-[#613907]">
                Mobile eTicket
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 pb-20">
        <div>
          <h1 className="font-WorkSans text-[30px] font-bold text-[#613907] ">
            Agenda:
          </h1>
          <div className="mt-[33px] lg:text-[30px] font-normal font-Body text-[#613907] flex flex-col gap-5">
            <div>
              <p>18:00 - 18:15 : Networking, Food and Drinks</p>
              <p>lorem ipsum dolor sit amet consectetuer adipiscing elit</p>
            </div>
            <div>
              <p>18:00 - 18:15 : Networking, Food and Drinks</p>
              <p>lorem ipsum dolor sit amet consectetuer adipiscing elit</p>
            </div>
            <div>
              <p>18:00 - 18:15 : Networking, Food and Drinks</p>
              <p>lorem ipsum dolor sit amet consectetuer adipiscing elit</p>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-5 pb-20">
        <div>
          <h1 className="mb-4 text-[20px] font-Body leading-[37px] font-bold">
            Want more information on our open event positions? check out the
            links below!
          </h1>
          <ul className="font-normal font-Body md:text-[25px] text-[#613907] capitalize lg:w-[840px] flex flex-col gap-[43px]">
            <li>1. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            </li>
            <li>2. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            </li>
          </ul>
        </div>
      </div>
      <div className="space-y-7">
        <div className="max-w-2xl text-left">
          <h3 className="font-medium md:text-[50px] text-[30px] text-[#613907] font-Body">
            Share with friends
          </h3>
        </div>
        <div className="w- flex w-[20rem] justify-center gap-[52px]">
          {links.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className=" hover:text-gray-400"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
      <Organizer />
      <OtherEvents />
    </div>
  );
};

export default Content;
