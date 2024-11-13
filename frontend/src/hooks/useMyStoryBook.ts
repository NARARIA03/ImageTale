import { useEffect, useState } from "react";
import { MyStoryBook } from "../types/myStoryBookTypes";
import axios from "axios";

interface Result {
  myStoryBooks: MyStoryBook[] | null;
  isLoading: boolean;
}

export const useMyStory = (): Result => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [myStoryBooks, setMyStoryBooks] = useState<MyStoryBook[] | null>(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get<{ res: MyStoryBook[] }>(
          `${import.meta.env.VITE_APP_API_URL}/mystory`
        );
        setMyStoryBooks(data.res);
      } catch (e) {
        console.error("데이터 가져오던 중 오류 발생");
        setMyStoryBooks([]);
      } finally {
        setIsLoading(false);
      }
    };
    fetch();
  }, []);

  return { myStoryBooks, isLoading };
};
