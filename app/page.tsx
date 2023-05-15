import HeroSection from "@/components/Home/HeroSection";
import Events from "@/components/Home/Events";
import SpecialOffers from "@/components/Home/SpecialOffers";
import Favorites from "@/components/Home/Favorites";
import Subscribe from "@/components/Home/Subscribe";
import TopCategory from "@/components/Home/TopCategory";
import PersonalEvent from "@/components/Home/PersonalEvent";
import Content from "@/components/EventDetails/Content";
// import HeroSection from "@/components/EventDetails/HeroSection";
import Organizer from "@/components/EventDetails/Organizer";
import OtherEvents from "@/components/EventDetails/OtherEvents";

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

      {/* <Content/>
      <HeroSection/>
      <Organizer/>
      <OtherEvents/> */}
    </div>
  );
}
