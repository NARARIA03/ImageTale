import Loading from "../components/Loading";
import BookCard from "../components/mystorypage/BookCard";
import NavBar from "../components/NavBar";
import { useMyStory } from "../hooks/useMyStoryBook";
import * as S from "../styles/pages/MyStoryPage.style";

export default function MyStoryPage(): JSX.Element {
  const { myStoryBooks, isLoading } = useMyStory();

  return (
    <S.MyStoryPageLayout>
      <NavBar />
      {isLoading ? (
        <Loading />
      ) : myStoryBooks.length === 0 ? (
        <S.NoMyStoryBox>
          <p>완성된 동화책이 아직 없습니다..</p>
          <S.PrimaryBtn to="/">새 동화책 생성하러 가기</S.PrimaryBtn>
        </S.NoMyStoryBox>
      ) : (
        <S.MyStoryGrid>
          {myStoryBooks.map((myStoryBook) => (
            <BookCard key={myStoryBook.id} myStoryBook={myStoryBook} />
          ))}
        </S.MyStoryGrid>
      )}
    </S.MyStoryPageLayout>
  );
}
