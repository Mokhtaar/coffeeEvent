import React from "react";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import { NewspaperIcon } from "@heroicons/react/24/outline";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

const PersonalEvent = () => {
  return (
    <div className="mx-auto max-w-5xl px-5 py-16 sm:px-0">
      <div className="grid grid-cols-1 gap-x-20 sm:grid-cols-2">
        <div className="relative w-80 mx-auto bg-white py-2 shadow-lg sm:h-80">
          <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
            <div className="-ml-4 -mt-4 flex flex-wrap items-center justify-between sm:flex-nowrap">
              <div className="ml-4 mt-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      className="h-11 w-11"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-[15px] font-medium text-gray-900">
                      Tom Cook
                    </h3>
                    <p className="text-[11px] text-gray-500">
                      <a href="#">@tom_cook</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-3 flex items-center justify-between px-4 font-mono text-[15px] text-black sm:px-6">
            <p>Event</p>
            <button className="bg-gray-200 p-1">+ New event</button>
          </div>
          <div className="relative z-10 mx-auto w-64 bg-white shadow-lg my-5 sm:mt-0 sm:absolute sm:-bottom-20 sm:left-[11%]">
            <div className="relative mb-2">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <NewspaperIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
              <input
                id="search"
                name="search"
                className="block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:font-medium focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Name your Event"
                type="search"
              />
            </div>
            <div className="relative mb-2">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <CalendarDaysIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
              <input
                id="search"
                name="search"
                className="block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:font-medium focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Date and Time"
                type="search"
              />
            </div>

            <div className="relative space-y-3 border p-2">
              <div className="flex ">
                <MapPinIcon className="mr-1 h-6 w-6 text-gray-400" />
                <p className=" text-sm text-gray-400 font-medium focus:border-blue-500 focus:ring-blue-500 ">
                  Location of your event
                </p>
              </div>
              <div className="flex justify-center space-x-5 text-sm text-gray-400">
                <button className="rounded-sm border px-3  py-1 hover:bg-gray-100">
                  Venue
                </button>
                <button className="rounded-sm border px-3  py-1 hover:bg-gray-100">
                  Online
                </button>
                <button className="rounded-sm border px-3 py-1 hover:bg-gray-100">
                  To be
                </button>
              </div>
              <input
                id="search"
                name="search"
                className="block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Search for an address"
                type="search"
              />
            </div>
          </div>
        </div>

        <div className="space-y-10 pt-7 sm:pt-0 text-left">
          <h3 className="text-2xl font-semibold tracking-tight text-[#a0600cfb] sm:text-4xl">
            Allow you to create your personal event
          </h3>
          <ul className="ml-3 list-outside list-disc space-y-4">
            <li>
              Create a professional, seamless experience for your attendees at
              every stage of your online or in-person event.
            </li>
            <li>
              Reach new customers, drive demand, and build relationships with
              our powerful, built-in marketing and communication tools.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PersonalEvent;
