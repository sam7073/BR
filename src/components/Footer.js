import React from "react";
import styled from "styled-components";
import { fadein } from "../components/styles";

const StyledFooter = styled.div`
  width: 100%;
  height: 80px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  animation: ${fadein} 1s;
  animation-fill-mode: forwards;
  animation-delay: 1s;
`;

const StyledFooterButton = styled.input`
  margin: 10px;
  font-family: Maplestory;
  font-weight: bold;
  font-size: 15px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const StyledFooterButtonWrapper = styled.div``;

const StyledCopyrightWrapper = styled.div`
  font-family: Maplestory;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  font-size: 12px;
`;

const StyledText = styled.span`
  color: #c30e2e;
`;

export function Footer() {
  return (
    <StyledFooter>
      <StyledFooterButtonWrapper>
        <StyledFooterButton
          type="button"
          value="학교홈페이지"
          onClick={() => window.open("http://www.sejong.ac.kr/")}
        />
        <StyledFooterButton
          type="button"
          value="학과홈페이지"
          onClick={() => window.open("http://home.sejong.ac.kr/~digitdpt/")}
        />
        <StyledFooterButton
          type="button"
          value="학과카페"
          onClick={() => window.open("https://cafe.naver.com/sejongsoftware")}
        />
        <StyledFooterButton
          type="button"
          value="학과페이스북"
          onClick={() => window.open("https://www.facebook.com/sejongdcsw")}
        />
      </StyledFooterButtonWrapper>
      <StyledCopyrightWrapper>
        <div>05006 서울특별시 광진구 능동로 209 (군자동) 세종대학교</div>
        <div>
          <StyledText>TEL</StyledText> 010-4256-3457{" "}
          <StyledText>E-MAIL</StyledText> genius98@sejong.ac.kr
        </div>
      </StyledCopyrightWrapper>
    </StyledFooter>
  );
}

export default Footer;
