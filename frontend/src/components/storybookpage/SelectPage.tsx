import { Dispatch, SetStateAction } from "react";
import { StoryBookData } from "../../types/storyBookTypes";
import { MyStoryBook } from "../../types/myStoryBookTypes";
import * as S from "../../styles/components/storybookpage/SelectPage.style";

interface Props {
  selectPage: (StoryBookData | undefined)[];
  setCurPage: Dispatch<SetStateAction<StoryBookData>>;
  setSelectFlag: Dispatch<SetStateAction<boolean>>;
  setMyStoryBook: Dispatch<SetStateAction<MyStoryBook>>;
}

export default function SelectPage({
  selectPage,
  setCurPage,
  setSelectFlag,
  setMyStoryBook,
}: Props): JSX.Element {
  const selectPageHandler = (selectedPage: StoryBookData | undefined) => {
    if (selectedPage) {
      setCurPage(selectedPage);
      setMyStoryBook((prev) => ({
        ...prev,
        data: [
          ...prev.data,
          {
            page: selectedPage.page,
            content: selectedPage.content,
            image: selectedPage.image,
            talkinghead: selectedPage.talkinghead,
          },
        ],
      }));
      setSelectFlag(false);
    }
  };

  return (
    <S.SelectPageLayout>
      <S.PageBox>
        <S.ImageBox>
          <img src={selectPage[0]?.image} />
        </S.ImageBox>
        <S.TextBox
          onClick={() => {
            selectPageHandler(selectPage[0]);
          }}
        >
          {selectPage[0]?.choice}
        </S.TextBox>
      </S.PageBox>

      <S.PageBox>
        <S.ImageBox>
          <img src={selectPage[1]?.image} />
        </S.ImageBox>
        <S.TextBox
          onClick={() => {
            selectPageHandler(selectPage[1]);
          }}
        >
          {selectPage[1]?.choice}
        </S.TextBox>
      </S.PageBox>
    </S.SelectPageLayout>
  );
}
