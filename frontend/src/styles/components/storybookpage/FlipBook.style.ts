import HTMLFlipBook from "react-pageflip";
import styled from "styled-components";

export const FlipBookLayout = styled.div<{ $isDarkness: boolean }>`
  width: 100%;
  height: 100%;
  position: relative;
  padding: 28px 56px 32px 56px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  filter: brightness(${(props) => (props.$isDarkness ? 0.3 : 1)});
  background-image: linear-gradient(rgba(0, 0, 0, 0.227), rgba(0, 0, 0, 0.2)),
    url("/img/background.png");
  background-size: cover;
`;

export const TalkingheadBox = styled.div<{ $flag: boolean }>`
  @media (min-width: 1024px) {
    width: 256px;
    height: 256px;
    bottom: 20px;
    right: 20px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 176px;
    height: 176px;
    bottom: 40px;
    right: 40px;
  }

  @media (min-width: 640px) and (max-width: 767px) {
    width: 96px;
    height: 96px;
    bottom: 96px;
    right: 96px;
  }

  position: absolute;
  width: 56px;
  height: 56px;
  bottom: 96px;
  right: 64px;
  border-radius: 9999px;
  overflow: hidden;
  z-index: 40;
  box-shadow: ${(props) =>
    props.$flag
      ? "none"
      : "0 20px 25px rgba(0, 0, 0, 0.15), 0 10px 10px rgba(0, 0, 0, 0.05)"};

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: ${(props) => (props.$flag ? "0" : "1")};
  }
`;

export const ImageBox = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("/img/paper.jpg");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 64px;

  img {
    border-radius: 16px;
    width: 100%;
    border-radius: 16px;
    object-fit: cover;
    box-shadow: 0 10px 15px rgba(72, 72, 72, 0.4);
  }
`;

export const TextBox = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("/img/paper.jpg");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 64px;

  p:nth-child(1) {
    font-size: 20px;
    line-height: 28px;
  }

  p:nth-child(2) {
    font-size: 14px;
    line-height: 20px;
    position: absolute;
    bottom: 20px;
    left: 20px;
  }
`;

export const HtmlFlipBook = styled(HTMLFlipBook)`
  box-shadow: 4px 10px 15px rgba(0, 0, 0, 0.15), 0 4px 6px rgba(0, 0, 0, 0.2);
`;
