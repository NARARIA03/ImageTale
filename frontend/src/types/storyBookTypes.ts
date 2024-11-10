export interface StoryBookData {
  page: number;
  content: string;
  nextPage: number[];
  prevPage: number;
  image: string;
  talkinghead: string;
  choice: undefined | string;
}

export interface StoryBook {
  id: number;
  title: string;
  introduction: string;
  data: StoryBookData[];
}
