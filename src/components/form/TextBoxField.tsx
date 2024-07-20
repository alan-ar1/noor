export default function TextBoxField({ body }: any) {
  return (
    <>
      <label htmlFor="body" className="text-md px-1 text-main">
        ناوەڕۆک
      </label>
      <textarea
        required
        defaultValue={body}
        name="body"
        className="mb-2 outline-none text-sm text-main bg-main rounded-lg h-40 border-secondary border-2 p-2"
      />
    </>
  );
}
