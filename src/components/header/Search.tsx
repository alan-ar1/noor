"use client";

import { useEffect, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchSearchResult() {
      // const res;
    }

    fetchSearchResult();
  }, [searchTerm, setSearchTerm]);
  return (
    <div>
      <form action="">
        <div className="bg-violet sm:bg-main items-center p-1 flex rounded-md">
          <IoSearchSharp className="text-white sm:text-main" size={25} />
          <input
            placeholder="گەڕان..."
            className="bg-transparent hidden sm:block font-[500] placeholder-main  placeholder-opacity-45 w-[250px] text-[18px] py-[8px] px-1 text-main outline-none"
            type="text"
          />
        </div>
      </form>
    </div>
  );
}
