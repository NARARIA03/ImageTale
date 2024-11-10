import { MyStoryBook } from "../../types/myStoryBookTypes";
import * as S from "../../styles/components/mystorypage/BookCard.style";

interface Props {
  myStoryBook: MyStoryBook;
}

export default function BookCard({ myStoryBook }: Props): JSX.Element {
  console.log(myStoryBook);
  return (
    <S.BookCardLayout>
      <S.BackgroundImg
        src={myStoryBook.thumbnail}
        alt={`thumbnail for ${myStoryBook.title}`}
      />
      <S.BottomBox>
        <S.ThumbnailImg>
          <img
            src={myStoryBook.thumbnail}
            alt={`thumbnail for ${myStoryBook.title}`}
          />
        </S.ThumbnailImg>
        <h1>{myStoryBook.title}</h1>
        <p>{myStoryBook.introduction}</p>
      </S.BottomBox>
    </S.BookCardLayout>
  );
}
