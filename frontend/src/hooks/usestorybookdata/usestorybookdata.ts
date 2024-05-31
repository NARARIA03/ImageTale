import { useState, useEffect } from "react";
import axios from "axios";
import { StoryBook, useStoryBookDataResult } from "./usestorybookdata.d";

export function useStoryBookData(storyBookId: number): useStoryBookDataResult {
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

  return { isLoading, storyBookData };
}
