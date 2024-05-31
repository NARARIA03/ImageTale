import React from "react";

import NavBar from "../components/mainpage/navbar";
import HelperBar from "../components/mainpage/helperbar";
import StoryGuidePanel from "../components/mainpage/storyguidepanel";
import PreviewImg from "../components/mainpage/previewimg";

export default function MainPage(): React.JSX.Element {
  return (
    <div className="h-full bg-custom-white">
      <NavBar />
      <HelperBar />
      <StoryGuidePanel />
      <PreviewImg />
    </div>
  );
}
