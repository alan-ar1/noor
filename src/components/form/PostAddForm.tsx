"use client";
import { useEffect, useRef, useState } from "react";
import Field from "./Field";
import ImageField from "./ImageField";
import SelectField from "./SelectField";
import TextBoxField from "./TextBoxField";

export default function PostAddForm({
  showPopUp,
  setShowPopUp,
  setPosts,
  tags,
}: any) {
  const [loading, setLoading] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [imgSrc, setImgSrc] = useState("");

  const formRef = useRef<HTMLFormElement>(null);

  const resetForm = () => {
    if (formRef.current) {
      formRef.current.reset();
      setSelectedOptions([]);
      setImgSrc("");
    }
  };

  useEffect(() => {
    if (!showPopUp) {
      resetForm();
    }
  }, [showPopUp]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData(e.currentTarget);
      const payload = Object.fromEntries(formData);
      console.log("paylaodddd: \n" + formData);
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, tags: selectedOptions }),
      };
      const newPostRes = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/posts`,
        requestOptions
      );
      const newPost = await newPostRes.json();
      setShowPopUp(false); // Close the popup after successful submission
      resetForm(); // Reset the form after successful submission
      setPosts((posts: any) => [...posts, newPost.post]); // Add the new post to the list of posts
    } catch (error: any) {
      console.error("Error submitting form:", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 !ltr"
    >
      <Field title={""} />
      <TextBoxField body={""} />
      <ImageField imgSrc={imgSrc} setImgSrc={setImgSrc} imgPath={""} />
      <SelectField
        selectedOptions={selectedOptions}
        setSelectedOptions={setSelectedOptions}
        tags={tags}
      />
      <button
        className={`bg-secondry h-10 w-62 p-2 mt-10 rounded text-white font-bold`}
        type="submit"
        disabled={loading}
      >
        {loading ? "زیادکردن..." : "پۆست زیادبکە"}
      </button>
    </form>
  );
}
