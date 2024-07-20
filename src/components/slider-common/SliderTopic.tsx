import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function SliderTopic({ topic, path }: SliderTopicProps) {
  return (
    <div className="flex mb-3 items-center justify-between px-1">
      <h1 className="text-main font-bold text-lg sm:text-xl"> {topic}</h1>
      <Link href={path}>
        <div className="flex items-center gap-1">
          <span className="text-main text-sm">بینینی گشتی</span>

          <FaArrowLeft className="text-main mt-1" />
        </div>
      </Link>
    </div>
  );
}

interface SliderTopicProps {
  topic: string;
  path: string;
}
