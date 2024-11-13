import styled from "styled-components";
import {
  AddFacePageLayout,
  GuideBox,
  MainBox,
  UploadForm,
  UploadBox,
  SubmitBtn,
} from "./AddFacePage.style";

export const AddVoicePageLayout = styled(AddFacePageLayout)``;

export const VoiceMainBox = styled(MainBox)`
  padding-top: 33px;
`;

export const UploadInfoBox = styled.div`
  width: 400px;
  height: 470px;
  display: flex;
  flex-direction: column;
  justify-content: stat;
  align-items: center;
  padding: 24px;
  padding-bottom: 80px;

  & > h2 {
    text-align: center;
    align-items: start;
    padding: 32px 0;
  }

  & > div {
    margin: 24px 0;

    > p {
      padding: 24px;
      border-radius: 32px;
      background-color: ${({ theme }) => theme.grey};
    }
  }
`;

export const UploadLabel = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  gap: 24px;

  & > div {
    display: flex;
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

export { GuideBox, UploadForm, SubmitBtn, UploadBox };
