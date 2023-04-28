"use client";

export default function Favorites() {
  return (
    <div className="">
      <main>
        <div className="relative isolate">
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
              <div className="relative mx-auto gap-x-14 lg:mx-0 lg:max-w-none">
                <img
                  className="absolute right-[3%] top-[87px] w-[61%]"
                  src="./beans.png"
                ></img>
                <img
                  className="absolute -bottom-[37%] -left-[9.5rem] w-[75%]"
                  src="./beanss.png"
                ></img>

                <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <h1 className="max-w-lg text-4xl font-bold leading-[4rem] text-gray-900 sm:text-5xl">
                    All your Favorites in one place
                  </h1>
                  <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                    Found Your favorite Local Specialty Coffee Spot? Hit That
                    Heart And Have Them All In One Easy To Recall List.
                  </p>
                </div>
                <div className="flex-col-reverse items-center gap-x-32 pt-16 sm:flex sm:flex-row">
                  <div className="relative">
                    <img
                      src="./left.png"
                      className="w-[400px] object-contain"
                    ></img>
                    <img
                      src="./bottom.png"
                      className="absolute -bottom-[20%] -right-[50%] z-10 w-[300px]"
                    ></img>
                  </div>
                  <div className="relative">
                    <img
                      src="./right.png"
                      className="w-[400px] object-contain"
                    ></img>
                    <img
                      src="./up.png"
                      className="absolute -right-[50%] -top-[20%] w-[300px]"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
