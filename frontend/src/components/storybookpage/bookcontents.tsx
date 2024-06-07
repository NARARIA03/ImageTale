import React, { useState } from "react";
import { StoryBook } from "../../types/storybooktypes";

interface BookContentsProps {
  storyBookData: StoryBook;
}

export default function BookContents({
  storyBookData,
}: BookContentsProps): React.JSX.Element {
  const [curIdx, setCurIdx] = useState<number>(0);

  const prevBtnHandler = () => {
    if (curIdx > 0) {
      setCurIdx(curIdx - 1);
    }
  };
  const nextBtnHandler = () => {
    if (curIdx < storyBookData.data.length - 1) {
      setCurIdx(curIdx + 1);
    }
  };

  const curItem = storyBookData.data[curIdx];

  return (
    <div className="w-full h-full absolute px-14 pt-7 pb-[5rem]">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <img
          src={`data:image/png;base64,${curItem.img}`}
          alt="storybook"
          className="rounded-2xl shadow-2xl shadow-stone-600 w-2/3"
        />
        <div className="bg-custom-pink w-11/12 h-52 flex justify-center items-center mt-10 rounded-3xl shadow-2xl shadow-stone-600 overflow-hidden">
          <div className="m-10">
            <p className="text-xl break-words">{curItem.content}</p>
          </div>
        </div>
      </div>
      <div className="flex mt-10">
        <button
          onClick={prevBtnHandler}
          disabled={curIdx === 0}
          className="mr-4 px-4 py-2 bg-gray-300 rounded-lg shadow-md disabled:opacity-50"
        >
          Prev
        </button>
        <button
          onClick={nextBtnHandler}
          disabled={curIdx === storyBookData.data.length - 1}
          className="ml-4 px-4 py-2 bg-gray-300 rounded-lg shadow-md disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
