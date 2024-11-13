import * as S from "../styles/components/NavBar.style";

export default function NavBar(): JSX.Element {
  return (
    <S.NavbarBox>
      <S.LogoBox to="/">
        <img src="/img/logo.png" alt="logo" />
      </S.LogoBox>

      <div>
        <S.PrimaryBtn to="/add-voice">음성 등록</S.PrimaryBtn>
        <S.SecondaryBtn to="/add-face">얼굴 등록</S.SecondaryBtn>
      </div>
    </S.NavbarBox>
  );
}
