import React, { useState } from "react";
import styled from "styled-components";
import { fadein } from "../components/styles";
import Logo from "../Assets/Images/Logo.png";
import "../index.css";
import { authService } from "../fb";

const SignupWrapper = styled.div`
  width: 100%;
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SignupBox = styled.div`
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
  margin-top: 20px;
  margin-bottom: 30px;
`;

const SignupForm = styled.form`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -70px;
`;

const SignupInput = styled.input`
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

const SignupButton = styled.button`
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

export function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onChange = (e) => {
    const {
      target: { name, value },
    } = e;
    if (name === "email") {
      setEmail(value);
    } else {
      setPassword(value);
    }
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await authService.createUserWithEmailAndPassword(email, password);
      window.history.back();
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        console.log("already");
        alert("이미 가입된 이메일입니다.");
      } else if (err.code === "auth/weak-password") {
        alert("너무 취약한 비밀번호입니다.");
      }
    }
  };
  return (
    <SignupWrapper>
      <SignupBox>
        <LogoWrapper>
          <img src={Logo} alt="세종 소프트웨어 사물함 예약 사이트 로고" />
        </LogoWrapper>
        <SignupForm onSubmit={onSubmit.bind(this)}>
          <SignupInput type="text" placeholder="학번" />
          <SignupInput
            name="email"
            type="email"
            placeholder="이메일"
            required
            onChange={onChange}
          />
          <SignupInput
            name="password"
            type="password"
            placeholder="비밀번호"
            required
            onChange={onChange}
          />
          <SignupInput type="password" placeholder="비밀번호 확인" />
          <SignupButton type="submit">가입하기</SignupButton>
          <SignupButton onClick={() => window.history.back()}>
            뒤로가기
          </SignupButton>
        </SignupForm>
      </SignupBox>
    </SignupWrapper>
  );
}

export default Signup;
