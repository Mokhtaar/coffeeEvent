"use client";

export default function HeroSection() {
  return (
    <div className="">
      <div className="relative isolate">
        <img
          src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <img
          src="./cup.png"
          alt=""
          className="z-1 absolute lg:-bottom-56 bottom-[-100px] lg:right-20 right-0 lg:h-[580px] sm:h-[400px] h-[240px]"
        />
        <div className="lg:ml-20 sm:ml-[24px] ml-[14px] max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-left">
            <h1 className="lg:space-y-8 lg:text-4xl sm:text-[40px] text-[30px] font-bold tracking-wider text-white">
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
