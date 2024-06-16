import React from "react";
import { StoryBookData } from "../../types/storybooktypes";

interface SelectPageProps {
  selectPage: (StoryBookData | undefined)[];
  setCurPage: React.Dispatch<React.SetStateAction<StoryBookData>>;
  setSelectFlag: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SelectPageComponent({ selectPage, setCurPage, setSelectFlag }: SelectPageProps): React.JSX.Element {
  const selectPageHandler = (selectedPage: StoryBookData | undefined) => {
    if (selectedPage) {
      setCurPage(selectedPage);
      setSelectFlag(false);
    }
  };

  return (
    <div className="w-full h-full flex absolute px-14 pt-7 pb-[5rem]">
      <div>
        <img src={selectPage[0]?.image} />
        <div
          className="bg-custom-pink w-11/12 h-52 flex justify-center items-center mt-10 rounded-3xl shadow-2xl shadow-stone-600 overflow-hidden"
          onClick={() => {
            selectPageHandler(selectPage[0]);
          }}
        >
          <div className="m-10">
            <p className="text-xl break-words">{selectPage[0]?.choice}</p>
          </div>
        </div>
      </div>
      <div>
        <img src={selectPage[1]?.image} />
        <div
          className="bg-custom-pink w-11/12 h-52 flex justify-center items-center mt-10 rounded-3xl shadow-2xl shadow-stone-600 overflow-hidden"
          onClick={() => {
            selectPageHandler(selectPage[1]);
          }}
        >
          <div className="m-10">
            <p className="text-xl break-words">{selectPage[1]?.choice}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
