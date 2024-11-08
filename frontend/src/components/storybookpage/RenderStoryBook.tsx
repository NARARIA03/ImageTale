import { useState } from "react";
import { StoryBook, StoryBookData } from "../../types/storybooktypes";
import FlipBook from "./FlipBook";
import SelectPage from "./SelectPage";
import EndPopup from "./EndPopup";

interface Props {
  storyBookData: StoryBook;
}

export default function RenderStoryBook({ storyBookData }: Props): JSX.Element {
  const [curPage, setCurPage] = useState<StoryBookData>(storyBookData.data[0]);
  const [selectPage, setSelectPage] = useState<(StoryBookData | undefined)[]>();
  const [selectFlag, setSelectFlag] = useState<boolean>(false);
  const [endStoryFlag, setEndStoryFlag] = useState<boolean>(false);

  const prevBtnHandler = () => {
    if (curPage.page > 1) {
      const prevPageData = storyBookData.data.find(
        (page) => page.page === curPage.prevPage
      );
      if (prevPageData) {
        setCurPage(prevPageData);
        setEndStoryFlag(false);
      }
    }
  };

  const nextBtnHandler = () => {
    if (curPage.nextPage.length === 1) {
      const nextPageData = storyBookData.data.find(
        (page) => curPage.nextPage[0] === page.page
      );
      if (nextPageData) {
        setSelectFlag(false);
        setCurPage(nextPageData);
      }
    } else if (curPage.nextPage.length === 2) {
      const nextPageCase1 = storyBookData.data.find(
        (page) => curPage.nextPage[0] === page.page
      );
      const nextPageCase2 = storyBookData.data.find(
        (page) => curPage.nextPage[1] === page.page
      );
      const pageList = [nextPageCase1, nextPageCase2];
      setSelectPage(pageList);
      setSelectFlag(true);
    } else if (curPage.nextPage.length === 0) {
      setEndStoryFlag(true);
    }
  };

  return (
    <>
      {endStoryFlag && <EndPopup storyBookId={storyBookData.id} />}
      {selectFlag && selectPage && (
        <SelectPage
          selectPage={selectPage}
          setCurPage={setCurPage}
          setSelectFlag={setSelectFlag}
        />
      )}
      <FlipBook
        curPage={curPage}
        prevBtnHandler={prevBtnHandler}
        nextBtnHandler={nextBtnHandler}
        storyBooks={storyBookData.data}
        isDarkness={endStoryFlag}
      />
    </>
  );
}
