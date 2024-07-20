import PostEditForm from "../form/PostEditForm";
import EditForm from "../form/PostEditForm";
import PostForm from "../form/PostEditForm";

export default function NewPopUp({ showPopUp, setShowPopUp, children }: any) {
  return (
    <div>
      <div
        onClick={() => {
          setShowPopUp(!showPopUp);
        }}
        className={`bg-black left-0 right-0 top-0 bottom-0 ${
          !showPopUp ? "hidden" : ""
        } opacity-60 fixed`}
      ></div>
      <div
        className={`bg-main max-w-96 w-4/5 left-1/2 ${
          !showPopUp ? "hidden" : ""
        } translate-x-[-50%] rounded-lg top-1/2 translate-y-[-50%] p-2  fixed`}
      >
        {children}
      </div>
    </div>
  );
}
