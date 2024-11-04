import React from "react";
import { StoryBookData } from "../../types/storybooktypes";

interface SelectPageProps {
  selectPage: (StoryBookData | undefined)[];
  setCurPage: React.Dispatch<React.SetStateAction<StoryBookData>>;
  setSelectFlag: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SelectPageComponent({
  selectPage,
  setCurPage,
  setSelectFlag,
}: SelectPageProps): React.JSX.Element {
  const selectPageHandler = (selectedPage: StoryBookData | undefined) => {
    if (selectedPage) {
      setCurPage(selectedPage);
      setSelectFlag(false);
    }
  };

  return (
    <div className="w-full h-full flex relative px-14 pt-7 pb-[2rem] justify-center items-center">
      <div className="h-full flex-1 mr-12">
        <div className="w-full flex justify-center items-end brightness-75">
          <div className="max-w-lg max-h-lg overflow-hidden rounded-2xl shadow-2xl shadow-stone-600 object-contain">
            <img src={selectPage[0]?.image} />
          </div>
        </div>
        <div className="w-full h-1/3 flex justify-center items-center">
          <div
            className="bg-custom-pink w-11/12 h-52 flex justify-center items-center mt-10 rounded-3xl shadow-2xl shadow-stone-600 overflow-hidden hover:scale-105 transition"
            onClick={() => {
              selectPageHandler(selectPage[0]);
            }}
          >
            <div className="m-10">
              <p className="text-xl break-words">{selectPage[0]?.choice}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-full flex-1 ml-12">
        <div className="w-full flex justify-center items-end brightness-75">
          <div className="max-w-lg max-h-lg overflow-hidden rounded-2xl shadow-2xl shadow-stone-600 object-contain">
            <img src={selectPage[1]?.image} />
          </div>
        </div>
        <div className="w-full h-1/3 flex justify-center items-center">
          <div
            className="bg-custom-pink w-11/12 h-52 flex justify-center items-center mt-10 rounded-3xl shadow-2xl shadow-stone-600 overflow-hidden hover:scale-105 transition "
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
    </div>
  );
}
