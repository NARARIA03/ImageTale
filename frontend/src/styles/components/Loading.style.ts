import styled, { keyframes } from "styled-components";

export const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const LoadingLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  z-index: 50;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;

    p {
      font-size: 24px;
      line-height: 32px;
    }
  }
`;

export const Spinner = styled.div`
  width: 64px;
  height: 64px;
  border: 6px solid ${({ theme }) => theme.black};
  border-radius: 9999px;
  border-top-color: transparent;
  animation: ${spin} 1s linear infinite;
`;
