// "use client";

export default function SlideTags({ tags, size }: PostSlideTagsProps) {
  // const router = useRouter();
  return (
    <div className="flex gap-1 flex-wrap mt-1">
      {tags.map((tag: any, index) => (
        <span
          key={index}
          className={`bg-opacity-70  text-secondry p-[3px] rounded-md bg-secondry text-[${size}]`}
        >
          #{tag.get("label")}
        </span>
      ))}
    </div>
  );
}

interface PostSlideTagsProps {
  tags: string[];
  size: any;
}
