import { useState, useEffect } from "react";
import axios from "axios";
import { StoryBook } from "../types/storyBookTypes";

interface Result {
  storyBookData: StoryBook | null;
  isLoading: boolean;
}

export function useStoryBook(storyBookId: string | undefined): Result {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [storyBookData, setStoryBookData] = useState<StoryBook | null>(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        if (storyBookId) {
          setIsLoading(true);
          const { data } = await axios.get<StoryBook>(
            `${import.meta.env.VITE_APP_API_URL}/storybook/${storyBookId}`
          );
          setStoryBookData(data);
        }
      } catch (e) {
        console.error("데이터 가져오던 중 오류 발생");
      } finally {
        setIsLoading(false);
      }
    };
    fetch();
  }, [storyBookId]);

  return { storyBookData, isLoading };
}
