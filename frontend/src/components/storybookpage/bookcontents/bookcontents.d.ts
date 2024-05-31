interface StoryBookData {
  url: string;
  revised_prompt: string;
  content: string;
  img: string;
}

interface StoryBook {
  id: number;
  data: StoryBookData[];
}

export interface BookContentsProps {
  storyBookData: StoryBook;
}
