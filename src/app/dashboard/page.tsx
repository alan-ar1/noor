"use client";
import Spinner from "@/components/Spinner";
import DashboardPosts from "@/components/dashboard/DashboardPosts";
import DashboardTags from "@/components/dashboard/DashboardTags";
import PostAddForm from "@/components/form/PostAddForm";
import TagAddForm from "@/components/form/TagAddForm";
import NewPopUp from "@/components/popup/NewPopUp";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";

export default function Dashboard() {
  const [posts, setPosts] = useState([]);
  const [tags, setTags] = useState([]);
  const [togglePage, setTogglePage] = useState("posts");
  const [showPopUp, setShowtPopUp] = useState(false);

  const { isLoaded, userId } = useAuth();

  const [loading, setLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (isLoaded && !userId) {
      router.push("/sign-in");
    }
  }, [isLoaded, userId, router]);

  useEffect(() => {
    setLoading(true);
    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/posts");
        const data = await response.json();
        setPosts(data);
      } catch (error: any) {
        console.error("Error fetching posts:", error.message);
      }
    };
    const fetchTags = async () => {
      try {
        const response = await fetch("/api/tags");
        const data = await response.json();
        setTags(data);
      } catch (error: any) {
        console.error("Error fetching posts:", error.message);
      }
      setLoading(false);
    };
    fetchPosts();
    fetchTags();
  }, [isLoaded, setLoading]);

  if (!isLoaded || !userId || loading) {
    return <Spinner />;
  }

  return (
    <div className="border-main m-auto border-solid max-w-96 h-screen border-x-2 px-2 py-2">
      {togglePage === "posts" ? (
        <NewPopUp post={[]} showPopUp={showPopUp} setShowPopUp={setShowtPopUp}>
          <PostAddForm
            tags={tags}
            setPosts={setPosts}
            showPopUp={showPopUp}
            setShowPopUp={setShowtPopUp}
          />
        </NewPopUp>
      ) : (
        <NewPopUp post={[]} showPopUp={showPopUp} setShowPopUp={setShowtPopUp}>
          <TagAddForm
            setTags={setTags}
            showPopUp={showPopUp}
            setShowPopUp={setShowtPopUp}
          />
        </NewPopUp>
      )}
      <div className="flex justify-between items-center">
        <div className="flex w-fit gap-3">
          <h1
            onClick={() => setTogglePage("posts")}
            className={`text-main cursor-pointer w-fit ${
              togglePage === "posts" ? "border-b-2" : ""
            } border-main`}
          >
            پۆستەکان
          </h1>
          <h1
            onClick={() => setTogglePage("tags")}
            className={`text-main cursor-pointer w-fit ${
              togglePage === "tags" ? "border-b-2" : ""
            } border-main`}
          >
            تاگەکان
          </h1>
        </div>

        <div onClick={() => setShowtPopUp(!showPopUp)}>
          <FaPlus className="text-main cursor-pointer" />
        </div>
      </div>

      {togglePage === "posts" ? (
        <DashboardPosts setPosts={setPosts} tags={tags} posts={posts} />
      ) : (
        <DashboardTags tags={tags} setTags={setTags} />
      )}
    </div>
  );
}
