import Image from "next/image";
import { BsBook } from "react-icons/bs";
import { CgCalendar } from "react-icons/cg";
import { GrView } from "react-icons/gr";

export default function SlideFooter({
  views,
  timeToRead,
  date,
  user,
  userAvatarPath,
}: PostSlideFooterProps) {
  return (
    <div className="w-full flex justify-between  items-center mt-1">
      <div className="flex gap-2">
        <div className="flex items-center gap-1">
          <span className="text-main text-xs">{views}</span>
          <GrView className="text-main" size={15} />
        </div>
        <div className="flex items-center gap-1">
          <span className="text-main text-xs">{timeToRead}</span>
          <BsBook className="text-main mt-[1px]" size={15} />
        </div>
        <div className="flex items-center gap-1">
          <span className="text-main text-xs">{date}</span>
          <CgCalendar className="text-main" size={17} />
        </div>
      </div>
      <div className="flex gap-1 items-center">
        <span className="text-main text-xs">{user}</span>
        <Image
          className="rounded-sm"
          src={userAvatarPath}
          width={20}
          height={20}
          alt="pfp image"
        />
      </div>
    </div>
  );
}

interface PostSlideFooterProps {
  views: string;
  timeToRead: string;
  date: string;
  user: string;
  userAvatarPath: string;
}
