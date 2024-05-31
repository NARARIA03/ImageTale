import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "../pages/mainpage";
import StoryBookPage from "../pages/storybookpage/storybookpage";

export default function Router(): React.JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/storybook" element={<StoryBookPage storyBookId={1} />} />
        {/* <Route path="users/*" element={} /> */}
      </Routes>
    </BrowserRouter>
  );
}
