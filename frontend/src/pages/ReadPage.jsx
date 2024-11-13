import { useLocation } from "react-router-dom";
import { useRef, useState } from "react";
import { useTalkinghead } from "../hooks/useTalkinghead";
import EndPopup from "../components/storybookpage/EndPopup";
import StoryBookHeader from "../components/storybookpage/StoryBookHeader";
import { Text } from "../components/storybookpage/Text";
import { Image } from "../components/storybookpage/Image";
import * as S from "../styles/pages/ReadPage.style";

export default function ReadPage() {
  const { state } = useLocation();
  const { myStoryBook } = state;

  const [curPage, setCurPage] = useState(myStoryBook.data[0]);
  const [endStoryFlag, setEndStoryFlag] = useState(false);
  const [bookChange, setBookChange] = useState("");
  const {
    disableTalkingHeadFlag,
    hideTalkingHeadFlag,
    toggleDisableTalkingHead,
    toggleHideTalkingHead,
  } = useTalkinghead();

  const bookRef = useRef(null);

  const prevBtnHandler = () => {
    if (bookChange !== "flipping") {
      const index = myStoryBook.data.indexOf(curPage);

      if (index < 1) return;
      setCurPage(myStoryBook.data[index - 1]);
      bookRef?.current?.pageFlip()?.flipPrev();
    }
  };

  const nextBtnHandler = () => {
    if (bookChange !== "flipping") {
      const index = myStoryBook.data.indexOf(curPage);

      if (index < myStoryBook.data.length - 1) {
        setCurPage(myStoryBook.data[index + 1]);
        bookRef?.current?.pageFlip()?.flipNext();
      } else setEndStoryFlag(true);
    }
  };

  return (
    <S.ReadPageLayout>
      {endStoryFlag && <EndPopup myStoryBook={myStoryBook} />}

      <S.FlipBookLayout $isDarkness={endStoryFlag}>
        <S.TalkingheadBox $flag={hideTalkingHeadFlag || disableTalkingHeadFlag}>
          {!disableTalkingHeadFlag && (
            <video src={curPage.talkinghead} autoPlay playsInline />
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
          ref={bookRef}
          onChangeState={(e) => setBookChange(e.data)}
        >
          {(() => {
            const pages = [];
            for (let i = 0; i < myStoryBook.data.length; i += 1) {
              const storyBook = myStoryBook.data[i];
              pages.push(
                <Image
                  onClick={prevBtnHandler}
                  key={`${i}-image`}
                  image={storyBook.image}
                />
              );
              pages.push(
                <Text
                  onClick={nextBtnHandler}
                  key={`${i}-text`}
                  page={storyBook.page.toString()}
                  text={storyBook.content}
                />
              );
            }
            return pages;
          })()}
        </S.HtmlFlipBook>
      </S.FlipBookLayout>
    </S.ReadPageLayout>
  );
}
