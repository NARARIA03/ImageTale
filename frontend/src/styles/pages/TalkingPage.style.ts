import styled from "styled-components";

export const TalkingPageLayout = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

export const MessageBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  position: absolute;
  top: 0px;
  padding: 16px;
`;

export const Message = styled.div<{ $type: "user" | "response" }>`
  padding: 8px;
  margin: 8px;
  border-radius: 6px;
  font-size: 20px;
  background: ${(props) =>
    props.$type === "user" ? "rgb(191, 219, 254)" : "rgb(187, 247, 208)"};
  align-self: ${(props) =>
    props.$type === "user" ? "flex-end" : "flex-start"};
`;

export const InputBox = styled.div<{ $inputValue: string }>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0px;

  & > input {
    width: 100%;
    font-size: 16px;
    font-family: "CookieRun";
    border: 1px solid ${({ theme }) => theme.black};
    outline: none;
    border-radius: 9999px;
    padding: 16px;
    margin: 16px;
  }

  & > button {
    visibility: ${(props) => (props.$inputValue ? "visible" : "hidden")};
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "CookieRun";
    right: -6px;
    padding: 12px;
    margin: 24px;
    background-color: ${({ theme }) => theme.pink};
    border-radius: 9999px;
  }
`;
