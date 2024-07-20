import { useState } from "react";
import PostEditForm from "../form/PostEditForm";
import NewPopUp from "../popup/NewPopUp";

export default function DashboardPosts({ posts, setPosts, tags }: any) {
  const [showPopUps, setShowPopUps] = useState(posts.map(() => false));
  const togglePopUp = (index: number) => {
    setShowPopUps((prevState: any) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };
  return (
    <div>
      <div className="overflow-scroll text-main ">
        {posts.map((post: any, index: any) => (
          <div key={post.body}>
            <NewPopUp
              showPopUp={showPopUps[index]}
              setShowPopUp={(value: any) => {
                setShowPopUps((prevState: any) => {
                  const newState = [...prevState];
                  newState[index] = value;
                  return newState;
                });
              }}
            >
              <PostEditForm
                tags={tags}
                showPopUp={showPopUps[index]}
                setShowPopUp={(value: any) => {
                  setShowPopUps((prevState: any) => {
                    const newState = [...prevState];
                    newState[index] = value;
                    return newState;
                  });
                }}
                setPosts={setPosts}
                post={post}
              />
            </NewPopUp>
            <div
              onClick={() => togglePopUp(index)}
              className="border-b-2 cursor-pointer border-main"
            >
              <div className="py-2">
                <h1 className="font-bold">{post.title}</h1>
                <p className="w-full text-xs line-clamp-2">{post.body}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
