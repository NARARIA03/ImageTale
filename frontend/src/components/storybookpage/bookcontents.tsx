import React, { useEffect, useState } from "react";
import { StoryBook, StoryBookData } from "../../types/storybooktypes";
import SelectPageComponent from "./selectpagecomp";
import BookPageComponent from "./bookpagecomp";

interface BookContentsProps {
  storyBookData: StoryBook;
}

export default function BookContents({ storyBookData }: BookContentsProps): React.JSX.Element {
  const [curPage, setCurPage] = useState<StoryBookData>(storyBookData.data[0]);
  const [selectPage, setSelectPage] = useState<(StoryBookData | undefined)[]>();
  const [selectFlag, setSelectFlag] = useState<boolean>(false);
  const [leftArrowFlag, setLeftArrowFlag] = useState<boolean>(false);
  const [rightArrowFlag, setRightArrowFlag] = useState<boolean>(true);

  const prevBtnHandler = () => {
    if (curPage.page > 1) {
      const prevPageData = storyBookData.data.find((page) => page.page === curPage.prevPage);
      if (prevPageData) {
        console.log(`prevBtnHandler res: ${JSON.stringify(prevPageData)}`);
        setCurPage(prevPageData);
      }
    }
  };

  const nextBtnHandler = () => {
    if (curPage.nextPage.length === 1) {
      const nextPageData = storyBookData.data.find((page) => curPage.nextPage[0] === page.page);
      setSelectFlag(false);
      console.log("no select flag");
      console.log(`nextBtnHandler res: ${JSON.stringify(nextPageData)}`);
      if (nextPageData) {
        setSelectFlag(false);
        setCurPage(nextPageData);
      }
    } else if (curPage.nextPage.length === 2) {
      setRightArrowFlag(true);
      const nextPageCase1 = storyBookData.data.find((page) => curPage.nextPage[0] === page.page);
      const nextPageCase2 = storyBookData.data.find((page) => curPage.nextPage[1] === page.page);
      const pageList = [nextPageCase1, nextPageCase2];
      setSelectPage(pageList);
      setSelectFlag(true);
      console.log("yes select flag");
      console.log(`nextBtnHandler res: ${JSON.stringify(nextPageCase1)} ${JSON.stringify(nextPageCase2)}`);
    }
  };

  useEffect(() => {
    console.log(`curpage: ${JSON.stringify(curPage)}`);
  }, [curPage]);

  // left arrow, right arrow check and disabled
  useEffect(() => {
    if (curPage.page === 1) {
      setLeftArrowFlag(false);
      return;
    } else if (curPage.nextPage.length === 0) {
      setRightArrowFlag(false);
      return;
    }
    setLeftArrowFlag(true);
    setRightArrowFlag(true);
  }, [curPage]);

  // selecting component
  if (selectFlag && selectPage) {
    return <SelectPageComponent selectPage={selectPage} setCurPage={setCurPage} setSelectFlag={setSelectFlag} />;
  } else {
    // basic storybook component
    return (
      <BookPageComponent
        curPage={curPage}
        prevBtnHandler={prevBtnHandler}
        nextBtnHandler={nextBtnHandler}
        leftArrowFlag={leftArrowFlag}
        rightArrowFlag={rightArrowFlag}
      />
    );
  }
}
