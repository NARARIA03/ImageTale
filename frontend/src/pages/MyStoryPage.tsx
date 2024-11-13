import BookCard from "../components/mystorypage/BookCard";
import NavBar from "../components/NavBar";
import UploadLoading from "../components/UploadLoading";
import { useMyStory } from "../hooks/useMyStoryBook";
import * as S from "../styles/pages/MyStoryPage.style";

export default function MyStoryPage(): JSX.Element {
  const { myStoryBooks, isLoading } = useMyStory();

  return (
    <>
      <UploadLoading isLoading={isLoading} />
      <S.MyStoryPageLayout>
        <NavBar />
        <S.MyStoryHelperBox>
          <p>
            기존 동화책 읽기 <span>|</span> 기존에 생성된 동화책을 읽을 수
            있어요.
          </p>
        </S.MyStoryHelperBox>
        {myStoryBooks ? (
          myStoryBooks.length === 0 ? (
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
          )
        ) : (
          <></>
        )}
      </S.MyStoryPageLayout>
    </>
  );
}
