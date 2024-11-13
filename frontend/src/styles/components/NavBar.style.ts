import styled from "styled-components";
import { PrimaryBtn, SecondaryBtn, GuideBtn } from "../pages/MainPage.style";
import { Link } from "react-router-dom";

export const NavbarBox = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  padding-right: 32px;
  padding-left: 32px;

  div {
    display: flex;
    flex-direction: row;
    color: ${(props) => props.theme.black};
  }
`;

export const LogoBox = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  overflow: hidden;
`;

export { PrimaryBtn, SecondaryBtn, GuideBtn };
