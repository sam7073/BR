import React from "react";
import { SejongLogo } from "../components/SejongLogo";
import { LoginForm } from "../components/LoginForm";
import { logoAnimation } from "../components/styles";
import styled from "styled-components";

const StyledLogin = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 1200px;
  height: 850px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLogo = styled(SejongLogo)``;

const LogoWrapper = styled.span`
  width: 550px;
  height: 850px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${logoAnimation} 2s;
`;

const FormWrapper = styled.span`
  width: 550px;
  height: 850px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export function Login() {
  return (
    <StyledLogin>
      <Wrapper>
        <LogoWrapper>
          <StyledLogo></StyledLogo>
        </LogoWrapper>
        <FormWrapper>
          <LoginForm></LoginForm>
        </FormWrapper>
      </Wrapper>
    </StyledLogin>
  );
}

export default Login;
