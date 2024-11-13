import NavBar from "../components/NavBar";
import { FaUpload } from "react-icons/fa6";
import * as S from "../styles/pages/AddFacePage.style";
import { useState } from "react";
import UploadLoading from "../components/UploadLoading";

export default function AddFacePage(): JSX.Element {
  const [preview, setPreview] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    e.preventDefault();
    setTimeout(() => {
      setIsLoading(false);
      alert(
        "이미지가 업로드 되었습니다. 토킹 헤드 생성까지 잠시 기다려주세요."
      );
      window.location.reload();
    }, 3000);
  };

  return (
    <S.AddFacePageLayout>
      <UploadLoading isLoading={isLoading} />
      <NavBar />
      <S.GuideBox>
        <p>
          이미지 업로드 <span>|</span> 책을 읽어주는 사람의 사진을 업로드
          해주세요.
        </p>
      </S.GuideBox>
      <S.MainBox>
        <S.ImageBox>
          <img src="/img/imageGuide.png" alt="upload image guideline" />
          <p>얼굴이 너무 작게 나오거나 텍스트가 포함된 사진,</p>
          <p>흐릿하게 나온 사진은 결과가 잘 안 나올 수 있어요.</p>
        </S.ImageBox>

        <S.UploadForm onSubmit={handleSubmit}>
          <S.UploadBox>
            <S.UploadLabel $preview={preview} htmlFor="file">
              <img src={preview || ""} alt="uploaded preview image" />
              <div>
                <FaUpload size={28} />
                <p>이미지 업로드</p>
              </div>
              <p>png, jpeg 형식의 원하는 이미지를 업로드해주세요!</p>
            </S.UploadLabel>
            <input
              type="file"
              name="file"
              id="file"
              accept=".png,.jpeg"
              onChange={handleFileChange}
            />
          </S.UploadBox>
          <S.SubmitBtn type="submit">완료</S.SubmitBtn>
        </S.UploadForm>
      </S.MainBox>
    </S.AddFacePageLayout>
  );
}
