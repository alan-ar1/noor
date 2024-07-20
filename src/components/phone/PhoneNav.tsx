"use client";

import Link from "next/link";
import { useState } from "react";
import { FaHome } from "react-icons/fa";
import { RiMenu4Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

export default function PhoneNav() {
  const [showPhoneNav, setShowPhoneNav] = useState(false);
  return (
    <>
      <div
        onClick={() => setShowPhoneNav(true)}
        className="bg-violet sm:hidden p-1 rounded-md cursor-pointer"
      >
        <RiMenu4Fill size={25} />
      </div>
      <div
        onClick={() => setShowPhoneNav(false)}
        className={`w-full ${
          !showPhoneNav ? "opacity-0 pointer-events-none" : "opacity-65"
        } transition-all duration-500 h-screen fixed left-0 bottom-0 bg-black group:opacity-70 z-10`}
      ></div>
      <nav
        className={`w-[200px] mr-[-14px] ${
          !showPhoneNav ? "right-[-200px]" : "right-0"
        }   transition-all duration-500 group top-0 bottom-0 fixed bg-secondry z-20`}
      >
        <RxCross2 />
        <ul className="gap-4 mt-4 flex pr-6 flex-col">
          <li>
            <Link href={"/"} className="flex gap-1 items-center">
              <FaHome />
              <span>سەرەتا</span>
            </Link>
          </li>
          <li>
            <Link href={"/posts"}>پۆستەکان</Link>
          </li>
          <li>
            <Link href={"/sunna"}>سونەتەکان</Link>
          </li>
          <li>
            <Link href={"/ayat"}>ئایەتەکان</Link>
          </li>
          <li>
            <Link href={"/hadiths"}>فەرموودەکان</Link>
          </li>
          <li>
            <Link href={"/articles"}>وتارەکان</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
