"use client";

import { CSSProperties } from "react";
import { BeatLoader } from "react-spinners";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

function Spinner() {
  return (
    <div className="absolute flex h-[150%] justify-center items-center bg-opacity-30 backdrop-blur-3xl bg-white pr-2 right-0 top-0 left-0 bottom-0 rounded-lg">
      <div className="sweet-loading min-h-[600px]">
        <BeatLoader size={20} color="#4a264f" />
      </div>
    </div>
  );
}

export default Spinner;
