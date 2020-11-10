import React from "react";
import styled from "styled-components";
import { fadein } from "../components/styles";
import Logo from "../Assets/Images/Logo.png";
import "../index.css";

const FindPwdWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FindPwdBox = styled.div`
  width: 600px;
  height: 600px;
  border-radius: 10px;
  box-shadow: 0px 0px 100px 5px #323a40;
  background-color: white;
  animation: ${fadein} 1s;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoWrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
`;

const FindPwdForm = styled.form`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -70px;
`;

const FindPwdInput = styled.input`
  width: 380px;
  height: 50px;
  font-size: 20px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 3px;
  border: 1px grey solid;
  margin-bottom: 20px;
  font-weight: bold;
  font-family: Maplestory;
`;

const FindPwdButton = styled.button`
  width: 400px;
  height: 50px;
  font-size: 20px;
  font-family: MapleStory;
  border: none;
  border-radius: 5px;
  background-color: #960820;
  color: white;
  margin-top: 10px;
  cursor: pointer;
`;

const handleFindPwdSubmit = (e) => {
  e.preventDefault();
};

export function FindPwd() {
  return (
    <FindPwdWrapper>
      <FindPwdBox>
        <LogoWrapper>
          <img src={Logo} alt="세종 소프트웨어 사물함 예약 사이트 로고" />
        </LogoWrapper>
        <FindPwdForm onSubmit={handleFindPwdSubmit}>
          <FindPwdInput type="text" placeholder="학번"></FindPwdInput>
          <FindPwdInput type="text" placeholder="이메일"></FindPwdInput>
          <FindPwdButton type="submit">이메일 발송</FindPwdButton>
          <FindPwdButton onClick={() => window.history.back()}>
            뒤로가기
          </FindPwdButton>
        </FindPwdForm>
      </FindPwdBox>
    </FindPwdWrapper>
  );
}

export default FindPwd;
