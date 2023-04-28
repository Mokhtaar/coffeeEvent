"use client";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div
      className="relative flex h-screen items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative z-40 h-full w-[60%]">
        <img
          alt="Coffee"
          src={
            "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
          }
          className="h-full object-cover"
        />
        <p className="absolute bottom-0 w-full p-4 text-white backdrop-blur-[3px]">
          April 20th | 19:00 | USA, LA
        </p>
      </div>
      <div className="absolute inset-0 z-10 backdrop-blur-md"></div>
    </div>
  );
}
