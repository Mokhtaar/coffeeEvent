"use client";

export default function Favorites() {
  return (
    <div className="">
      <main>
        <div className="relative isolate">
          <div className="overflow-hidden">
            <div className="mx-auto lg:px-[160px] px-6 sm:pb-32 pt-36 sm:pt-60 lg:pt-32">
              <div className="relative mx-auto gap-x-14 lg:mx-0 lg:max-w-none">
                <img
                  className="absolute right-[3%] top-[87px] w-[61%] md:block hidden"
                  src="./beans.png"
                ></img>
                <img
                  className="absolute -bottom-[37%] -left-[9.5rem] w-[75%] md:block hidden"
                  src="./beanss.png"
                ></img>

                <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <h1 className="max-w-lg lg:text-[60px] sm:text-[40px] text-[30px] font-bold md:leading-[4rem] text-[#613907] capitalize">
                    All your Favorites in one place
                  </h1>
                  <p className="relative mt-6 text-2xl leading-8 sm:max-w-md lg:max-w-none font-Body font-medium text-[#613907]">
                    Found Your favorite Local Specialty Coffee Spot? Hit That
                    Heart And Have Them All In One Easy To Recall List.
                  </p>
                </div>
                <div className="flex-col-reverse items-center xl:gap-x-32 lg:gap-x-[4rem] gap-x-[2rem] pt-16 sm:flex sm:flex-row">
                  <div className="relative">
                    <img
                      src="./left.png"
                      className="lg:w-[400px] md:w-[300px] w-full object-contain"
                    ></img>
                    <img
                      src="./bottom.png"
                      className="md:absolute -bottom-[20%] xl:-right-[50%] lg:-right-[20%] right-[-50px] z-10 lg:w-[300px] md:w-[200px] w-full "
                    ></img>
                  </div>
                  <div className="relative">
                    <img
                      src="./right.png"
                      className="lg:w-[400px] md:w-[300px] w-full object-contain"
                    ></img>
                    <img
                      src="./up.png"
                      className="md:absolute xl:-right-[50%] lg:-right-[20%] right-[-50px] -top-[20%] lg:w-[300px] md:w-[200px] w-full "
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
