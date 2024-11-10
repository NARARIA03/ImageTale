import { StoryBook, StoryBookData } from "./storyBookTypes";

export type MyStoryBookData = Pick<
  StoryBookData,
  "content" | "image" | "talkinghead"
>;

export type MyStoryBook = Omit<StoryBook, "data"> & {
  data: MyStoryBookData[];
  thumbnail: string;
};
