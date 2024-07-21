"use client";
import { useEffect, useRef, useState } from "react";

export default function TagEditForm({
  tag,
  setTags,
  showPopUp,
  setShowPopUp,
}: any) {
  const [loading, setLoading] = useState(false);
  const [inputTag, setInputTag] = useState({});

  const selectRef: any = useRef(null);

  const formRef = useRef<HTMLFormElement>(null);

  const resetForm = () => {
    if (formRef.current) {
      formRef.current.reset();
      if (selectRef.current) {
        selectRef.current.setValue([]);
      }
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
          option: inputTag,
          tagId: tag._id,
        }),
      };
      const updatedTagRes = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/tags`,
        requestOptions
      );
      const updatedTag = await updatedTagRes.json();
      setShowPopUp(false); // Close the popup after successful submission
      setTags((prevTags: any) =>
        prevTags.map((prevTag: any) =>
          prevTag._id === updatedTag.tag._id ? updatedTag.tag : prevTag
        )
      );
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
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/tags?tagId=${tag._id}`,
        requestOptions
      );
      const deletedPost = await updatedPostRes.json();
      setShowPopUp(false);
      resetForm();
      setTags((prevTags: any) =>
        prevTags.filter((prevTag: any) => prevTag._id !== tag._id)
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
      className="flex flex-col gap-2 !ltr"
    >
      <h2 className="text-center text-green-400 font-bold">Add Todo</h2>
      <label htmlFor="todo" className=" px-1 text-main">
        تایتڵ
      </label>
      <input
        onChange={(e) => {
          setInputTag({ label: e.target.value, value: e.target.value });
        }}
        required
        type="text"
        name="option"
        defaultValue={tag.option.label}
        className="outline-none text-main rounded-lg border-secondary bg-main border-2 h-10 p-2"
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
