import styled from "styled-components";

export const TalkingPageLayout = styled.div`
  min-height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.5)),
    url("/img/background.png");
  background-size: cover;
  background-attachment: fixed;
`;

export const MessageBox = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  padding: 16px;
  padding-bottom: 72px;
`;

export const Message = styled.div<{ $type: "user" | "response" }>`
  padding: 8px;
  margin-bottom: 16px;
  max-width: 45%;
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
  justify-content: space-between;
  gap: 12px;
  padding: 16px;
  align-items: center;
  position: fixed;
  bottom: 0px;

  & > input {
    width: 100%;
    font-size: 16px;
    font-family: "CookieRun";
    border: 1px solid ${({ theme }) => theme.black};
    outline: none;
    border-radius: 9999px;
    padding: 16px;
  }

  & > button {
    display: ${(props) => (props.$inputValue ? "flex" : "none")};

    justify-content: center;
    align-items: center;
    font-family: "CookieRun";
    width: 56px;
    padding: 14px;
    background-color: ${({ theme }) => theme.pink};
    border-radius: 9999px;
  }

  & > button > svg {
    width: 100%;
    height: 100%;
  }
`;
