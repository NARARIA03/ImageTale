import styled from "styled-components";

export const AddFacePageLayout = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
`;

export const GuideBox = styled.div`
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

export const MainBox = styled.div`
  width: 100%;
  margin-top: 64px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ImageBox = styled.div`
  width: 400px;
  padding: 24px;
  text-align: center;
  padding-bottom: 80px;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    padding-bottom: 20px;
  }

  & > p {
    font-size: 14px;
  }
`;

export const UploadForm = styled.form`
  width: 400px;
  height: 470px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const UploadBox = styled.div`
  width: 100%;
  height: 100%;
  padding: 24px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  transition: background-color 0.3s ease;
  border-radius: 35px;

  &:hover {
    background-color: ${({ theme }) => theme.lightgrey};
  }

  & > input {
    display: none;
  }
`;

export const UploadLabel = styled.label<{ $preview: string | null }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  gap: 24px;

  & > img {
    display: ${(props) => (props.$preview ? "block" : "none")};
    width: 55%;
    height: 55%;
    object-fit: contain;
  }

  & > div {
    display: ${(props) => (props.$preview ? "none" : "flex")};
    width: 140px;
    height: 140px;
    border: 0.5px solid black;
    border-radius: 9999px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;
  }
`;

export const SubmitBtn = styled.button`
  display: block;
  width: 150px;
  padding: 8px 16px;
  margin: 24px 8px;
  font-family: "CookieRun";
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
