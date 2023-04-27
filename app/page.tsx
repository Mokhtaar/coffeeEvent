import HeroSection from "@/components/HeroSection";
import Events from "@/components/Events";
import SpecialOffers from "@/components/SpecialOffers";
import Favorites from "@/components/Favorites";
import Subscribe from "@/components/Subscribe";
import TopCategory from "@/components/TopCategory";
import PersonalEvent from "@/components/PersonalEvent";

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
