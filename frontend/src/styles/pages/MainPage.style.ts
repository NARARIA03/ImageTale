import { Link } from "react-router-dom";
import styled from "styled-components";

export const MainPageLayout = styled.div`
  width: 100%;
  height: 100vh;
  background: ${(props) => props.theme.white};
`;

export const GuideBtn = styled(Link)`
  display: block;
  padding: 8px;
  margin-left: 8px;
  margin-right: 8px;
  font-size: 18px;
  line-height: 28px;
`;

export const PrimaryBtn = styled(Link)`
  display: block;
  padding: 8px 16px;
  margin: 0 8px;
  font-size: 14px;
  line-height: 20px;
  background: ${({ theme }) => theme.blue};
  color: ${({ theme }) => theme.white};
  border-radius: 6px;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.deepblue};
  }
`;

export const SecondaryBtn = styled(Link)`
  display: block;
  padding: 8px 16px;
  margin: 0 8px;
  font-size: 14px;
  line-height: 20px;
  background: ${({ theme }) => theme.grey};
  color: ${({ theme }) => theme.black};
  border-radius: 6px;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.deepgray};
    color: ${({ theme }) => theme.white};
  }
`;

export const HelperBox = styled.div`
  width: 100%;
  height: 64px;
  padding: 24px;
  background: ${({ theme }) => theme.deepblue};
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 18px;
  line-height: 28px;
  color: ${({ theme }) => theme.white};

  p span {
    padding-right: 8px;
  }
`;

export const GuideBox = styled.div`
  width: 100%;
  padding: 40px;
  background: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.black};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 30px;
    line-height: 36px;
    margin: 16px;
  }

  p {
    font-size: 24px;
    line-height: 32px;
    margin: 16px;
  }

  div {
    margin: 40px auto;
    display: flex;
  }
`;
