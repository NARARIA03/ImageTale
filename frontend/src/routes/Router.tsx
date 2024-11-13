import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import MainPage from "../pages/MainPage";
import StoryBookPage from "../pages/StoryBookPage";
import TalkingPage from "../pages/TalkingPage";
import MyStoryPage from "../pages/MyStoryPage";
import ReadPage from "../pages/ReadPage";
import AddVoicePage from "../pages/AddVoicePage";
import AddFacePage from "../pages/AddFacePage";

export default function Router(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/new-story/:storyBookId" element={<StoryBookPage />} />
        <Route path="/my-story" element={<MyStoryPage />} />
        <Route path="/my-story/read" element={<ReadPage />} />
        <Route path="/talking" element={<TalkingPage />} />
        <Route path="/add-voice" element={<AddVoicePage />} />
        <Route path="/add-face" element={<AddFacePage />} />
        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Routes>
    </BrowserRouter>
  );
}
