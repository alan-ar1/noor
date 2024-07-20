"use client";

import Spinner from "@/components/Spinner";

export default function loading() {
  return (
    <div className="absolute flex h-[150%] justify-center items-center bg-opacity-30 backdrop-blur-3xl bg-white pr-2 right-0 top-0 left-0 bottom-0 rounded-lg">
      <Spinner />;
    </div>
  );
}
