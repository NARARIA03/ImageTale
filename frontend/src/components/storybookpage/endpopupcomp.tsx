import React from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  storyBookId: number;
}

export default function EndPopupComponent({
  storyBookId,
}: Props): React.JSX.Element {
  const navigate = useNavigate();

  const handleYesBtn = () => {
    if (storyBookId) navigate(`/talking/${storyBookId}`);
  };

  const handleNoBtn = () => {
    navigate("/");
  };

  return (
    <div className="w-full h-full absolute flex flex-col justify-center items-center z-20 backdrop-brightness-50">
      <p className="text-6xl text-custom-white">The end</p>
      <p className="text-5xl text-custom-deepyellow mt-20 mb-10">
        Do you want to talk to the main character?
      </p>
      <div className="flex justify-center items-center">
        <button
          className="px-20 py-4 m-8 bg-custom-yellow rounded-3xl hover:scale-110 transition"
          onClick={handleYesBtn}
        >
          <p className="text-4xl text-custom-black">Yes</p>
        </button>
        <button
          className="px-20 py-4 m-8 bg-custom-yellow rounded-3xl hover:scale-110 transition"
          onClick={handleNoBtn}
        >
          <p className="text-4xl text-custom-black">No</p>
        </button>
      </div>
    </div>
  );
}
