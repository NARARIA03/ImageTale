import styled from "styled-components";

export const EndPopupLayout = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 20;
  backdrop-filter: brightness(0.5);
  line-height: 1;

  & > p:nth-child(1) {
    font-size: 60px;
    color: ${({ theme }) => theme.white};
  }

  & > p:nth-child(2) {
    font-size: 48px;
    color: ${({ theme }) => theme.deepyellow};
    margin-top: 80px;
    margin-bottom: 40px;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > button {
    padding: 16px 80px;
    margin: 32px;
    background-color: ${({ theme }) => theme.yellow};
    color: ${({ theme }) => theme.black};
    font-size: 36px;
    font-family: "CookieRun";
    line-height: 40px;
    border-radius: 24px;
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.1);
    }
  }
`;
