import styled from "styled-components";

export const BookCardLayout = styled.div`
  cursor: pointer;
  box-shadow: 0 10px 15px rgba(72, 72, 72, 0.4);
  border-radius: 24px;
  position: relative;
  overflow: hidden;
`;

export const BackgroundImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
  filter: blur(6px);
`;

export const BottomBox = styled.div`
  width: 100%;
  min-height: 150px;
  padding: 24px;
  position: absolute;
  bottom: 0px;
  z-index: 30px;
  background-color: ${({ theme }) => theme.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: start;
  border-top: 2px solid ${({ theme }) => theme.black};

  & > h1 {
    font-size: 16px;
    padding-left: 40%;
  }
  & > p {
    font-size: 13px;
    padding-left: 40%;
  }
`;

export const ThumbnailImg = styled.div`
  position: absolute;
  width: 30%;
  height: 120%;
  bottom: 25px;
  overflow: hidden;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: 2px solid ${({ theme }) => theme.black};
  }
`;
