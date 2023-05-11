// import { HeartIcon } from "Assets/heart";
import { HeartIcon } from "@heroicons/react/24/outline";
import { UserIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const posts = [
  {
    id: 1,
    title: "Connecting you to batch roasters",
    href: "#",
    description: "Coffee house USA, Los Angeles...",
    imageUrl: "./Event.png",
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
    imageUrl: "./Event.png",
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
    imageUrl: "./Event.png",
    date: "Wed, Apr 20, 7:00 PM",
    datetime: "2020-03-16",
    eventName: "Coffeehouse Meetup",
    followers: "40 Followers",
  },
  {
    id: 4,
    title: "Connecting you to batch roasters",
    href: "#",
    description: "Coffee house USA, Los Angeles...",
    imageUrl: "./Event.png",
    date: "Wed, Apr 20, 7:00 PM",
    datetime: "2020-03-16",
    eventName: "Coffeehouse Meetup",
    followers: "40 Followers",
  },
  {
    id: 5,
    title: "Connecting you to batch roasters",
    href: "#",
    description: "Coffee house USA, Los Angeles...",
    imageUrl: "./Event.png",
    date: "Wed, Apr 20, 7:00 PM",
    datetime: "2020-03-16",
    eventName: "Coffeehouse Meetup",
    followers: "40 Followers",
  },
  {
    id: 6,
    title: "Connecting you to batch roasters",
    href: "#",
    description: "Coffee house USA, Los Angeles...",
    imageUrl: "./Event.png",
    date: "Wed, Apr 20, 7:00 PM",
    datetime: "2020-03-16",
    eventName: "Coffeehouse Meetup",
    followers: "40 Followers",
  },
  {
    id: 7,
    title: "Connecting you to batch roasters",
    href: "#",
    description: "Coffee house USA, Los Angeles...",
    imageUrl: "./Event.png",
    date: "Wed, Apr 20, 7:00 PM",
    datetime: "2020-03-16",
    eventName: "Coffeehouse Meetup",
    followers: "40 Followers",
  },
  {
    id: 8,
    title: "Connecting you to batch roasters",
    href: "#",
    description: "Coffee house USA, Los Angeles...",
    imageUrl: "./Event.png",
    date: "Wed, Apr 20, 7:00 PM",
    datetime: "2020-03-16",
    eventName: "Coffeehouse Meetup",
    followers: "40 Followers",
  },
  // More posts...
];

export default function Events() {
  return (
    <div className="py-24 sm:py-[80px]">
      <div className="mx-auto lg:px-[160px] px-6">
        <div className="max-w-2xl text-left text-[#a0600cfb]">
          <h3 className="font-Body text-[28px] font-medium tracking-tight text-[#613907]">
            Events Near You
          </h3>
        </div>
        <div className="mx-auto mt-5 grid max-w-2xl gap-x-8 gap-y-6 md:grid-cols-2 md:gap-y-20 lg:mx-0 lg:max-w-none xl:grid-cols-4 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex cursor-pointer flex-col items-start justify-between bg-[#FFFFFF] shadow-md hover:shadow-event"
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
        </div>
        <Link href="#" className="text-[#613907] font-Body text-sm mt-[35px] lg:max-w-full max-w-2xl mx-auto block">More Events...</Link>
      </div>
    </div>
  );
}
