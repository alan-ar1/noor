"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

interface PaginationProps {
  totalPages: number;
}

export default function Pagination({ totalPages }: PaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentPage = +(searchParams.get("page") || "1");

  const changePage = useCallback(
    (pageNumber: number) => {
      const newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.set("page", pageNumber.toString());
      router.replace(`/posts?${newSearchParams.toString()}`);
    },
    [router, searchParams]
  );

  const renderPageNumbers = () => {
    const pageNumbers = [];

    pageNumbers.push(
      <button
        key="prev"
        onClick={() => changePage(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="w-9 h-9 sm:w-10 sm:h-10 text-[16px] sm:text-lg  flex items-center justify-center rounded-md ml-2 border-main border-solid border-2 text-noor disabled:opacity-50"
      >
        &lt;
      </button>
    );

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - 1 && i <= currentPage + 1)
      ) {
        pageNumbers.push(
          <button
            key={i}
            onClick={() => changePage(i)}
            className={`w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-md text-[16px] sm:text-lg 
              ${
                currentPage === i
                  ? "border-main border-solid border-2 text-secondry bg-secondry "
                  : "border-main border-solid border-2 text-noor "
              }`}
          >
            {i}
          </button>
        );
      } else if (i === currentPage - 2 || i === currentPage + 2) {
        pageNumbers.push(
          <span
            key={i}
            className="w-10 h-10 text-main flex items-center justify-center"
          >
            ...
          </span>
        );
      }
    }

    pageNumbers.push(
      <button
        key="next"
        onClick={() => changePage(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="w-9 h-9 sm:w-10 sm:h-10 text-[16px] flex items-center justify-center rounded-md ml-2 border-main border-solid border-2 text-noor disabled:opacity-50"
      >
        &gt;
      </button>
    );

    return pageNumbers;
  };

  return (
    <div className="flex justify-center items-center space-x-2 my-4">
      {renderPageNumbers()}
    </div>
  );
}
