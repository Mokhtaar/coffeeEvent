import React from "react";
import {
  ArrowUpOnSquareIcon,
  PlusSmallIcon,
} from "@heroicons/react/24/outline";
import { MinusSmallIcon } from "@heroicons/react/24/outline";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { HeartIcon } from "@heroicons/react/24/outline";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import { ClockIcon } from "@heroicons/react/24/outline";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { DevicePhoneMobileIcon } from "@heroicons/react/24/outline";




const Content = () => {
  return (
    <div className="mx-auto max-w-6xl py-24">
      <div className="flex-col sm:flex sm:flex-row items-center justify-between gap-x-28 pb-24">
        <div className="space-y-10">
          <div>
            <p>Apr 20</p>
            <h3 className="text-2xl font-semibold tracking-tight text-[#a0600cfb] sm:text-4xl">
              Get to know connecting you to batch roasters program
            </h3>
          </div>
          <p className="text-[12px]">
            Come hear about our batch roasters program and learn some career
            tips from our CTO and co-found.
          </p>

          <div className="w-full rounded-md bg-gray-50 px-6 py-5 shadow-lg sm:flex sm:items-start sm:justify-between">
            <div className="sm:flex sm:items-start">
              <img
                className="h-8 w-8 rounded-full sm:h-10 sm:flex-shrink-0"
                src="./left.png"
              ></img>
              <div className="mt-3 sm:ml-4 sm:mt-0">
                <div className="text-sm font-medium text-gray-900">
                  By Roasters program
                </div>
                <div className="mt-1 text-sm text-gray-600 sm:flex sm:items-center">
                  <div>40 Followers</div>
                </div>
              </div>
            </div>
            <div className="mt-4 sm:ml-6 sm:mt-0 sm:flex-shrink-0">
              <button
                type="button"
                className="inline-flex items-center rounded-md bg-[#9c8164df] px-6 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-[#bba994df]"
              >
                Follow
              </button>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute right-10 flex items-center justify-end gap-x-5">
            <HeartIcon className="h-5 w-5" />
            <ArrowUpOnSquareIcon className="h-5 w-5" />
          </div>
          <div className="m-10 rounded-md border border-gray-300 p-4">
            <div className="flex flex-row justify-between rounded border-2 border-[#b48759df] p-4">
              <div>
                <p className="pr-16">
                  Get to know connecting you to batch roasters program
                </p>
                <div className="mt-3 flex items-center gap-x-3">
                  <p className="text-[14px]">Free</p>
                  <ExclamationCircleIcon className="h-4 w-4 text-gray-500" />
                </div>
              </div>
              <div className="flex gap-x-2">
                <MinusSmallIcon className="h-5 w-5 rounded-sm bg-[#c5b9addf]" />
                <p>1</p>
                <PlusSmallIcon className="h-5 w-5  rounded-sm bg-[#9c8164df]" />
              </div>
            </div>
            <button className="mx-auto mt-2 w-full rounded-md bg-orange-700 p-2 text-white">
              Reserve a spot
            </button>
          </div>
        </div>
      </div>
      <div className="space-y-16 pb-24">
        <div className="space-y-6">
          <h3 className="text-2xl font-normal tracking-tight text-[#a0600cfb] sm:text-4xl">
            When and Where
          </h3>
          <div className="flex-col sm:flex sm:flex-row w-[48rem] justify-between">
            <div className="flex  w-72">
              <div className="mr-4 flex h-9 w-9 items-center justify-center bg-[#ccc7c1df]">
                <CalendarDaysIcon className="h-6 w-6 " />
              </div>
              <div>
                <h4 className="font-semibold">Date and Time</h4>
                <p className=" text-[13px]">
                  wednesday, April 20. 8 - 9:00 PM IDT
                </p>
              </div>
            </div>
            <div className="flex  w-72">
              <div className="mr-4 mt-2 flex h-9 w-9 items-center justify-center bg-[#ccc7c1df]">
                <MapPinIcon className="h-6 w-6 " />
              </div>
              <div>
                <h4 className="font-semibold">Date and Time</h4>
                <p className="mt-1 text-[13px]">
                  Coffee House, USA, Los Angeles, <br /> Los Angeles District
                  000 USA
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <h3 className="text-2xl font-normal tracking-tight text-[#a0600cfb] sm:text-4xl">
            About this event
          </h3>
          <div className="flex-col sm:flex sm:flex-row w-[48rem] justify-between">
            <div className="flex w-72 items-center">
              <div className="mr-4 flex h-9 w-9 items-center justify-center bg-[#ccc7c1df]">
                <ClockIcon className="h-6 w-6 " />
              </div>
              <div>
                <h4 className="font-semibold">1 Hour 30 Minutes</h4>
              </div>
            </div>
            <div className="flex w-72 items-center">
              <div className="mr-4 mt-2 flex h-9 w-9 items-center justify-center bg-[#ccc7c1df]">
                <DevicePhoneMobileIcon className="h-6 w-6 " />
              </div>
              <div>
                <h4 className="font-semibold">Mobile eTicket</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-2 pb-20">
        <div>
          <h1 className="mb-4 text-sm font-semibold  focus:border-blue-500 focus:ring-blue-500 ">
            Agenda
          </h1>
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
      <div className="space-y-2">
        <div className="max-w-xl">
          <h1 className="mb-4 text-sm font-semibold  focus:border-blue-500 focus:ring-blue-500 ">
            Want more information on our open event positions? check out the
            links below!
          </h1>
          <ul className="list-inside space-y-4 list-decimal">
            <li>
              lorem ipsum dolor sit amet consectetuer adipiscing elit sed do
              eiusmod tempor incididunt ut labore consectetuer adipiscing elit
              sed do eiusmod tempor incididunt ut labore
            </li>
            <li>
              lorem ipsum dolor sit amet consectetuer adipiscing elit sed do
              eiusmod tempor incididunt ut labore consectetuer adipiscing elit
              sed do eiusmod tempor incididunt ut labore
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Content;
