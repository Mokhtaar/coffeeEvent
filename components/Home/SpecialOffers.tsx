import { BsCupHot } from "react-icons/bs";
import { GiRibbonMedal } from "react-icons/gi";
import { GiCoffeeBeans } from "react-icons/gi";
import { DiNetbeans } from "react-icons/di";

const offers = [
  {
    name: "AWESOME CAFE",
    description: "lorem ipsum dolor sit amet consectetuer adipiscing elit",
    icon: BsCupHot,
  },
  {
    name: "HIGH QUALITY",
    description: "lorem ipsum dolor sit amet consectetuer adipiscing elit",
    icon: GiRibbonMedal,
  },
  {
    name: "PURE GRADES",
    description: "lorem ipsum dolor sit amet consectetuer adipiscing elit",
    icon: GiCoffeeBeans,
  },
  {
    name: "PROPER ROASTING",
    description: "lorem ipsum dolor sit amet consectetuer adipiscing elit",
    icon: DiNetbeans,
  },
];

export default function Offers() {
  return (
    <div className="">
      <div className="mx-auto max-w-7xl space-y-14">
        <h3 className="text-center text-2xl font-semibold tracking-tight text-[#a0600cfb] sm:text-4xl">
          Special offers
        </h3>
        <div className="w-full place-items-center overflow-hidden sm:grid md:grid-cols-4 sm:grid-cols-2 gap-4 px-[14px]">
          {offers.map((action, actionIdx) => (
            <div
              key={actionIdx}
              className="flex flex-col items-center justify-center gap-y-4 text-center sm:mb-0 mb-6"
            >
              <action.icon
                className="h-20 w-20 bg-orange-50 p-4"
                aria-hidden="true"
              />

              <h3 className="lg:text-xl text-[16px] font-semibold leading-6 text-gray-900">
                {action.name}
              </h3>
              <p className="w-48 text-sm text-gray-500">{action.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
