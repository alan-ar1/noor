import SlideTags from "@/components/slider-common/SlideTags";
import Image from "next/image";
import Link from "next/link";
import Post from "../../../../models/postModel";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Noor",
  description:
    "نوور وێبسایتێکی قازانج نەویستە ئامانجمان بڵاوکردنەوەی زۆرترین زانیاریە دەربارەی ئاینی ئیسلام",
};

export default async function page({ params }: any) {
  const { postSlug } = params;

  try {
    const post: any = await Post.findOne({ _id: postSlug });
    const similarPosts: any = await Post.find({
      _id: { $ne: postSlug },
      tags: {
        $in: post.tags,
      },
    }).limit(5);

    return (
      <div className="text-neutral-600 flex flex-col md:flex-row gap-10 min-h-[600px] w-fit my-2 m-auto max-w-5xl  px-3">
        <div className="w-full md:max-w-[65%]">
          <h2 className="font-bold mb-2 text-main text-xl mr-1">
            {post.title}
          </h2>

          <div>
            <Image
              priority={true}
              width={5000}
              className="rounded-lg"
              height={300}
              src={post.imgPath}
              alt="post image"
            />
            <SlideTags tags={post.tags} size={"15px"} />
            <p className="mx-1 mt-2">{post.body}</p>
          </div>
        </div>
        <div className="md:max-w-full">
          <h2 className="text-main text-xl">بابەتی هاوشێوە</h2>
          <div>
            {similarPosts.map((post: any) => (
              <Link
                href={`/posts/${post._id}`}
                className="flex flex-row gap-1 mx-1 mt-6 w-full bg-neutral-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                key={post._id}
              >
                <div className="w-[100px] h-[100px] relative flex-shrink-0">
                  <Image
                    alt={`Cover image for ${post.title}`}
                    className="object-cover rounded-t-xl sm:rounded-l-xl sm:rounded-tr-none"
                    layout="fill"
                    src={post.imgPath}
                  />
                </div>
                <div className="p-1 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-[17px] font-semibold mb-[1px] text-neutral-800 line-clamp-1">
                      {post.title}
                    </h3>
                    <div className="w-full">
                      <p className="text-[13px] text-neutral-600 line-clamp-3">
                        {post.body}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  } catch (err: any) {
    console.log(err.message);
  }
}
