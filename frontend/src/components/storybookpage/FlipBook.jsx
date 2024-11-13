import { useEffect, useRef, useState } from "react";
import StoryBookHeader from "./StoryBookHeader";
import { Image } from "./Image";
import { Text } from "./Text";
import { useTalkinghead } from "../../hooks/useTalkinghead";
import * as S from "../../styles/components/storybookpage/FlipBook.style";

export default function FlipBook({
  curPage,
  prevBtnHandler,
  nextBtnHandler,
  storyBooks,
  isDarkness,
}) {
  const [bookChange, setBookChange] = useState("");
  const bookRef = useRef(null);

  const {
    disableTalkingHeadFlag,
    hideTalkingHeadFlag,
    toggleDisableTalkingHead,
    toggleHideTalkingHead,
  } = useTalkinghead();

  useEffect(() => {
    if (bookRef?.current?.pageFlip()?.flip) {
      if (bookChange !== "flipping") {
        bookRef.current.pageFlip().flip(curPage.page * 2 - 2);
      }
    }
  }, [bookChange, curPage]);

  return (
    <S.FlipBookLayout $isDarkness={isDarkness}>
      <S.TalkingheadBox $flag={hideTalkingHeadFlag || disableTalkingHeadFlag}>
        {!disableTalkingHeadFlag && (
          <video src={curPage.talkinghead} autoPlay />
        )}
      </S.TalkingheadBox>
      <StoryBookHeader
        toggleHideTalkingHead={toggleHideTalkingHead}
        toggleDisableTalkingHead={toggleDisableTalkingHead}
        hideTalkingHeadFlag={hideTalkingHeadFlag}
        disableTalkingHeadFlag={disableTalkingHeadFlag}
      />

      <S.HtmlFlipBook
        width={500}
        height={600}
        showCover={false}
        showPageCorners={false}
        usePortrait={false}
        startZIndex={30}
        useMouseEvents={false}
        disableFlipByClick={true}
        startPage={curPage.page * 2 - 2}
        ref={bookRef}
        onFlip={() => {
          bookRef?.current?.pageFlip()?.flip(curPage.page * 2 - 2);
        }}
        onChangeState={(e) => setBookChange(e.data)}
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
                text={storyBook.content}
              />
            );
          }
          return pages;
        })()}
      </S.HtmlFlipBook>
    </S.FlipBookLayout>
  );
}
