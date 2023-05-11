export default function Subscribe() {
  return (
    <div className="bgimg sm:pt-24 lg:pt-28 pb-[241px]">
      <div className="mx-auto lg:px-[160px] px-[14px] lg:gap-8">
        <div className="mx-auto">
          <h2 className="text-center font-display text-[20px] font-medium leading-[75px] text-[#613907] sm:block sm:text-5xl lg:inline xl:block">
            <span className="text-[#A1825F]">SUBSCRIBE</span> To Join The
            Community
          </h2>
          <p className="my-8 text-[#613907] text-center text-[20px]">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna
          </p>
        </div>
        <form className="mx-auto grid 2xl:grid-cols-4 gap-y-3 lg:grid-cols-2 md:grid-cols-2 w-full max-w-[1540px] items-center lg:pt-2">
          <input
            type="text"
            className="placeholder:font-me h-[93px] lg:min-w-[363px] w-full border-none pl-[41px] font-Body
          text-[20px] font-medium text-[#A1825F] placeholder:font-Body placeholder:text-[20px] placeholder:text-[#A1825F] focus:border-none focus:shadow-none focus:outline-none focus:ring-0"
            placeholder="first name"
          />
          <div className="inputline relative">
            <input
              type="text"
              className="placeholder:font-me h-[93px] lg:min-w-[363px] w-full border-none
            pl-[41px] font-Body text-[20px] font-medium text-[#A1825F] placeholder:font-Body placeholder:text-[20px] placeholder:text-[#A1825F] focus:border-none focus:shadow-none focus:outline-none focus:ring-0"
              placeholder="last name"
            />
          </div>
          <input
            type="text"
            className="placeholder:font-me h-[93px] lg:min-w-[596px] w-full border-none pl-[41px] font-Body
          text-[20px] font-medium text-[#A1825F] placeholder:font-Body placeholder:text-[20px] placeholder:text-[#A1825F] focus:border-none focus:shadow-none focus:outline-none focus:ring-0"
            placeholder="email address"
          />
          <button className="flex h-[93px] w-[228px] items-center justify-center bg-[#613907] font-default text-[30px] font-[500] text-white">
            JOIN
          </button>
        </form>
      </div>
    </div>
  );
}
