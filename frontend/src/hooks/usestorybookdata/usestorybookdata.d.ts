interface StoryBookData {
  url: string;
  revised_prompt: string;
  content: string;
  img: string;
}

export interface StoryBook {
  id: number;
  data: StoryBookData[];
}

export interface useStoryBookDataResult {
  isLoading: boolean;
  storyBookData: StoryBook | null;
}
