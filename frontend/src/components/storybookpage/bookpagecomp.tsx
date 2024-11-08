import React, { LegacyRef, useEffect, useRef, useState } from "react";
import { StoryBookData } from "../../types/storybooktypes";
import BookPageTopNav from "./bookpagetopnav";
import HTMLFlipBook from "react-pageflip";

const Image = React.forwardRef(
  (
    props: { image: string; onClick: () => void },
    ref: LegacyRef<HTMLDivElement>
  ) => {
    return (
      <div ref={ref} data-density="hard">
        <div
          onClick={props.onClick}
          className="w-full h-full flex justify-center items-center p-8"
          style={{
            backgroundImage: "url('/img/paper.jpg')",
            backgroundSize: "cover",
          }}
        >
          <div className="rounded-2xl shadow-lg overflow-hidden">
            <img src={props.image} alt="storybook" />
          </div>
        </div>
      </div>
    );
  }
);

const Text = React.forwardRef(
  (
    props: { text: string; page: string; onClick: () => void },
    ref: LegacyRef<HTMLDivElement>
  ) => {
    return (
      <div ref={ref} data-density="hard">
        <div
          onClick={props.onClick}
          className="w-full h-full p-8 flex justify-center items-center"
          style={{
            backgroundImage: "url('/img/paper.jpg')",
            backgroundSize: "cover",
          }}
        >
          <div>
            <p className="text-xl">{props.text}</p>
          </div>
          <p className="text-sm absolute bottom-5 left-5">
            {props.page}(debug)
          </p>
        </div>
      </div>
    );
  }
);

interface BookPageProps {
  curPage: StoryBookData;
  prevBtnHandler: () => void;
  nextBtnHandler: () => void;
  storyBooks: StoryBookData[];
}

function BookPageComponent({
  curPage,
  prevBtnHandler,
  nextBtnHandler,
  storyBooks,
}: BookPageProps): JSX.Element {
  const [disableTalkingHeadFlag, setDisableTalkingHeadFlag] =
    useState<boolean>(false);
  const [hideTalkingHeadFlag, setHideTalkingHeadFlag] =
    useState<boolean>(false);

  const [bookChange, setBookChange] = useState<string>("");
  const bookRef = useRef();

  const toggleDisableTalkingHead = () => {
    setDisableTalkingHeadFlag((prev) => !prev);
  };

  const toggleHideTalkingHead = () => {
    setHideTalkingHeadFlag((prev) => !prev);
  };

  useEffect(() => {
    if (bookRef?.current?.pageFlip()?.flip) {
      console.log(`curPage: ${curPage.page}`);
      if (bookChange !== "flipping") {
        bookRef.current.pageFlip().flip(curPage.page * 2 - 2);
      }
    }
  }, [bookChange, curPage]);

  useEffect(() => {
    console.log(`state: ${bookChange}`);
  }, [bookChange]);

  return (
    <div className="w-full h-full relative px-14 pt-7 pb-[2rem] flex flex-col justify-center items-center">
      {!disableTalkingHeadFlag && (
        <div
          className={`z-40 absolute lg:w-64 lg:h-64 lg:bottom-5 lg:right-5 md:w-44 md:h-44 md:bottom-10 md:right-10 sm:w-24 sm:h-24 sm:bottom-24 sm:right-24 w-14 h-14 bottom-24 right-16 rounded-full overflow-hidden ${
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
        width={500}
        height={600}
        showCover={false}
        showPageCorners={false}
        usePortrait={false}
        startZIndex={30}
        useMouseEvents={false} // 기본 클릭 이벤트 비활성화
        disableFlipByClick={true} // 클릭하면 플립 이벤트 발생하던거 비활성화
        startPage={curPage.page * 2 - 2} // 시작 페이지: 트리구조 인덱스에 맞게 조절
        ref={bookRef}
        onFlip={() => {
          console.log(`flip: ${curPage.page * 2 - 2}`);
          bookRef?.current?.pageFlip()?.flip(curPage.page * 2 - 2);
          // 여기서 안 해주면 12 -> 14 페이지를 가야 할 때, 12 -> 14 -> 13과 같은 부작용이 발생함
          // 아마 curPage 상태 변경 -> useEffect 실행 onFlip 이벤트 핸들러가 받고 이상한 동작으로 판단하고 원래대로 돌리는? 건지..
        }}
        onChangeState={(e) => setBookChange(e.data)}
        className="shadow-xl"
      >
        {(() => {
          const pages = [];
          for (let i = 0; i < storyBooks.length; i += 1) {
            const storyBook = storyBooks[i];

            pages.push(
              <Image
                onClick={() => {
                  if (bookChange !== "flipping") {
                    prevBtnHandler();
                  }
                }}
                key={`${i}-image`}
                image={storyBook.image}
              />
            );
            pages.push(
              <Text
                onClick={() => {
                  if (bookChange !== "flipping") {
                    nextBtnHandler();
                  }
                }}
                key={`${i}-text`}
                page={storyBook.page.toString()}
                text={storyBook.content}
              />
            );
          }
          return pages;
        })()}
      </HTMLFlipBook>
    </div>
  );
}

export default BookPageComponent;
