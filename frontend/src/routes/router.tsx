import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "../pages/mainpage";
import StoryBookPage from "../pages/storybookpage";
import TalkingPage from "../pages/talkingpage";

export default function Router(): React.JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/storybook/:storyBookId" element={<StoryBookPage />} />
        <Route path="/talking/:storyBookId" element={<TalkingPage />} />
      </Routes>
    </BrowserRouter>
  );
}
