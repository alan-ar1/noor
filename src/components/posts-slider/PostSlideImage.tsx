import Image from "next/image";
import { WiDirectionUpRight } from "react-icons/wi";
import SlideRedirect from "../slider-common/SlideRedirect";

export default function PostSlideImage({ imagePath }: PostSlideImageProps) {
  return (
    <>
      <div className="rounded-md">
        <Image
          className="rounded-md"
          src={imagePath}
          priority
          alt="Post image"
          width={500}
          height={20}
        />
      </div>
    </>
  );
}

interface PostSlideImageProps {
  imagePath: string;
}
