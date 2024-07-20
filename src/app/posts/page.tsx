import PostSlideContent from "@/components/posts-slider/PostSlideContent";

import Pagination from "@/components/Pagination";
import Select from "@/components/Select";
import Post from "../../../models/postModel";
import Tag from "../../../models/tagModel";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Noor",
  description:
    "نوور وێبسایتێکی قازانج نەویستە ئامانجمان بڵاوکردنەوەی زۆرترین زانیاریە دەربارەی ئاینی ئیسلام",
};
export default async function PostsPage({ searchParams }: any) {
  try {
    const tags: any[] = await Tag.find();
    const searchable = searchParams.tags?.split(",");
    let page = Math.floor(+searchParams.page - 1);
    page = page < 0 ? 0 : page;

    let query: any;
    if (searchable) {
      query = {
        tags: {
          $all: searchable.map((tagLabel: any) => ({
            $elemMatch: { label: tagLabel },
          })),
        },
      };
    } else {
      query = {};
    }

    const countDocs = await Post.countDocuments(query);

    const pageNumbers =
      Math.floor(countDocs / 20) === 1 ? 2 : Math.floor(countDocs / 20) + 1;

    const posts: any = await Post.find(query)
      .limit(20)
      .skip(page * 20);

    return (
      <div className="w-full my-2 gap-2 max-w-7xl mx-auto px-3">
        <div className="min-h-[830px]">
          <div className="mb-4">
            <Select
              endpoint="posts"
              page={page}
              def={
                searchable
                  ? searchable.map((el: any) => {
                      return {
                        label: el,
                        value: el,
                      };
                    })
                  : []
              }
              tags={tags.map((tag: any) => tag.option)}
            />
          </div>
          <div className="flex flex-wrap justify-center max-w-7xl m-auto gap-2">
            <PostSlideContent
              isNoteSlide={true}
              className="!m-auto"
              posts={posts}
            />
          </div>
        </div>
        <Pagination totalPages={pageNumbers} />
      </div>
    );
  } catch (error) {
    console.error(error);
  }
}
