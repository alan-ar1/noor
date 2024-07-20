import React from "react";
import { WiDirectionUpRight } from "react-icons/wi";

export default function SlideRedirect() {
  return (
    <div className="absolute flex items-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-opacity-30 backdrop-blur-3xl bg-secondry pr-2 right-3 top-3 rounded-lg">
      <span className="text-white pb-1 text-[14px]  sm:text-[17px]   font-bold">
        زیاتر بخوێنەوە
      </span>
      <WiDirectionUpRight
        className="leading-[1px] mr-[-7px] pt-1 text-white"
        size={35}
      />
    </div>
  );
}
