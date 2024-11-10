import NavBar from "../components/NavBar";
import PreviewImg from "../components/PreviewImg";
import * as S from "../styles/pages/MainPage.style";

export default function MainPage(): JSX.Element {
  return (
    <S.MainPageLayout>
      <NavBar />
      <S.HelperBox>
        <p>
          동화책 생성 및 선택 <span>|</span> 원하는 동화책을 직접 생성하거나
          생성되어 있는 동화책을 선택해주세요.
        </p>
      </S.HelperBox>

      <S.GuideBox>
        <h2>나만의 영어 동화책을 만들어보세요</h2>
        <p>새로운 이야기 생성뿐만 아니라 이야기에 맞는 이미지까지!</p>
        <div>
          <S.PrimaryBtn to="/new-story/3">새로운 이야기 만들기</S.PrimaryBtn>
          <S.SecondaryBtn to="/my-story">기존 이야기 선택하기</S.SecondaryBtn>
        </div>
      </S.GuideBox>

      <PreviewImg />
    </S.MainPageLayout>
  );
}
