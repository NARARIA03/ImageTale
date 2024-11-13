import * as S from "../styles/components/UploadLoading.style";

interface Props {
  isLoading: boolean;
}

export default function UploadLoading({
  isLoading,
}: Props): JSX.Element | null {
  if (!isLoading) return null;

  return (
    <S.LoadingLayout>
      <div>
        <S.Spinner />
        <p>Loading...</p>
      </div>
    </S.LoadingLayout>
  );
}
