import styled from "styled-components";
import { Spinner } from "./Loading.style";

export const LoadingLayout = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  backdrop-filter: brightness(0.7);
  position: absolute;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  color: ${({ theme }) => theme.black};
  z-index: 50;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
  }

  p {
    font-size: 24px;
    line-height: 32px;
  }
`;

export { Spinner };
