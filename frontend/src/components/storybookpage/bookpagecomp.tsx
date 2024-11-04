import React, { LegacyRef, useState } from "react";
import { StoryBookData } from "../../types/storybooktypes";
import BookPageTopNav from "./bookpagetopnav";
import HTMLFlipBook from "react-pageflip";

const Image = React.forwardRef(
  (props: { image: string }, ref: LegacyRef<HTMLDivElement>) => {
    return (
      <div ref={ref}>
        <div
          className="w-full h-full p-8"
          style={{
            backgroundImage: "url('/img/paper.jpg')",
            backgroundSize: "cover",
          }}
        >
          <img src={props.image} alt="storybook" />
        </div>
      </div>
    );
  }
);

const Text = React.forwardRef(
  (props: { text: string }, ref: LegacyRef<HTMLDivElement>) => {
    return (
      <div ref={ref}>
        <div
          className="w-full h-full"
          style={{
            backgroundImage: "url('/img/paper.jpg')",
            backgroundSize: "cover",
          }}
        >
          <p>{props.text}</p>
        </div>
      </div>
    );
  }
);

interface BookPageProps {
  curPage: StoryBookData;
  storyBooks: StoryBookData[];
  onFlip: (index: number) => void;
}

function BookPageComponent({
  curPage,
  storyBooks,
  onFlip,
}: BookPageProps): JSX.Element {
  const [disableTalkingHeadFlag, setDisableTalkingHeadFlag] =
    useState<boolean>(false);
  const [hideTalkingHeadFlag, setHideTalkingHeadFlag] =
    useState<boolean>(false);

  const toggleDisableTalkingHead = () => {
    setDisableTalkingHeadFlag((prev) => !prev);
  };

  const toggleHideTalkingHead = () => {
    setHideTalkingHeadFlag((prev) => !prev);
  };

  const onFlipHandler = (flipEvent) => {
    console.log("onFlipHandler");
    console.log(flipEvent.data);
    onFlip(Math.floor(flipEvent.data / 2) + 1);
  };

  return (
    <div className="w-full h-full relative px-14 pt-7 pb-[2rem] flex flex-col justify-center items-center">
      {/* talkinghead */}
      {!disableTalkingHeadFlag && (
        <div
          className={`absolute lg:w-64 lg:h-64 lg:top-5 lg:left-5 md:w-44 md:h-44 md:top-10 md:left-10 sm:w-24 sm:h-24 sm:top-24 sm:left-24 w-14 h-14 top-24 left-16 rounded-full overflow-hidden ${
            hideTalkingHeadFlag ? "" : "shadow-2xl"
          }`}
        >
          <video
            src={curPage.talkinghead}
            autoPlay
            className={hideTalkingHeadFlag ? "opacity-0" : ""}
          />
        </div>
      )}

      <BookPageTopNav
        toggleHideTalkingHead={toggleHideTalkingHead}
        toggleDisableTalkingHead={toggleDisableTalkingHead}
        hideTalkingHeadFlag={hideTalkingHeadFlag}
        disableTalkingHeadFlag={disableTalkingHeadFlag}
      />

      <HTMLFlipBook
        width={400}
        height={400}
        showCover={false}
        startZIndex={30}
        onFlip={onFlipHandler}
      >
        {(() => {
          const pages = [];
          for (let i = 0; i < storyBooks.length; i += 1) {
            const storyBook = storyBooks[i];

            pages.push(<Image key={`${i}-image`} image={storyBook.image} />);
            pages.push(<Text key={`${i}-text`} text={storyBook.content} />);
          }
          return pages;
        })()}
      </HTMLFlipBook>
    </div>
  );
}

export default BookPageComponent;
