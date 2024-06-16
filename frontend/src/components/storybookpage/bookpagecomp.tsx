import React from "react";
import { StoryBookData } from "../../types/storybooktypes";

interface BookPageProps {
  curPage: StoryBookData;
  prevBtnHandler: () => void;
  nextBtnHandler: () => void;
  leftArrowFlag: boolean;
  rightArrowFlag: boolean;
}

export default function BookPageComponent({
  curPage,
  prevBtnHandler,
  nextBtnHandler,
  leftArrowFlag,
  rightArrowFlag,
}: BookPageProps): React.JSX.Element {
  return (
    <div className="w-full h-full absolute px-14 pt-7 pb-[2rem] flex flex-col justify-center items-center">
      <div className="w-full flex flex-row justify-between items-end">
        {/* prev btn */}
        <button onClick={prevBtnHandler} disabled={!leftArrowFlag} className="mr-4 px-4 py-2 opacity-80 disabled:opacity-50 ">
          <img src="/img/right-arrow.png" alt="previous page button" className="w-20 h-14 rotate-180" />
        </button>
        {/* storybook image */}
        <div className="w-1/2 h-full flex justify-center items-end">
          <img
            src={curPage.image}
            alt="storybook"
            className="max-w-lg max-h-lg overflow-hidden rounded-2xl shadow-2xl shadow-stone-600 object-contain"
          />
        </div>
        {/* next btn */}
        <button onClick={nextBtnHandler} disabled={!rightArrowFlag} className="ml-4 px-4 py-2 opacity-80 disabled:opacity-50 ">
          <img src="/img/right-arrow.png" alt="next page button" className="w-20 h-14" />
        </button>
      </div>

      {/* storybook content */}
      <div className="w-full bg-custom-pink flex justify-center items-center rounded-3xl shadow-2xl shadow-stone-600 mt-7">
        <div className="m-10">
          <p className="text-xl break-words">{curPage.content}</p>
        </div>
      </div>
    </div>
  );
}
