import { MyStoryBook } from "../../types/myStoryBookTypes";
import * as S from "../../styles/components/mystorypage/BookCard.style";
import { useNavigate } from "react-router-dom";

interface Props {
  myStoryBook: MyStoryBook;
}

export default function BookCard({ myStoryBook }: Props): JSX.Element {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/my-story/read", { state: { myStoryBook: myStoryBook } });
  };

  return (
    <S.BookCardLayout onClick={handleClick}>
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
