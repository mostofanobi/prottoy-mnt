"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  BsCollection,
  BsJournalText,
  BsVolumeUp,
  BsCameraReels,
} from "react-icons/bs";
import { SlVolume2 } from "react-icons/sl";
import classNames from "classnames";
import useClickOutside from "../hooks/useClickOutside";

const Navbar = () => {
  const currentPath = usePathname();
  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);
  const dropdownMenuRef = useRef(null);
  useClickOutside(dropdownMenuRef, () => setIsDropdownMenuOpen(false));
  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <nav className="mx-auto flex max-w-screen-2xl items-center justify-between py-2 px-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="relative h-14 aspect-[3/1]">
            <Image
              className="absolute object-contain"
              src="/images/logo.png"
              fill={true}
              alt="prottoy logo"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          <div className="relative">
            <button
              type="button"
              className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
              onClick={() => setIsDropdownMenuOpen(true)}
            >
              পরিবেশনা
              <svg
                className="h-5 w-5 flex-none text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {/* <!--
          'Product' flyout menu, show/hide based on flyout menu state.

          Entering: "transition ease-out duration-200"
            From: "opacity-0 translate-y-1"
            To: "opacity-100 translate-y-0"
          Leaving: "transition ease-in duration-150"
            From: "opacity-100 translate-y-0"
            To: "opacity-0 translate-y-1"
        --> */}
            <div
              ref={dropdownMenuRef}
              className={classNames({
                "opacity-0 translate-y-2 pointer-events-none":
                  !isDropdownMenuOpen,
                "opacity-100 translate-y-0": isDropdownMenuOpen,
                "transition duration-300 absolute -left-8 p-2 top-full z-10 mt-3 w-screen max-w-sm overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-gray-900/5": true,
              })}
            >
              <div className="border border-gray-900/5 bg-gray-50 rounded-lg overflow-hidden">
                {[
                  {
                    title: "অ্যালবাম",
                    excerpt: "আমাদের সব অ্যালবাম",
                    icon: <BsCollection className="h-5 w-5" />,
                    iconClassname:
                      "bg-teal-200/30 text-teal-500 border-teal-200",
                    href: "/albums",
                  },
                  {
                    title: "অডিও",
                    excerpt: "আমাদের সব অডিও",
                    icon: <BsVolumeUp className="h-5 w-5" />,
                    iconClassname:
                      "bg-orange-200/30 text-orange-500 border-orange-200",
                    href: "/audio",
                  },
                  {
                    title: "ভিডিও",
                    excerpt: "আমাদের সব ভিডিও",
                    icon: <BsCameraReels className="h-5 w-5" />,
                    iconClassname: "bg-red-200/30 text-red-500 border-red-200",
                    href: "/videos",
                  },
                  {
                    title: "লিরিক্স",
                    excerpt: "আমাদের সব লিরিক্স",
                    icon: <BsJournalText className="h-5 w-5" />,
                    iconClassname:
                      "bg-yellow-200/30 text-yellow-500 border-yellow-200",
                    href: "/lyrics",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="group relative flex items-center gap-x-6 px-4 py-3 text-sm leading-6 hover:bg-gray-100"
                  >
                    <div
                      className={`flex h-10 w-10 flex-none items-center justify-center rounded-lg ${item.iconClassname} border`}
                    >
                      {item.icon}
                    </div>
                    <div className="flex-auto">
                      <Link
                        href={item.href}
                        className="block font-semibold text-gray-900"
                      >
                        {item.title}
                        <span className="absolute inset-0"></span>
                      </Link>
                      <p className="text-gray-600">{item.excerpt}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {[
            {
              title: "পরিচালকবৃন্দ",
              href: "/directors",
            },
            {
              title: "শিল্পীগন",
              href: "/profiles",
            },
            {
              title: "অর্জনসমূহ",
              href: "/achievements",
            },
          ].map((item) => (
            <Link
              href={item.href}
              key={item.title}
              className={classNames({
                "text-teal-600": currentPath === item.href,
                "text-sm font-semibold leading-6 text-gray-900": true,
              })}
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/about"
            className={classNames({
              "text-teal-600": currentPath === "/about",
              "text-sm font-semibold leading-6 text-gray-900": true,
            })}
          >
            পরিচিতি
          </Link>
        </div>
      </nav>
      {/* <!-- Mobile menu, show/hide based on menu open state. --> */}
      <div className="lg:hidden" role="dialog" aria-modal="true">
        {/* <!-- Background backdrop, show/hide based on slide-over state. --> */}
        <div className="fixed inset-0 z-10"></div>
        <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <div className="-mx-3">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    aria-controls="disclosure-1"
                    aria-expanded="false"
                  >
                    Product
                    {/* <!--
                  Expand/collapse icon, toggle classes based on menu open state.

                  Open: "rotate-180", Closed: ""
                --> */}
                    <svg
                      className="h-5 w-5 flex-none"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  {/* <!-- 'Product' sub-menu, show/hide based on menu state. --> */}
                  <div className="mt-2 space-y-2" id="disclosure-1">
                    <a
                      href="#"
                      className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Analytics
                    </a>
                    <a
                      href="#"
                      className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Engagement
                    </a>
                    <a
                      href="#"
                      className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Security
                    </a>
                    <a
                      href="#"
                      className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Integrations
                    </a>
                    <a
                      href="#"
                      className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Automations
                    </a>
                    <a
                      href="#"
                      className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Watch demo
                    </a>
                    <a
                      href="#"
                      className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Contact sales
                    </a>
                  </div>
                </div>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Marketplace
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Company
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
