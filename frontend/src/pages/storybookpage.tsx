import React, { useEffect, useState } from "react";
import axios from "axios";
import BookBackground from "../components/storybookpage/bookbackground";
import BookContents from "../components/storybookpage/bookcontents";
import { StoryBook, StoryBookPageProps } from "./storybookpage.d";

export default function StoryBookPage({
  storyBookId,
}: StoryBookPageProps): React.JSX.Element {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [storyBookData, setStoryBookData] = useState<StoryBook | null>(null);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get<StoryBook>(`http://0.0.0.0:8080/storybook/${storyBookId}`)
      .then((res) => {
        console.log(`fetch complete storybook ${storyBookId}`);
        setStoryBookData(res.data);
        setIsLoading(false);
      })
      .catch((e) => {
        console.error(`error detect ${e}`);
        setIsLoading(false);
      });
  }, [storyBookId]);

  if (isLoading) {
    return <p>로딩중입니다...</p>;
  }

  if (!storyBookData) {
    return <p>데이터를 불러오는 중 오류가 발생했습니다...</p>;
  }

  return (
    <div className="w-screen h-screen">
      <BookBackground />
      <BookContents storyBookData={storyBookData} />
    </div>
  );
}
