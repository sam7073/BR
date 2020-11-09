import { keyframes } from "styled-components";

export const fadein = keyframes`
  0%{
    opacity:0;
  }
  100%{
    opacity:1;
  }
`;

export const logoAnimation = keyframes`
  0%{
    opacity:0;
    transform:translate(270px);
  }
  40%{
    opacity:1;
    transform:translate(270px);
  }
  100%{

  }
`;

export const fadeout = keyframes`
    0%{
    opacity:1;
  }
  100%{
    opacity:0;
  }
`;

export const zoom = keyframes`
  0%{
    transform: scale(1);
  }
  100%{
    transform: scale(0);
  }
`;
