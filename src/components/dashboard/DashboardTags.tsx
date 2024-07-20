import { useState } from "react";
import NewPopUp from "../popup/NewPopUp";
import TagEditForm from "../form/TagEditForm";

export default function DashboardTags({ tags, setTags }: any) {
  const [showPopUps, setShowPopUps] = useState(tags.map(() => false));
  const togglePopUp = (index: number) => {
    setShowPopUps((prevState: any) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };
  return (
    <div className="flex gap-3 mt-2 flex-wrap flex-row">
      {tags.map((tag: any, index: any) => (
        <div key={index}>
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
            <TagEditForm
              showPopUp={showPopUps[index]}
              setShowPopUp={(value: any) => {
                setShowPopUps((prevState: any) => {
                  const newState = [...prevState];
                  newState[index] = value;
                  return newState;
                });
              }}
              setTags={setTags}
              tag={tag}
            />
          </NewPopUp>
          <div className="cursor-pointer" onClick={() => togglePopUp(index)}>
            <div className="flex gap-1 flex-wrap mt-1">
              <span className="bg-opacity-70 flex gap-1 items-center p-[3px] rounded-md bg-secondry text-md">
                #{tag.option.label}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
