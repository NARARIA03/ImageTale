import BookContents from "../components/storybookpage/bookcontents";
import LoadingSpinner from "../components/common/loadingcomp";
import { useStoryBookData } from "../hooks/usestorybookdata";
import { useParams } from "react-router-dom";

export default function StoryBookPage(): React.JSX.Element {
  const { storyBookId } = useParams();
  const { isLoading, storyBookData } = useStoryBookData(storyBookId);

  return (
    <div className="w-screen h-screen relative">
      {isLoading && <LoadingSpinner />}
      {storyBookData && <BookContents storyBookData={storyBookData} />}
    </div>
  );
}
