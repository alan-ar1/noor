import PostSlideContent from "@/components/posts-slider/PostSlideContent";
import SliderTopic from "@/components/slider-common/SliderTopic";
import SliderWrapper from "@/components/slider-common/SliderWrapper";

import Post from "../../models/postModel";

export default async function Home() {
  try {
    const posts: any = await Post.find();
    const hadith: any = await Post.find({
      tags: {
        $elemMatch: {
          label: "فەرموودەکان",
        },
      },
    });

    const ayah: any = await Post.find({
      tags: {
        $elemMatch: {
          label: "ئایەتەکان",
        },
      },
    });
    return (
      <div className="w-full flex flex-col gap-y-6 max-w-7xl m-auto px-3">
        <div className="mt-3">
          <SliderTopic path="/posts" topic="نوێترین پۆستەکان" />
          <SliderWrapper>
            <PostSlideContent posts={posts} />
          </SliderWrapper>
        </div>
        <div className="">
          <SliderTopic path="/posts" topic="فەرموودەکان" />
          <SliderWrapper>
            <PostSlideContent posts={hadith} />
          </SliderWrapper>
        </div>
        <div className="mb-3">
          <SliderTopic path="/posts" topic="ئایەتەکان" />
          <SliderWrapper>
            <PostSlideContent posts={ayah} />
          </SliderWrapper>
        </div>
      </div>
    );
  } catch (error) {
    return <div></div>;
  }
}
