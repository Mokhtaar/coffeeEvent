import { BsCupHot } from "react-icons/bs";
import { GiRibbonMedal } from "react-icons/gi";
import { GiCoffeeBeans } from "react-icons/gi";
import { DiNetbeans } from "react-icons/di";

const offers = [
  {
    name: "AWESOME CAFE",
    description: "Lorem ipsum dolor Sitlorem ipsum dolor SitloremLorem ipsum do",
    icon: './Cafe.png',
  },
  {
    name: "HIGH QUALITY",
    description: "Lorem ipsum dolor Sitlorem ipsum dolor SitloremLorem ipsum do",
    icon: './Quality.png',
  },
  {
    name: "PURE GRADES",
    description: "Lorem ipsum dolor Sitlorem ipsum dolor SitloremLorem ipsum do",
    icon: './Grades.png',
  },
  {
    name: "PROPER ROASTING",
    description: "Lorem ipsum dolor Sitlorem ipsum dolor SitloremLorem ipsum do",
    icon: './package.svg',
  },
];

export default function Offers() {
  return (
    <div className="">
      <div className="mx-auto lg:px-[160px] px-3 space-y-14">
        <h3 className="text-center text-2xl font-semibold tracking-tight font-Body text-[#613907] sm:text-[60px] mb-[80px]">
          Special offers
        </h3>
        <div className="w-full place-items-center overflow-hidden grid md:grid-cols-4 sm:grid-cols-2 gap-4 px-[14px]">
          {offers.map((action, actionIdx) => (
            <div
              key={actionIdx}
              className="flex flex-col items-center justify-center gap-y-4 text-center sm:mb-0 mb-6 w-[252px]"
            >
              <img src={action.icon} alt={action.icon} />
              <h3 className="lg:text-xl text-[16px] tracking-[2px] font-display font-semibold leading-6 text-[#613907]">
                {action.name}
              </h3>
              <p className="w-48 text-[12px] text-[#613907] capitalize">{action.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
