"use client";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="">
      <div className="isolate relative min-h-screen overflow-hidden">
        <Image
          alt="Coffee"
          src={
            "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
          }
          fill
          className="object-cover h-full w-full"
        />
      </div>
    </div>
  );
}
