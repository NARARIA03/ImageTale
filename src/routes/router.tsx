import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "../pages/mainpage";
import StoryBookPage from "../pages/storybookpage";

export default function Router(): React.JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/storybook" element={<StoryBookPage />} />
        {/* <Route path="users/*" element={} /> */}
      </Routes>
    </BrowserRouter>
  );
}
