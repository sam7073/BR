import React, { useState } from "react";
import styled from "styled-components";
import { fadein } from "./styles";
import Logo from "../Assets/Images/Logo.png";
import { Link } from "react-router-dom";
import { authService } from "../fb";

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
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginFormWrapper = styled.form`
  width: 100%;
  height: 200px;
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

const LoginVerticalLine = styled.div`
  width: 270px;
  height: 1px;
  background-color: #dbdbdb;
`;

const LoginButton = styled.button`
  width: 240px;
  height: 40px;
  border: none;
  border-radius: 5px;
  background-color: #c8bdad;
  font-weight: bold;
  margin-top: 10px;
  cursor: pointer;
  font-family: Maplestory;
  font-size: 20px;
`;

const LoginSubButton = styled.button`
  width: 240px;
  height: 35px;
  border-radius: 5px;
  border: none;
  margin-top: 10px;
  font-weight: bold;
  color: white;
  background-color: #960820;
  cursor: pointer;
  font-family: Maplestory;
  font-size: 15px;
`;

const StyledTextInput = styled.input`
  width: 220px;
  height: 45px;
  font-weight: bold;
  margin-bottom: 10px;
  border-radius: 4px;
  border: 1px grey solid;
  padding-left: 10px;
  font-size: 18px;
  font-family: Maplestory;
`;

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    } else {
      setPassword(value);
    }
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await authService.signInWithEmailAndPassword(
        email,
        password
      );
      console.log(data);
    } catch (err) {}
  };
  return (
    <LoginBoxWrapper>
      <LogoWrapper>
        <img src={Logo} alt="세종 소프트웨어 사물함 예약 사이트 로고" />
      </LogoWrapper>
      <LoginFormWrapper onSubmit={onSubmit}>
        <StyledTextInput
          name="email"
          type="email"
          placeholder="이메일"
          required
          value={email}
          onChange={onChange}
        ></StyledTextInput>
        <StyledTextInput
          name="password"
          type="password"
          placeholder="비밀번호"
          required
          value={password}
          onChange={onChange}
        ></StyledTextInput>
        <LoginButton type="submit">로그인</LoginButton>
      </LoginFormWrapper>
      <LoginVerticalLine />
      <LoginButtonWrapper style={{ marginTop: "10px" }}>
        <Link to="/signup">
          <LoginSubButton>회원가입</LoginSubButton>
        </Link>
        <Link to="/findpwd">
          <LoginSubButton>비밀번호 찾기</LoginSubButton>
        </Link>
      </LoginButtonWrapper>
    </LoginBoxWrapper>
  );
}

export default LoginForm;
