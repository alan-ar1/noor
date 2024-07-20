"use client";
import { useEffect, useRef, useState } from "react";
import { MultiValue } from "react-select";
import Field from "./Field";
import ImageField from "./ImageField";
import SelectField from "./SelectField";
import TextBoxField from "./TextBoxField";

export default function PostEditForm({
  post,
  tags,
  setPosts,
  showPopUp,
  setShowPopUp,
}: any) {
  const [loading, setLoading] = useState(false);
  const [imgSrc, setImgSrc] = useState(post.imgPath);
  const [selectedOptions, setSelectedOptions] = useState(post.tags);

  const formRef = useRef<HTMLFormElement>(null);

  const resetForm = () => {
    if (formRef.current) {
      formRef.current.reset();
      setSelectedOptions(post.tags);
    }
  };

  useEffect(() => {
    if (!showPopUp) {
      resetForm();
    }
  }, [showPopUp]);

  const handlePatchSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData(e.currentTarget);
      const payload = Object.fromEntries(formData);
      console.log("paylaodddd: \n", formData);
      const requestOptions = {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...payload,
          tags: selectedOptions,
          postId: post._id,
        }),
      };
      const updatedPostRes = await fetch(
        `http://localhost:3000/api/posts`,
        requestOptions
      );
      const updatedPost = await updatedPostRes.json();
      console.log("updatedPost: \n" + updatedPost);
      setShowPopUp(false); // Close the popup after successful submission
      setPosts((prevPosts: any) =>
        prevPosts.map((prevPost: any) =>
          prevPost._id === post._id ? updatedPost.user : prevPost
        )
      ); // Add the new post to the list of posts
    } catch (error: any) {
      console.error("Error submitting form:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteSubmit = async () => {
    setLoading(true);

    try {
      const requestOptions = {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      };
      const updatedPostRes = await fetch(
        `http://localhost:3000/api/posts?postId=${post._id}`,
        requestOptions
      );
      const deletedPost = await updatedPostRes.json();
      setShowPopUp(false);
      setPosts((prevPosts: any) =>
        prevPosts.filter((prevPost: any) => prevPost._id !== post._id)
      ); // Add the new post to the list of posts
    } catch (error: any) {
      console.error("Error submitting form:", error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <form
      ref={formRef}
      onSubmit={handlePatchSubmit}
      className="flex flex-col gap-1 !ltr"
    >
      <Field title={post.title} />
      <TextBoxField body={post.body} />
      <ImageField
        imgSrc={imgSrc}
        setImgSrc={setImgSrc}
        imgPath={post.imgPath}
      />
      <SelectField
        tags={tags}
        selectedOptions={selectedOptions}
        setSelectedOptions={setSelectedOptions}
      />

      {!loading ? (
        <div className="flex w-full gap-2">
          <button
            className={`bg-secondry h-10 w-full p-2 mt-10 rounded text-white font-bold`}
            type="submit"
            disabled={loading}
          >
            سەیڤ
          </button>
          <button
            className={`bg-secondry h-10 w-full p-2 mt-10 rounded text-white font-bold`}
            type="button"
            disabled={loading}
            onClick={handleDeleteSubmit}
          >
            سڕینەوە
          </button>
        </div>
      ) : (
        <div className="text-center">loading...</div>
      )}
    </form>
  );
}
