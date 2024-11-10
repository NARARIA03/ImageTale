import styled from "styled-components";

export const SelectPageLayout = styled.div`
  position: fixed;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 28px 56px 32px 56px;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 50;
`;

export const PageBox = styled.div`
  width: 500px;
  padding: 32px;
  background: rgba(212, 212, 226, 1);
  border: 1px solid #e2e8f0;
  border-radius: 12px;
`;

export const ImageBox = styled.div`
  margin: 0px auto;
  width: 351px;
  overflow: hidden;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: end;
  box-shadow: 0 10px 15px rgba(72, 72, 72, 0.4);
  filter: brightness(0.75);

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const TextBox = styled.div`
  width: 91.666667%;
  margin: 40px auto 0px auto;
  height: 208px;
  background-color: ${({ theme }) => theme.pink};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
  box-shadow: 0 10px 15px rgba(72, 72, 72, 0.4);
  transition: transform 0.2s ease;
  font-size: 20px;
  line-height: 28px;
  overflow-wrap: break-word;

  &:hover {
    transform: scale(1.05);
  }
`;
