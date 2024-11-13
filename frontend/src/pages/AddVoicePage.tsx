import { useState } from "react";
import NavBar from "../components/NavBar";
import UploadLoading from "../components/UploadLoading";
import * as S from "../styles/pages/AddVoicePage.style";
import { FaUpload } from "react-icons/fa6";
import axios from "axios";

export default function AddVoicePage(): JSX.Element {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [fileName, setFileName] = useState<string>("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      setIsLoading(true);
      e.preventDefault();
      const { data } = await axios.post<{ success: boolean }>(
        `${import.meta.env.VITE_APP_API_URL}/upload`,
        { fileName }
      );
      if (data.success)
        alert(
          "음성이 업로드 되었습니다. 토킹 헤드 생성까지 잠시 기다려주세요."
        );
    } catch (e) {
      console.error(e);
    } finally {
      window.location.reload();
    }
  };

  return (
    <S.AddVoicePageLayout>
      <UploadLoading isLoading={isLoading} />
      <NavBar />
      <S.GuideBox>
        <p>
          오디오 업로드 <span>|</span> 책을 읽어주는 사람의 목소리를 업로드
          해주세요.
        </p>
      </S.GuideBox>
      <S.VoiceMainBox>
        <S.UploadInfoBox>
          <h2>음성 등록 안내</h2>
          <p>
            아래의 예시 문장을 또박또박 바르게 읽은 음성 파일을 업로드 해주세요.
          </p>
          <div>
            <p>
              Hi there, I'm your new voice clone. Try your best to upload
              quality audio.
            </p>
          </div>
        </S.UploadInfoBox>

        <S.UploadForm onSubmit={handleSubmit}>
          <S.UploadBox>
            <S.UploadLabel htmlFor="file">
              <div>
                <FaUpload size={28} />
                <p>오디오 업로드</p>
              </div>
              <p>
                {fileName || "mp3, wav 형식의 원하는 오디오를 업로드해주세요!"}
              </p>
            </S.UploadLabel>
            <input
              type="file"
              name="file"
              id="file"
              accept=".mp3,.wav"
              onChange={handleFileChange}
            />
          </S.UploadBox>
          <S.SubmitBtn type="submit" disabled={fileName === ""}>
            완료
          </S.SubmitBtn>
        </S.UploadForm>
      </S.VoiceMainBox>
    </S.AddVoicePageLayout>
  );
}
