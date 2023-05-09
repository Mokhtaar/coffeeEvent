import React from "react";

const TopCategory = () => {
  return (
    <div className="mx-auto max-w-7xl space-y-11 py-20">
      <h3 className="text-center text-2xl font-semibold tracking-tight text-[#a0600cfb] sm:text-4xl">
        Top Category
      </h3>
      <div className="grid-col-1 mx-auto grid max-w-3xl place-items-center gap-3 sm:grid-cols-3">
        <div className="relative">
          <img
            className="aspect-[4/3] h-[15rem]"
            src="https://images.unsplash.com/photo-1550681560-af9bc1cb339e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          ></img>
          <p className="absolute bottom-0 w-full p-4 text-center text-white backdrop-blur-[2px]">
            Morning habits
          </p>
        </div>
        <div className="relative">
          <img
            className="aspect-[4/3] h-[15rem]"
            src="https://images.unsplash.com/photo-1550681560-af9bc1cb339e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          ></img>
          <p className="absolute bottom-0 w-full p-4 text-center text-white backdrop-blur-[2px]">
            Traditional coffee
          </p>
        </div>
        <div className="relative">
          <img
            className="aspect-[4/3] h-[15rem]"
            src="https://images.unsplash.com/photo-1550681560-af9bc1cb339e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          ></img>
          <p className="absolute bottom-0 w-full p-4 text-center text-white backdrop-blur-[2px]">
            Coffee decoctions
          </p>
        </div>
      </div>
      <div className="mx-auto grid place-items-center gap-3 md:grid-cols-4 grid-cols-2 sm:grid-rows-2 px-[14px]">
        <img
          className=""
          src="https://images.unsplash.com/photo-1550681560-af9bc1cb339e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
        ></img>
        <img
          className="h-full sm:col-span-2 sm:row-span-2"
          src="https://images.unsplash.com/photo-1550681560-af9bc1cb339e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
        ></img>
        <img
          className=""
          src="https://images.unsplash.com/photo-1550681560-af9bc1cb339e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
        ></img>
        <img
          className=""
          src="https://images.unsplash.com/photo-1550681560-af9bc1cb339e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
        ></img>
        <img
          className=""
          src="https://images.unsplash.com/photo-1550681560-af9bc1cb339e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
        ></img>
      </div>
    </div>
  );
};

export default TopCategory;
