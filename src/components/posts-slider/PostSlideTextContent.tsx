export default function PostSlideTextContent({
  postTitle,
  postBody,
}: PostSlideContentProps) {
  return (
    <>
      <div className=" mt-2 ">
        <h3 className="text-main sm:text-lg text-[17px]">{postTitle} </h3>
      </div>

      <div>
        <p className="text-[11px] sm:text-xs text-gray-700 w-full line-clamp-2">
          {postBody}
        </p>
      </div>
    </>
  );
}

interface PostSlideContentProps {
  postTitle: string;
  postBody: string;
}
