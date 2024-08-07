import { useEffect, useRef, useState } from "react";

export default function TagAddForm({ setTags, showPopUp, setShowPopUp }: any) {
  const [loading, setLoading] = useState(false);
  const [tag, setTag] = useState({});
  const formRef = useRef<HTMLFormElement>(null);

  const resetForm = () => {
    if (formRef.current) {
      formRef.current.reset();
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
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ option: tag }),
      };
      const newTagRes: any = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/tags`,
        requestOptions
      );
      const newTag = await newTagRes.json();
      setShowPopUp(false);
      resetForm();
      setTags((prevTags: any) => [...prevTags, newTag.tag]);
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
      <h2 className="text-center text-green-400 font-bold">Add Todo</h2>
      <label htmlFor="todo" className=" px-1 text-main">
        تایتڵ
      </label>
      <input
        required
        onChange={(e) => {
          setTag({ label: e.target.value, value: e.target.value });
        }}
        type="text"
        name="title"
        className="outline-none text-main rounded-lg border-secondary bg-main border-2 h-10 p-2"
      />
      <button
        className={`bg-secondry h-10 w-62 p-2 mt-10 rounded text-white font-bold`}
        type="submit"
        disabled={loading}
      >
        {loading ? "زیادکردن..." : "تاگ زیادبکە"}
      </button>
    </form>
  );
}
