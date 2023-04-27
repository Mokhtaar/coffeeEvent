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
        <h3 className="text-center text-2xl font-semibold tracking-tight text-[#a0600cfb] sm:text-5xl">
          Special offers
        </h3>
        <div className="w-full place-items-center overflow-hidden sm:grid sm:grid-cols-4 sm:gap-px">
          {offers.map((action, actionIdx) => (
            <div
              key={actionIdx}
              className="flex flex-col items-center justify-center gap-y-4 text-center"
            >
              <action.icon
                className="h-20 w-20 bg-orange-50 p-4"
                aria-hidden="true"
              />

              <h3 className="text-xl font-semibold leading-6 text-gray-900">
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
