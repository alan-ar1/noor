import SlideFooter from "./PostSlideFooter";
import SlideRedirect from "./SlideRedirect";
import SlideTags from "./SlideTags";

export default function SlideContent({ slides }: SlideContentProps) {
  return (
    <>
      {slides.map((slide, index) => (
        <div
          key={index}
          className="border-[1px] hover:border-main backdrop-blur-3xl hover:border-opacity-50  transition-all duration-500 group relative bg-main rounded-md w-64 p-2 cursor-pointer"
        >
          <SlideRedirect />
          <div className="line-clamp-4 text-main">{slide.postBody}</div>
          <SlideTags tags={slide.postTags} />
          <SlideFooter
            views={slide.views}
            timeToRead={slide.timeToRead}
            date={slide.date}
            user={slide.user}
            userAvatarPath={slide.userAvatarPath}
          />
        </div>
      ))}
    </>
  );
}

interface SlideContentProps {
  slides: {
    [key: string]: any;
  }[];
}
