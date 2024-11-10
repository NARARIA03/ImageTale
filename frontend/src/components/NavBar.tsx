import * as S from "../styles/components/NavBar.style";

export default function NavBar(): JSX.Element {
  return (
    <S.NavbarBox>
      <h1>로고</h1>
      <div>
        <S.GuideBtn to="#">사이트 정보</S.GuideBtn>
        <S.GuideBtn to="#">이용 방법</S.GuideBtn>
      </div>
      <div>
        <S.PrimaryBtn to="#">음성 등록</S.PrimaryBtn>
        <S.SecondaryBtn to="#">얼굴 등록</S.SecondaryBtn>
      </div>
    </S.NavbarBox>
  );
}
