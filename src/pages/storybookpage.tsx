import React from "react";
import BookBackground from "../components/storybookpage/bookbackground";
import BookContents from "../components/storybookpage/bookcontents";

export default function StoryBookPage(): React.JSX.Element {
  return (
    <div className="w-screen h-screen">
      <BookBackground />
      <BookContents />
    </div>
  );
}
