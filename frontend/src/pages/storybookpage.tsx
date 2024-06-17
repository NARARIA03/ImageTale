import BookBackground from "../components/storybookpage/bookbackground";
import BookContents from "../components/storybookpage/bookcontents";
import LoadingSpinner from "../components/common/loadingcomp";
import { useStoryBookData } from "../hooks/usestorybookdata";
import { useParams } from "react-router-dom";

export default function StoryBookPage(): React.JSX.Element {
  const { storyBookId } = useParams();
  const { isLoading, storyBookData } = useStoryBookData(storyBookId);

  if (isLoading) {
    return (
      <>
        <BookBackground />
        <div className="absolute w-screen h-screen flex justify-center items-center">
          <LoadingSpinner />
        </div>
      </>
    );
  }

  if (!storyBookData) {
    return (
      <>
        <BookBackground />
        <div className="absolute w-screen h-screen flex justify-center flex-col items-center">
          <p className="text-2xl mb-4">데이터를 불러오는 중 오류가 발생했습니다...</p>
          <p className="text-2xl">새로고침이나 재접속을 시도해보세요</p>
        </div>
      </>
    );
  }

  return (
    <div className="w-screen h-screen">
      <BookBackground />
      <BookContents storyBookData={storyBookData} />
    </div>
  );
}
