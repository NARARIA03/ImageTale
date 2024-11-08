import React, { LegacyRef, useEffect, useRef, useState } from "react";
import { StoryBookData } from "../../types/storybooktypes";
import StoryBookHeader from "./StoryBookHeader";
import * as S from "../../styles/components/storybookpage/FlipBook.style";

const Image = React.forwardRef(
  (
    props: { image: string; onClick: () => void },
    ref: LegacyRef<HTMLDivElement>
  ) => {
    return (
      <div ref={ref} data-density="hard">
        <S.ImageBox onClick={props.onClick}>
          <img src={props.image} alt="storybook" />
        </S.ImageBox>
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
        <S.TextBox onClick={props.onClick}>
          <p>{props.text}</p>
          <p>{props.page}(debug)</p>
        </S.TextBox>
      </div>
    );
  }
);

interface Props {
  curPage: StoryBookData;
  prevBtnHandler: () => void;
  nextBtnHandler: () => void;
  storyBooks: StoryBookData[];
  isDarkness: boolean;
}

export default function FlipBook({
  curPage,
  prevBtnHandler,
  nextBtnHandler,
  storyBooks,
  isDarkness,
}: Props): JSX.Element {
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
      </S.HtmlFlipBook>
    </S.FlipBookLayout>
  );
}
