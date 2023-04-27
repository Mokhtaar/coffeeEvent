"use client";

export default function HeroSection() {
  return (
    <div className="">
      <div className="relative isolate">
        <img
          src="./heroImg.png"
          alt=""
          className="absolute inset-0 -z-10 h-full object-cover"
        />
        <img
          src="./cup.png"
          alt=""
          className="w- z-1 absolute -bottom-56 right-20 h-[580px]"
        />
        <div className="ml-20 max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-left">
            <h1 className="space-y-8 text-4xl font-bold tracking-wider text-white sm:text-6xl">
              <p>TIME TO </p>
              <p> DISCOVER</p>
              <p>COFFEE PLACE</p>
            </h1>
            <p className="mt-6 text-lg text-gray-300">
              What We Call The 3 C&apos;s <br /> Coffee - Community -
              Convenience
            </p>
            <div className="mt-10">
              <a
                href="#"
                className="rounded-full bg-[#9c8164df] px-3.5 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
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
