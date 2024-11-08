import { useNavigate } from "react-router-dom";
import * as S from "../../styles/components/storybookpage/EndPopup.style";

interface Props {
  storyBookId: number;
}

export default function EndPopup({ storyBookId }: Props): JSX.Element {
  const navigate = useNavigate();

  const handleYesBtn = () => {
    if (storyBookId) navigate(`/talking/${storyBookId}`);
  };

  const handleNoBtn = () => {
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
