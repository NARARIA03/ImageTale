import styled from "styled-components";

export const HeaderLayout = styled.div`
  @media (min-width: 1024px) {
    top: 20px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    top: 40px;
  }

  position: absolute;
  top: 96px;
  right: 12px;
  z-index: 45;
`;

export const Button = styled.button`
  width: 48px;
  height: 48px;
  margin-left: 6px;
  margin-right: 6px;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.15);
  }
`;
