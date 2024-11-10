import styled from "styled-components";
import { PrimaryBtn, SecondaryBtn, GuideBtn } from "../pages/MainPage.style";

export const NavbarBox = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 16px;

  h1 {
    font-size: 30px;
    line-height: 36px;
  }

  div {
    display: flex;
    flex-direction: row;
    color: ${(props) => props.theme.black};
  }
`;

export { PrimaryBtn, SecondaryBtn, GuideBtn };
