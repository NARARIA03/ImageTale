import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "../pages/MainPage";
import StoryBookPage from "../pages/StoryBookPage";
import TalkingPage from "../pages/TalkingPage";

export default function Router(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/* <Route path="/new-story" element={<></>} /> */}
        <Route path="/new-story/:storyBookId" element={<StoryBookPage />} />
        <Route path="/my-story" element={<></>} />
        <Route path="/my-story/:storyBookId" element={<></>} />
        <Route path="/talking/:storyBookId" element={<TalkingPage />} />
      </Routes>
    </BrowserRouter>
  );
}
