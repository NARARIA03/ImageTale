import styled from "styled-components";
import { PrimaryBtn, SecondaryBtn, GuideBtn } from "../pages/MainPage.style";

export const NavbarBox = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 16px;

  div {
    display: flex;
    flex-direction: row;
    color: ${(props) => props.theme.black};
  }
`;

export const LogoBox = styled.div`
  width: 44px;
  overflow: hidden;
`;

export { PrimaryBtn, SecondaryBtn, GuideBtn };
