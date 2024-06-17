import React, { useState } from "react";
import { StoryBookData } from "../../types/storybooktypes";
import BookPageTopNav from "./bookpagetopnav";

interface BookPageProps {
  curPage: StoryBookData;
  prevBtnHandler: () => void;
  nextBtnHandler: () => void;
  leftArrowFlag: boolean;
  rightArrowFlag: boolean;
  endStoryFlag: boolean;
}

export default function BookPageComponent({
  curPage,
  prevBtnHandler,
  nextBtnHandler,
  leftArrowFlag,
  rightArrowFlag,
  endStoryFlag,
}: BookPageProps): React.JSX.Element {
  const [disableTalkingHeadFlag, setDisableTalkingHeadFlag] = useState<boolean>(false);
  const [hideTalkingHeadFlag, setHideTalkingHeadFlag] = useState<boolean>(false);

  const toggleDisableTalkingHead = () => {
    setDisableTalkingHeadFlag((prev) => !prev);
  };

  const toggleHideTalkingHead = () => {
    setHideTalkingHeadFlag((prev) => !prev);
  };

  return (
    <div className="w-full h-full relative px-14 pt-7 pb-[2rem] flex flex-col justify-center items-center">
      {/* talkinghead */}
      {!disableTalkingHeadFlag && (
        <div
          className={`absolute lg:w-64 lg:h-64 lg:top-5 lg:left-5 md:w-44 md:h-44 md:top-10 md:left-10 sm:w-24 sm:h-24 sm:top-24 sm:left-24 w-14 h-14 top-24 left-16 rounded-full overflow-hidden ${hideTalkingHeadFlag ? "" : "shadow-2xl"}`}
        >
          <video src={curPage.talkinghead} autoPlay className={hideTalkingHeadFlag ? "opacity-0" : ""} />
        </div>
      )}

      {/* navigation bar */}
      <BookPageTopNav
        toggleHideTalkingHead={toggleHideTalkingHead}
        toggleDisableTalkingHead={toggleDisableTalkingHead}
        hideTalkingHeadFlag={hideTalkingHeadFlag}
        disableTalkingHeadFlag={disableTalkingHeadFlag}
      />

      <div className="w-full flex flex-row justify-between items-end">
        {/* prev btn */}
        <button
          onClick={prevBtnHandler}
          disabled={!leftArrowFlag || endStoryFlag}
          className="mr-4 px-4 py-2 opacity-80 disabled:opacity-0 hover:scale-110 transition"
        >
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
        <button
          onClick={nextBtnHandler}
          disabled={!rightArrowFlag && endStoryFlag}
          className="ml-4 px-4 py-2 opacity-80 disabled:opacity-0 hover:scale-110 transition"
        >
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
