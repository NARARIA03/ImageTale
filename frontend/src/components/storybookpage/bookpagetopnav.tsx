import React from "react";
import { useNavigate } from "react-router-dom";

interface BookPageTopNavProps {
  toggleHideTalkingHead: () => void;
  toggleDisableTalkingHead: () => void;
  hideTalkingHeadFlag: boolean;
  disableTalkingHeadFlag: boolean;
}

export default function BookPageTopNav({
  toggleHideTalkingHead,
  toggleDisableTalkingHead,
  hideTalkingHeadFlag,
  disableTalkingHeadFlag,
}: BookPageTopNavProps): React.JSX.Element {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <div className="absolute top-24 right-3 md:top-10 lg:top-5">
      <button onClick={goHome} className="w-12 h-12 mx-1 hover:scale-110 transition">
        <img src="/img/home.png" alt="Go mainpage button" />
      </button>
      <button onClick={toggleDisableTalkingHead} className="w-12 h-12 mx-1 hover:scale-110 transition">
        <img src={disableTalkingHeadFlag ? "/img/mute-volume.png" : "/img/volume.png"} alt="Disable talkinghead button" />
      </button>
      <button onClick={toggleHideTalkingHead} className="w-12 h-12 mx-1 hover:scale-110 transition">
        <img src={hideTalkingHeadFlag ? "/img/hide-user.png" : "/img/user.png"} alt="Hide talkinghead button" />
      </button>
    </div>
  );
}
