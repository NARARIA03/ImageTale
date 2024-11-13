import { forwardRef, LegacyRef } from "react";
import { TextBox } from "../../styles/components/storybookpage/FlipBook.style";

export const Text = forwardRef(
  (
    props: { text: string; onClick: () => void },
    ref: LegacyRef<HTMLDivElement>
  ) => {
    return (
      <div ref={ref} data-density="hard">
        <TextBox onClick={props.onClick}>
          <p>{props.text}</p>
        </TextBox>
      </div>
    );
  }
);
