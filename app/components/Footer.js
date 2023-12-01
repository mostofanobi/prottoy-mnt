import React from "react";
import Link from "next/link";
import { BsFacebook, BsInstagram, BsTelegram, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="mx-auto container px-6 py-8 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <Link
            href="https://www.facebook.com/prottoy.culture"
            passHref={true}
            target="_blank"
            className="text-gray-400 hover:text-blue-600"
          >
            <BsFacebook className="h-6 w-6" />
          </Link>
          <Link
            href="https://www.youtube.com/@ProttoyShilpiGoshti"
            passHref={true}
            target="_blank"
            className="text-gray-400 hover:text-red-500"
          >
            <BsYoutube className="h-6 w-6" />
          </Link>
          <Link
            href="https://t.me/prottoyshilpigosthi"
            passHref={true}
            target="_blank"
            className="text-gray-400 hover:text-sky-500"
          >
            <BsTelegram className="h-6 w-6" />
          </Link>
          <Link
            href="https://www.instagram.com/prottoyshilpigoshti"
            passHref={true}
            target="_blank"
            className="text-gray-400 hover:text-pink-500"
          >
            <BsInstagram className="h-6 w-6" />
          </Link>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center leading-5 text-gray-800">
            কপিরাইট &copy; ২০২৩{" "}
            <span className="text-teal-600">প্রত্যয় শিল্পী গোষ্ঠি</span>, সমস্ত
            অধিকার সংরক্ষিত.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
