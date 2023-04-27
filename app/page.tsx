import HeroSection from "@/components/HeroSection";
import Events from "@/components/Events";
import SpecialOffers from "@/components/SpecialOffers";
import Favorites from "@/components/Favorites";
import Subscribe from "@/components/Subscribe";

export default async function Home() {
  return (
    <div className="">
      <HeroSection />
      <Favorites />
      <Events />
      <SpecialOffers />
      <Subscribe/>
    </div>
  );
}
