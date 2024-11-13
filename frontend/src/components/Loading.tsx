import * as S from "../styles/components/Loading.style";

export default function Loading(): JSX.Element {
  return (
    <S.LoadingLayout>
      <div>
        <S.Spinner />
        <p>Loading...</p>
      </div>
    </S.LoadingLayout>
  );
}
