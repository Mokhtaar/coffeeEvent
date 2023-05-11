import React from "react";

const TopCategory = () => {
  return (
    <div className="lg:mt-[80px] pt-20">
      <h3 className="mb-[80px] text-center font-Body text-2xl font-semibold tracking-tight text-[#613907] sm:text-[60px]">
        Top Category
      </h3>
      <div className="grid-col-1 mx-auto grid w-4/6 place-items-center gap-6 sm:grid-cols-3 ">
        <div className="relative">
          <img className="w-full" src="./habits.png"></img>
          <p className="absolute bottom-0 w-full p-4 text-center text-white backdrop-blur-[2px]">
            Morning habits
          </p>
        </div>
        <div className="relative">
          <img className="w-full" src="./coffee.png"></img>
          <p className="absolute bottom-0 w-full p-4 text-center text-white backdrop-blur-[2px]">
            Traditional coffee
          </p>
        </div>
        <div className="relative">
          <img className="w-full" src="./decoctions.png"></img>
          <p className="absolute bottom-0 w-full p-4 text-center text-white backdrop-blur-[2px]">
            Coffee decoctions
          </p>
        </div>
      </div>
      <div className="mx-auto mt-[84px] grid place-items-center gap-3  px-[14px] sm:grid-cols-2 sm:grid-rows-2 md:grid-cols-4">
        <div className="relative h-full categoryoverllay">
          <img className="h-full" src="./Category1.png"></img>
        </div>
        <div className="md:col-span-2 md:row-span-2 relative h-full categoryoverllay">
          <img className="h-full" src="./Category3.png"></img>
        </div>
        <div className="relative h-full categoryoverllay">
          <img className="h-full" src="./Category2.png"></img>
        </div>
        <div className="relative h-full categoryoverllay">
          <img className="h-full" src="./Category4.png"></img>
        </div>
        <div className="relative h-full categoryoverllay">
          <img className="h-full" src="./Category5.png"></img>
        </div>
      </div>
    </div>
  );
};

export default TopCategory;
