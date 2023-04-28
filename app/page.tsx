import HeroSection from "@/components/Home/HeroSection";
import Events from "@/components/Home/Events";
import SpecialOffers from "@/components/Home/SpecialOffers";
import Favorites from "@/components/Home/Favorites";
import Subscribe from "@/components/Home/Subscribe";
import TopCategory from "@/components/Home/TopCategory";
import PersonalEvent from "@/components/Home/PersonalEvent";

export default async function Home() {
  return (
    <div className="">
      <HeroSection />
      <Favorites />
      <PersonalEvent />
      <Events />
      <SpecialOffers />
      <TopCategory />
      <Subscribe />
    </div>
  );
}
