"use client";

import { Fragment, useEffect, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/router";
import Link from "next/link";

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  const [pathname, setPathname] = useState<string>();
  useEffect(() => {
    const url = window.location.pathname;
    setPathname(url);
  }, []);
  return (
    <>
      {pathname === "/" ? (
        <div>
          <Disclosure
            as="header"
            className="navbargradient fixed z-50 w-full overflow-x-hidden lg:overflow-x-visible"
          >
            {({ open }) => (
              <>
                <div className="mx-auto px-2 py-4 sm:px-4 lg:px-[160px]">
                  <div className="relative flex h-16 justify-between">
                    <div className="flex items-center gap-x-10">
                      <div className="relative z-10 flex px-2 lg:px-0">
                        <Link  href='/' className="flex flex-shrink-0 items-center">
                          <img
                            className="block h-20 w-auto cursor-pointer"
                            src="./CoffeeEvent.png"
                            alt="Your Company"
                          />
                        </Link>
                      </div>
                      <div className="w-full sm:max-w-xs">
                        <label htmlFor="search" className="sr-only">
                          Search
                        </label>
                        <div className="relative">
                          <div className="pointer-events-none absolute inset-y-0 left-2 flex items-center pl-3">
                            <MagnifyingGlassIcon
                              className="h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                          </div>
                          <input
                            id="search"
                            name="search"
                            className="block w-full rounded-full border-[1px] border-[#a28260] bg-transparent py-1.5 pl-12 pr-3 text-gray-900 placeholder:text-[#fff] text-[12px] placeholder:text-[12px]"
                            placeholder="Search Events"
                            type="search"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="hidden items-center lg:flex">
                      <Menu
                        as="div"
                        className="relative inline-block text-left"
                      >
                        <div>
                          <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md  px-3 py-2 text-sm font-semibold text-white hover:bg-gray-50 hover:text-gray-900">
                            Organize
                            <ChevronDownIcon
                              className="-mr-1 h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                          </Menu.Button>
                        </div>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="#"
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "block px-4 py-2 text-sm",
                                    )}
                                  >
                                    Account settings
                                  </a>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="#"
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "block px-4 py-2 text-sm",
                                    )}
                                  >
                                    Support
                                  </a>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="#"
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "block px-4 py-2 text-sm",
                                    )}
                                  >
                                    License
                                  </a>
                                )}
                              </Menu.Item>
                              <form method="POST" action="#">
                                <Menu.Item>
                                  {({ active }) => (
                                    <button
                                      type="submit"
                                      className={classNames(
                                        active
                                          ? "bg-gray-100 text-gray-900"
                                          : "text-gray-700",
                                        "block w-full px-4 py-2 text-left text-sm",
                                      )}
                                    >
                                      Sign out
                                    </button>
                                  )}
                                </Menu.Item>
                              </form>
                            </div>
                          </Menu.Items>
                        </Transition>
                      </Menu>

                      <Menu
                        as="div"
                        className="relative inline-block text-left"
                      >
                        <div>
                          <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-white hover:bg-gray-50 hover:text-gray-900">
                            Help
                            <ChevronDownIcon
                              className="-mr-1 h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                          </Menu.Button>
                        </div>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="#"
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "block px-4 py-2 text-sm",
                                    )}
                                  >
                                    Account settings
                                  </a>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="#"
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "block px-4 py-2 text-sm",
                                    )}
                                  >
                                    Support
                                  </a>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="#"
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "block px-4 py-2 text-sm",
                                    )}
                                  >
                                    License
                                  </a>
                                )}
                              </Menu.Item>
                              <form method="POST" action="#">
                                <Menu.Item>
                                  {({ active }) => (
                                    <button
                                      type="submit"
                                      className={classNames(
                                        active
                                          ? "bg-gray-100 text-gray-900"
                                          : "text-gray-700",
                                        "block w-full px-4 py-2 text-left text-sm",
                                      )}
                                    >
                                      Sign out
                                    </button>
                                  )}
                                </Menu.Item>
                              </form>
                            </div>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                      <h3 className="cursor-pointer text-[#A1825F]">
                        Create an event
                      </h3>
                    </div>

                    <div className="relative z-10 flex items-center lg:hidden">
                      {/* Mobile menu button */}
                      <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Open menu</span>
                        {open ? (
                          <XMarkIcon
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <Bars3Icon
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </Disclosure.Button>
                    </div>
                    <div className="hidden space-x-2 lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
                      <button
                        type="button"
                        className="flex-shrink-0 rounded-full border border-[#C4A484] bg-none px-7 py-2 text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        Log in
                      </button>
                      <button
                        type="button"
                        className="flex-shrink-0 rounded-full bg-[#b9a188] px-7 py-2 text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        Sign Up
                      </button>

                      {/* Profile dropdown */}
                    </div>
                  </div>
                  {/* <nav
              className="hidden lg:flex lg:space-x-8 lg:py-2"
              aria-label="Global"
            >
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-100 text-gray-900"
                      : "text-gray-900 hover:bg-gray-50 hover:text-gray-900",
                    "inline-flex items-center rounded-md px-3 py-2 text-sm font-medium",
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </a>
              ))}
            </nav> */}
                </div>

                <Disclosure.Panel
                  as="nav"
                  className="lg:hidden"
                  aria-label="Global"
                >
                  <div className="space-y-1 px-2 pb-3 pt-2">
                    {navigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-900 hover:bg-gray-50 hover:text-gray-900",
                          "block rounded-md px-3 py-2 text-base font-medium",
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      ) : (
        <div className="h-[96px]">
          <Disclosure as="header" className="fixed z-50 w-full bg-white">
            {({ open }) => (
              <>
                <div className="mx-auto px-2 py-4 sm:px-4 xl:px-[160px]">
                  <div className="relative flex h-16 justify-between">
                    <div className="flex items-center gap-x-10">
                      <div className="relative z-10 flex px-2 lg:px-0">
                        <Link href='/' className="flex flex-shrink-0 items-center">
                          <img
                            className="block h-20 w-auto cursor-pointer"
                            src="./CoffeeEvent.png"
                            alt="Your Company"
                          />
                        </Link>
                      </div>
                      <div className="w-full sm:max-w-xs">
                        <label htmlFor="search" className="sr-only">
                          Search
                        </label>
                        <div className="relative">
                          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <MagnifyingGlassIcon
                              className="h-5 w-5 text-[#707070]"
                              aria-hidden="true"
                            />
                          </div>
                          <input
                            id="search"
                            name="search"
                            className="focus:ring-none block w-full rounded-full border border-[#A1825F] bg-white py-1.5 pl-10 pr-3 text-[#707070] shadow-none ring-0 placeholder:text-[#707070] focus:ring-0 focus:ring-offset-0 sm:text-sm placeholder:text-[12px] sm:leading-6"
                            placeholder="Search Events"
                            type="search"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="hidden items-center gap-[51px] lg:flex">
                      <Menu
                        as="div"
                        className="relative inline-block text-left"
                      >
                        <div>
                          <Menu.Button className="inline-flex w-full items-center justify-center gap-x-1.5 rounded-md px-3 py-2 text-[16px] font-normal">
                            Organize
                            <ChevronDownIcon
                              className="-mr-1 h-5 w-5 font-Body text-[#613907]"
                              aria-hidden="true"
                            />
                          </Menu.Button>
                        </div>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="#"
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "block px-4 py-2 text-[20px]",
                                    )}
                                  >
                                    Account settings
                                  </a>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="#"
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "block px-4 py-2 text-[20px]",
                                    )}
                                  >
                                    Support
                                  </a>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="#"
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "block px-4 py-2 text-[20px]",
                                    )}
                                  >
                                    License
                                  </a>
                                )}
                              </Menu.Item>
                              <form method="POST" action="#">
                                <Menu.Item>
                                  {({ active }) => (
                                    <button
                                      type="submit"
                                      className={classNames(
                                        active
                                          ? "bg-gray-100 text-gray-900"
                                          : "text-gray-700",
                                        "block w-full px-4 py-2 text-left text-[20px]",
                                      )}
                                    >
                                      Sign out
                                    </button>
                                  )}
                                </Menu.Item>
                              </form>
                            </div>
                          </Menu.Items>
                        </Transition>
                      </Menu>

                      <Menu
                        as="div"
                        className="relative inline-block text-left"
                      >
                        <div>
                          <Menu.Button className="inline-flex w-full items-center justify-center gap-x-1.5 rounded-md px-3 py-2 text-[16px] font-normal">
                            Help
                            <ChevronDownIcon
                              className="-mr-1 h-5 w-5 font-Body text-[#613907]"
                              aria-hidden="true"
                            />
                          </Menu.Button>
                        </div>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="#"
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "block px-4 py-2 text-[20px]",
                                    )}
                                  >
                                    Account settings
                                  </a>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="#"
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "block px-4 py-2 text-[20px]",
                                    )}
                                  >
                                    Support
                                  </a>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="#"
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "block px-4 py-2 text-[20px]",
                                    )}
                                  >
                                    License
                                  </a>
                                )}
                              </Menu.Item>
                              <form method="POST" action="#">
                                <Menu.Item>
                                  {({ active }) => (
                                    <button
                                      type="submit"
                                      className={classNames(
                                        active
                                          ? "bg-gray-100 text-gray-900"
                                          : "text-gray-700",
                                        "block w-full px-4 py-2 text-left text-[20px]",
                                      )}
                                    >
                                      Sign out
                                    </button>
                                  )}
                                </Menu.Item>
                              </form>
                            </div>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                      <h3 className="cursor-pointer">
                        Browes Events
                      </h3>
                    </div>

                    <div className="relative z-10 flex items-center lg:hidden">
                      {/* Mobile menu button */}
                      <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Open menu</span>
                        {open ? (
                          <XMarkIcon
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <Bars3Icon
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </Disclosure.Button>
                    </div>
                    <div className="hidden gap-[15px] lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
                      <button
                        type="button"
                        className="h-[50px] w-[150px] flex-shrink-0 rounded-full border border-[#A1825F] bg-none px-7 py-2 font-Body font-medium text-[#A1825F] hover:bg-[#A1825F] hover:text-white focus:outline-none"
                      >
                        Log in
                      </button>
                      <button
                        type="button"
                        className="h-[50px] w-[150px] flex-shrink-0 rounded-full bg-[#A1825F] bg-none  px-7 py-2 font-Body font-medium text-white hover:border hover:border-[#A1825F] hover:bg-transparent hover:text-[#A1825F] focus:outline-none"
                      >
                        Sign Up
                      </button>

                      {/* Profile dropdown */}
                    </div>
                  </div>
                  {/* <nav
            className="hidden lg:flex lg:space-x-8 lg:py-2"
            aria-label="Global"
          >
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current
                    ? "bg-gray-100 text-gray-900"
                    : "text-gray-900 hover:bg-gray-50 hover:text-gray-900",
                  "inline-flex items-center rounded-md px-3 py-2 text-[20px] font-medium",
                )}
                aria-current={item.current ? "page" : undefined}
              >
                {item.name}
              </a>
            ))}
          </nav> */}
                </div>

                <Disclosure.Panel
                  as="nav"
                  className="lg:hidden"
                  aria-label="Global"
                >
                  <div className="space-y-1 px-2 pb-3 pt-2">
                    {navigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-900 hover:bg-gray-50 hover:text-gray-900",
                          "block rounded-md px-3 py-2 text-base font-medium",
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      )}
    </>
  );
}
