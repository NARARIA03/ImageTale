import styled from "styled-components";

export const PreviewBox = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const MoveImageBox = styled.div.attrs<{ $transformValue: number }>(
  (props) => ({
    style: {
      transform: `translateX(-${props.$transformValue}%)`,
    },
  })
)`
  display: flex;
  white-space: nowrap;
  transition: transform cubic-bezier(0.4, 0, 0.2, 1) 500ms;
  will-change: transform;

  img {
    width: 256px;
    margin: 48px;
    border-radius: 35px;
    box-shadow: 0 10px 15px rgba(72, 72, 72, 0.4);
  }
`;
