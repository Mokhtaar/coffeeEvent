import React from "react";
import { GlobeAltIcon } from "@heroicons/react/24/outline";

const Organizer = () => {
  return (
    <div className="space-y-7 pt-20">
      <div className="max-w-2xl text-left text-[#613907]">
        <h3 className="md:text-[50px] text-[30px] font-Body font-medium leading-[80px]">
          About the organizer
        </h3>
      </div>
      <div className="w-full max-w-2xl rounded-lg border border-gray-200 bg-white shadow-xl">
        <div className="flex flex-col items-center py-10">
          <img
            className="mb-3 h-24 w-24 rounded-full"
            src="https://plus.unsplash.com/premium_photo-1671379528106-fd5bd9e1087d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt="image"
          />
          <span className="text-[25px] text-[#707070] font-Body">
            Organized By
          </span>
          <h1 className="mt-2 text-[28px] text-[#613907] font-WorkSans font-bold">
          Roasters Program
          </h1>
          <p className="text-[21px] font-semibold text-[#613907] font-Body">40</p>
          <p className="text-[20px] font-WorkSans text-[#A1825F] font-semibold">Followers</p>

          <div className="mt-4 flex space-x-12 md:mt-6">
            <button
              type="button"
              className="inline-flex items-center rounded  px-6 py-2 text-sm font-semibold text-[#9c8164df] shadow-sm ring-1 ring-inset ring-[#707070] hover:bg-[#bba994df]"
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
          <p className="mt-4 px-2 text-center font-light text-[18px] font-Body">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam Voluptua. At Vero Eos Et Accusam Et Justo Duo Dolores
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
