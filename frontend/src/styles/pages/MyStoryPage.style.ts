import styled from "styled-components";
import { PrimaryBtn } from "./MainPage.style";

export const MyStoryPageLayout = styled.div`
  width: 100vw;
`;

export const NoMyStoryBox = styled.div`
  width: 100vw;
  min-height: calc(100vh - 76px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > p {
    font-size: 28px;
    margin-bottom: 16px;
  }
`;

export const MyStoryGrid = styled.div`
  padding: 16px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 16px;
`;

export { PrimaryBtn };
