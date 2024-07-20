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
    <div className="sweet-loading min-h-[600px]">
      <BeatLoader size={20} color="#4a264f" />
    </div>
  );
}

export default Spinner;
