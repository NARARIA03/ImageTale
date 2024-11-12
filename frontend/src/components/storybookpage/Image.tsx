import { forwardRef, LegacyRef } from "react";
import { ImageBox } from "../../styles/components/storybookpage/FlipBook.style";

export const Image = forwardRef(
  (
    props: { image: string; onClick: () => void },
    ref: LegacyRef<HTMLDivElement>
  ) => {
    return (
      <div ref={ref} data-density="hard">
        <ImageBox onClick={props.onClick}>
          <img src={props.image} alt="storybook" />
        </ImageBox>
      </div>
    );
  }
);
