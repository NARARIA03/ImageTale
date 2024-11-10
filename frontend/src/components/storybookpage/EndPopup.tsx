import { useNavigate } from "react-router-dom";
import * as S from "../../styles/components/storybookpage/EndPopup.style";
import { MyStoryBook } from "../../types/myStoryBookTypes";
import axios from "axios";

interface Props {
  storyBookId: number;
  myStoryBook: MyStoryBook;
}

export default function EndPopup({
  storyBookId,
  myStoryBook,
}: Props): JSX.Element {
  const navigate = useNavigate();

  const postMyStoryBook = async () => {
    try {
      await axios.post(
        `${import.meta.env.VITE_APP_API_URL}/mystory`,
        myStoryBook
      );
    } catch (e) {
      console.error(e);
    }
  };

  const handleYesBtn = async () => {
    await postMyStoryBook();
    navigate(`/talking/${storyBookId}`);
  };

  const handleNoBtn = async () => {
    await postMyStoryBook();
    navigate("/");
  };

  return (
    <S.EndPopupLayout>
      <p>The end</p>
      <p>Do you want to talk to the main character?</p>
      <S.ButtonBox>
        <button onClick={handleYesBtn}>Yes</button>
        <button onClick={handleNoBtn}>No</button>
      </S.ButtonBox>
    </S.EndPopupLayout>
  );
}
