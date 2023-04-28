import React from "react";
import { HeartIcon } from "@heroicons/react/24/outline";
import { UserIcon } from "@heroicons/react/24/outline";

const posts = [
  {
    id: 1,
    title: "Connecting you to batch roasters",
    href: "#",
    description: "Coffee house USA, Los Angeles...",
    imageUrl:
      "https://images.unsplash.com/photo-1604881988758-f76ad2f7aac1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80",
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
    imageUrl:
      "https://images.unsplash.com/photo-1604881988758-f76ad2f7aac1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80",
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
    imageUrl:
      "https://images.unsplash.com/photo-1604881988758-f76ad2f7aac1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80",
    date: "Wed, Apr 20, 7:00 PM",
    datetime: "2020-03-16",
    eventName: "Coffeehouse Meetup",
    followers: "40 Followers",
  },
  // More posts...
];
const OtherEvents = () => {
  return (
    <div className="mx-auto space-y-12 max-w-6xl py-20">
      <div className="max-w-2xl text-left text-[#a0600cfb]">
        <h3 className="text-2xl font-semibold tracking-tight sm:text-2xl">
          Other Events You May Like
        </h3>
      </div>
      <div className="mx-auto mt-5 grid max-w-2xl grid-cols-1 gap-x-28 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.id}
            className="flex flex-col items-start justify-between bg-[#FFFFFF] shadow-lg"
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
            <div className="mx-4 my-3 max-w-xl">
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
              </div>
              <div className="mt-4 flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
              </div>
              <div>
                <p className="mt-4 line-clamp-3 text-sm leading-6 text-gray-600">
                  {post.description}
                </p>
              </div>
              <div className="relative mt-8 flex flex-col gap-x-2">
                <p className="font-semibold text-gray-900">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.eventName}
                  </a>
                </p>
                <div className="mt-1 flex">
                  <UserIcon className="mr-2 h-5 w-5" />
                  <p className="text-sm leading-6 text-gray-600">
                    {post.followers}
                  </p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default OtherEvents;
