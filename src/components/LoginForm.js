import React from "react";
import styled from "styled-components";
import { fadein } from "./styles";
import Logo from "../Assets/Images/Logo.png";

const LoginBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 350px;
  height: 600px;
  border: 1px #dbdbdb solid;
  border-radius: 5px;
  background-color: white;
  animation: ${fadein} 1s;
  opacity: 0;
  animation-delay: 1s;
  animation-fill-mode: forwards;
  box-shadow: 0px 0px 100px 5px #323a40;
`;

const LogoWrapper = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginFormWrapper = styled.form`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LoginButtonWrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LoginButton = styled.button`
  width: 220px;
  height: 40px;
  border: none;
  border-radius: 10px;
  background-color: #c8bdad;
`;

const StyledTextInput = styled.input`
  width: 220px;
  height: 50px;
  margin-bottom: 10px;
  border-radius: 10px;
`;

export function LoginForm() {
  return (
    <LoginBoxWrapper>
      <LogoWrapper>
        <img src={Logo} alt="세종 소프트웨어 사물함 예약 사이트 로고" />
      </LogoWrapper>
      <LoginFormWrapper>
        <StyledTextInput type="text" placeholder="학번"></StyledTextInput>
        <StyledTextInput type="text" placeholder="비밀번호"></StyledTextInput>
      </LoginFormWrapper>
      <LoginButtonWrapper style={{ borderBottom: "1px black solid" }}>
        <LoginButton>로그인</LoginButton>
      </LoginButtonWrapper>
      <LoginButtonWrapper>
        <button>회원가입</button>
        <button>비밀번호 찾기</button>
      </LoginButtonWrapper>
    </LoginBoxWrapper>
  );
}

export default LoginForm;
