import { useNavigate } from "react-router-dom";
import * as S from "../../styles/components/storybookpage/StoryBookHeader.style";

interface Props {
  toggleHideTalkingHead: () => void;
  toggleDisableTalkingHead: () => void;
  hideTalkingHeadFlag: boolean;
  disableTalkingHeadFlag: boolean;
}

export default function StoryBookHeader({
  toggleHideTalkingHead,
  toggleDisableTalkingHead,
  hideTalkingHeadFlag,
  disableTalkingHeadFlag,
}: Props): JSX.Element {
  const volumeImage = disableTalkingHeadFlag
    ? "/img/mute-volume.png"
    : "/img/volume.png";
  const talkingheadImage = hideTalkingHeadFlag
    ? "/img/hide-user.png"
    : "/img/user.png";

  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <S.HeaderLayout>
      <S.Button onClick={goHome}>
        <img src="/img/home.png" alt="Go mainpage button" />
      </S.Button>
      <S.Button onClick={toggleDisableTalkingHead}>
        <img src={volumeImage} alt="Disable talkinghead button" />
      </S.Button>
      <S.Button onClick={toggleHideTalkingHead}>
        <img src={talkingheadImage} alt="Hide talkinghead button" />
      </S.Button>
    </S.HeaderLayout>
  );
}
