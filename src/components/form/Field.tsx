export default function Field({ title }: any) {
  return (
    <>
      <label htmlFor="todo" className=" px-1 text-main">
        تایتڵ
      </label>
      <input
        required
        type="text"
        name="title"
        defaultValue={title}
        className="outline-none text-main rounded-lg border-secondary bg-main border-2 h-10 p-2"
      />
    </>
  );
}
