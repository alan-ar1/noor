"use client";
import { useRouter, useSearchParams } from "next/navigation";

import { useEffect, useState } from "react";
import Select from "react-select";

export default function CustomSelect({ tags, def, endpoint }: any) {
  console.log("defffffff.....", def);

  const searchParams: any = useSearchParams();
  const page: any = +searchParams.get("page");
  console.log("searchParams", searchParams);

  const [selectOptions, setSelectedOptions]: any = useState(def);
  const router = useRouter();

  useEffect(() => {
    if (selectOptions.length) {
      if (page > 0) {
        router.replace(
          `/${endpoint}?page=${1}&tags=${selectOptions
            .map((el: any) => el.label)
            .toString()}`
        );
      } else {
        router.replace(
          `/${endpoint}?tags=${selectOptions
            .map((el: any) => el.label)
            .toString()}`
        );
      }
    }

    if (page && !selectOptions.length) {
      router.replace(`/${endpoint}?page=${page}`);
    }

    if (!page && !selectOptions.length) {
      router.replace(`/${endpoint}`);
    }
  }, [selectOptions, router]);
  return (
    <Select
      isMulti
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          backgroundColor: "#fff",
          borderColor: state.isFocused ? "#673592" : "#4a264f",
          boxShadow: state.isFocused ? "0 0 0 1px #673592" : "none",
          "&:hover": {
            borderColor: "#673592",
          },
        }),
        placeholder: (base) => ({
          ...base,
          color: "#4a264f77",
          fontSize: "16px",
          fontWeight: "400",
        }),
        option: (base, state) => ({
          ...base,
          backgroundColor: state.isSelected
            ? "#673592"
            : state.isFocused
            ? "#4a264f22"
            : "transparent",
          color: state.isSelected ? "white" : "#4a264f",
          "&:hover": {
            backgroundColor: "#4a264f33",
          },
        }),
        multiValue: (base) => ({
          ...base,
          backgroundColor: "#4a264f22",
        }),
        multiValueLabel: (base) => ({
          ...base,
          color: "#4a264f",
        }),
        multiValueRemove: (base) => ({
          ...base,
          color: "#4a264f",
          "&:hover": {
            backgroundColor: "#673592",
            color: "white",
          },
        }),
      }}
      options={tags}
      className="text-main"
      placeholder="تاگەکان دیاریبکە...."
      value={selectOptions}
      onChange={setSelectedOptions}
    />
  );
}
