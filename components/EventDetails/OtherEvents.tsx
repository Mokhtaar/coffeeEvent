"use client";
import { HeartIcon } from "@heroicons/react/24/outline";
declare global {
  interface Window {
    $: any;
    jQuery: any;
  }
}

if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}
import dynamic from "next/dynamic";
import Image from "next/image";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const posts = [
  {
    id: 1,
    title: "Connecting you to batch roasters",
    href: "#",
    description: "Coffee house USA, Los Angeles...",
    imageUrl: "./cafe.png",
    date: "Wed, Apr 20, 7:00 PM",
    datetime: "2020-03-16",
    eventName: "Coffeehouse Meetup",
    followers: "40 Followers",
  },
  {
    id: 2,
    title: "Connecting you to batch roasters",
    href: "#",
    description: "Coffee house USA, Los Angeles...",
    imageUrl: "./otherevent.png",
    date: "Wed, Apr 20, 7:00 PM",
    datetime: "2020-03-16",
    eventName: "Coffeehouse Meetup",
    followers: "40 Followers",
  },
  {
    id: 3,
    title: "Connecting you to batch roasters",
    href: "#",
    description: "Coffee house USA, Los Angeles...",
    imageUrl: "./otherevent2.png",
    date: "Wed, Apr 20, 7:00 PM",
    datetime: "2020-03-16",
    eventName: "Coffeehouse Meetup",
    followers: "40 Followers",
  },
  // More posts...
];
// const handleJQuery = () => {};
const OtherEvents = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  // if (typeof window === "undefined") {
  //   return null;
  // }

  // useEffect(() => {
  //   import("jquery").then(($) => {
  //     window.jQuery = $;
  //     import("owl.carousel").then(() => {
  //       handleJQuery();
  //     });
  //   });
  // }, []);
  const responsive = {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  };
  return (
    <div className="mx-auto space-y-12 py-20">
      <div className="text-left text-[#613907]">
        <h3 className="lg:text-[50px] font-Body text-[30px] font-medium leading-[80px]">
          Other Events You May Like
        </h3>
      </div>
      {/* <div className="mx-auto mt-5 grid max-w-2xl grid-cols-1 gap-x-28 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3"> */}
      {/* <OwlCarousel className="owl-theme">
        {posts.map((post) => (
          <article
            key={post.id}
            className="flex max-w-[428px] cursor-pointer flex-col items-start justify-between bg-[#FFFFFF] shadow-default hover:shadow-event"
          >
            <div className="relative w-full">
              <img
                src={post.imageUrl}
                alt=""
                className="aspect-[16/9] w-full bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
              />
              <div className="absolute -bottom-4 right-4 z-10 rounded-full bg-white p-2 shadow-xl">
                <HeartIcon className="h-5 w-5 cursor-pointer hover:fill-red-500" />
              </div>
              <div className="absolute inset-0 ring-1 ring-inset ring-gray-900/10" />
            </div>
            <div className="mx-4 my-4 max-w-xl">
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-[#613907]">
                  <a
                    href={post.href}
                    className="block max-w-[230px] font-WorkSans text-xl font-semibold"
                  >
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
              </div>
              <div className="mt-5 flex items-center gap-x-4 text-base">
                <time
                  dateTime={post.datetime}
                  className="font-Body font-semibold text-[#a48765]"
                >
                  {post.date}
                </time>
              </div>
              <div>
                <p className="mt-5 line-clamp-3 font-Body text-sm font-semibold leading-6 text-[#c8b49d]">
                  {post.description}
                </p>
              </div>
              <div className="relative mt-8 flex flex-col gap-x-2">
                <p className="font-display font-medium text-[#724e22]">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.eventName}
                  </a>
                </p>
                <div className="mt-1 flex items-center">
                  <img src="./usericon.svg" alt="usericon" />
                  <p className="mt-1 font-display text-sm font-medium text-[#724e22]">
                    {post.followers}
                  </p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </OwlCarousel> */}
      <OwlCarousel
        className="owl-theme"
        loop
        margin={30}
        responsive={responsive}
      >
        {posts.map((post) => (
          <article
            key={post.id}
            className="flex cursor-pointer flex-col items-start justify-between bg-[#FFFFFF] shadow-default hover:shadow-event mb-10"
          >
            <div className="relative w-full">
              <img
                src={post.imageUrl}
                alt=""
                className="sm:aspect-[2/1] lg:aspect-[3/2] aspect-[16/9] w-full bg-gray-100 object-cover"
              />
              <div className="absolute -bottom-4 right-4 z-10 rounded-full bg-white p-2 shadow-xl">
                <HeartIcon className="h-5 w-5 cursor-pointer hover:fill-red-500" />
              </div>
              <div className="absolute inset-0 ring-1 ring-inset ring-gray-900/10" />
            </div>
            <div className="mx-4 my-4 max-w-xl">
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-[#613907]">
                  <a
                    href={post.href}
                    className="block max-w-[230px] font-WorkSans text-xl font-semibold"
                  >
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
              </div>
              <div className="mt-5 flex items-center gap-x-4 text-base">
                <time
                  dateTime={post.datetime}
                  className="font-Body font-semibold text-[#a48765]"
                >
                  {post.date}
                </time>
              </div>
              <div>
                <p className="mt-5 line-clamp-3 font-Body text-sm font-semibold leading-6 text-[#c8b49d]">
                  {post.description}
                </p>
              </div>
              <div className="relative mt-8 flex flex-col gap-x-2">
                <p className="font-display font-medium text-[#724e22]">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.eventName}
                  </a>
                </p>
                <div className="mt-1 flex items-center">
                  <img src="./usericon.svg" alt="usericon" className="max-w-[30px]"/>
                  <p className="mt-1 font-display text-sm font-medium text-[#724e22]">
                    {post.followers}
                  </p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </OwlCarousel>
      {/* </div> */}
    </div>
  );
};

export default OtherEvents;

// function handleJQuery() {
//   throw new Error("Function not implemented.");
// }
// function handleJQuery() {
//   throw new Error("Function not implemented.");
// }
