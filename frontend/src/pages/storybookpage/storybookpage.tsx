import BookBackground from "../../components/storybookpage/bookbackground";
import BookContents from "../../components/storybookpage/bookcontents/bookcontents";
import { StoryBookPageProps } from "./storybookpage.d";
import { useStoryBookData } from "../../hooks/usestorybookdata/usestorybookdata";

export default function StoryBookPage({
  storyBookId,
}: StoryBookPageProps): React.JSX.Element {
  const { isLoading, storyBookData } = useStoryBookData(storyBookId);

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
