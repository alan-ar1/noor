import Link from "next/link";
import SlideRedirect from "../slider-common/SlideRedirect";
import PostSlideTags from "../slider-common/SlideTags";
import PostSlideImage from "./PostSlideImage";
import PostSlideTextContent from "./PostSlideTextContent";

export default function PostSlideContent({ posts, isNoteSlide }: any) {
  return (
    <>
      {posts.map((post: any, index: any) => (
        <Link
          key={index}
          href={`/posts/${post._id}`}
          className={`border-[1px] block  ${
            isNoteSlide ? " w-[47%]" : "max-w-36"
          } ${isNoteSlide ? "sm:w-[32%]" : "sm:max-w-48"} ${
            isNoteSlide ? "lg:w-[23%]" : "lg:max-w-60"
          }  ${isNoteSlide ? "sm:w-[32%]" : "sm:max-w-48"} ${
            isNoteSlide ? "xl:w-[19%]" : "xl:max-w-60"
          } hover:border-main backdrop-blur-3xl hover:border-opacity-50  transition-all duration-500 group relative bg-main rounded-md p-2 cursor-pointer`}
        >
          <SlideRedirect />
          <PostSlideImage imagePath={post.imgPath} />
          <PostSlideTextContent postTitle={post.title} postBody={post.body} />
          <PostSlideTags size={"11px"} tags={post.tags} />
          {/* <PostSlideFooter
            views={post.views}
            timeToRead={post.timeToRe}
            date={post.date}
            user={post.user}
            userAvatarPath={post.userAvatarPath}
          /> */}
        </Link>
      ))}
    </>
  );
}
