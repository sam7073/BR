import React from "react";
import styled, { keyframes } from "styled-components";
import "../index.css";

const LoderDotColor = "#C30E2E";

const animateLoader = keyframes`
  0%{
    opacity:0;
  }
  100%{
    opacity:1;
  }
`;

const animateLoaderDot = keyframes`
    0%{
        width:20px;
        height:20px;
    }
    80%, 100%{
        transform: scale(0);
    }
`;

const StyledLoaderSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const StyledSpan = styled.span`
  position: absolute;
  font-family: Maplestory;
`;

const StyledSection = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
`;

const LoaderDot = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: rotate(calc(18deg * ${(props) => props.index}));
  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0px;
    height: 0px;
    background: ${LoderDotColor};
    border-radius: 50%;
    animation: ${animateLoaderDot} 1.5s linear infinite;
    animation-delay: calc(0.075s * ${(props) => props.index});
  }
`;

export function Loader(props) {
  return (
    <StyledLoaderSection>
      <StyledSpan>로딩중</StyledSpan>
      <StyledSection>
        <LoaderDot index={1}></LoaderDot>
        <LoaderDot index={2}></LoaderDot>
        <LoaderDot index={3}></LoaderDot>
        <LoaderDot index={4}></LoaderDot>
        <LoaderDot index={5}></LoaderDot>
        <LoaderDot index={6}></LoaderDot>
        <LoaderDot index={7}></LoaderDot>
        <LoaderDot index={8}></LoaderDot>
        <LoaderDot index={9}></LoaderDot>
        <LoaderDot index={10}></LoaderDot>
        <LoaderDot index={11}></LoaderDot>
        <LoaderDot index={12}></LoaderDot>
        <LoaderDot index={13}></LoaderDot>
        <LoaderDot index={14}></LoaderDot>
        <LoaderDot index={15}></LoaderDot>
        <LoaderDot index={16}></LoaderDot>
        <LoaderDot index={17}></LoaderDot>
        <LoaderDot index={18}></LoaderDot>
        <LoaderDot index={19}></LoaderDot>
        <LoaderDot index={20}></LoaderDot>
      </StyledSection>
    </StyledLoaderSection>
  );
}

export default Loader;
