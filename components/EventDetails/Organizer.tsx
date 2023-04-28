import React from "react";
import { GlobeAltIcon } from "@heroicons/react/24/outline";

const Organizer = () => {
  return (
    <div className="space-y-7 pt-20">
      <div className="max-w-2xl text-left text-[#a0600cfb]">
        <h3 className="text-2xl font-semibold tracking-tight sm:text-2xl">
          About the organizer
        </h3>
      </div>
      <div className="w-full max-w-sm rounded-lg border border-gray-200 bg-white shadow-xl">
        <div className="flex flex-col items-center py-10">
          <img
            className="mb-3 h-24 w-24 rounded-full"
            src="https://plus.unsplash.com/premium_photo-1671379528106-fd5bd9e1087d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt="image"
          />
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Organized By
          </span>
          <h1 className="mb-4 text-sm font-semibold  focus:border-blue-500 focus:ring-blue-500 ">
            Roasters Program
          </h1>
          <p className="text-[10px] font-bold">40</p>
          <p className="text-[12px]">Followers</p>

          <div className="mt-4 flex space-x-12 md:mt-6">
            <button
              type="button"
              className="inline-flex items-center rounded-md  px-6 py-2 text-sm font-semibold text-[#9c8164df] shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-[#bba994df]"
            >
              Contact
            </button>
            <button
              type="button"
              className="inline-flex items-center rounded-md bg-[#9c8164df] px-6 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-[#bba994df]"
            >
              Follow
            </button>
          </div>
          <p className="mt-4 max-w-xs px-2 text-center text-[10px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy text
            ever since the 1500s
          </p>
          <a href="#" className="mt-2 text-[10px]">
            View more
          </a>
          <GlobeAltIcon className="mt-5 h-3 w-3 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Organizer;
