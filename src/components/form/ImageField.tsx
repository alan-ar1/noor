"use client";

import type { OurFileRouter } from "@/app/api/uploadthing/core";
import { UploadButton } from "@uploadthing/react";
import Image from "next/image";
import { useState } from "react";

export default function ImageField({ imgSrc, setImgSrc }: any) {
  return (
    <div className="flex flex-col items-center">
      <UploadButton<OurFileRouter, "imageUploader">
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          if (res && res[0]) {
            setImgSrc(res[0].url);
            console.log(res[0].url);
          }
        }}
        onUploadError={(error: Error) => {
          alert(`ERROR! ${error.message}`);
        }}
        appearance={{
          button:
            "ut-ready:bg-violet ut-uploading:cursor-not-allowed p-0 text-sm bg-red-500 bg-none after:bg-orange-400",
          container: "w-full rounded-md border-main bg-main text-main",
          allowedContent: "flex flex-col items-center justify-center text-main",
        }}
      />
      <input
        className="w-0 h-0 absolute p-0 opacity-0 pointer-events-none"
        name="imgPath"
        required
        value={imgSrc}
      />

      {imgSrc ? (
        <div className="h-[175px] border-2 border-secondary border-dashed w-3/4">
          <Image src={imgSrc} width={306} height={185} alt="imgg" />
        </div>
      ) : (
        <div className="h-[175px] border-2 border-secondary border-dashed w-3/4"></div>
      )}
    </div>
  );
}
