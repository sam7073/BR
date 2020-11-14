import React from "react";
import styled from "styled-components";
import { Card } from "../components/Card";
import Logo from "../Assets/Images/Logo.png";
import { Button } from "../components/Button";
import { authService } from "../fb";
import { fadein } from "../components/styles";
import { Navigation } from "../components/Navigation";
import { Route } from "react-router";
import { Cabinet1 } from "../components/Cabinet1";
import { Cabinet2 } from "../components/Cabinet2";
import { Cabinet3 } from "../components/Cabinet3";
import { Cabinet4 } from "../components/Cabinet4";
import { Cabinet5 } from "../components/Cabinet5";
import { My } from "../components/My";

const ChooseWrapper = styled.div`
  width: 100%;
  height: 850px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ChooseBox = styled.div`
  width: 1024px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoLogoutWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadein} 1s;
`;

const LogoutButton = styled(Button)`
  position: absolute;
  right: 0px;
`;

export function Choose() {
  const onClick = () => {
    authService.signOut();
  };
  return (
    <ChooseWrapper>
      <ChooseBox>
        <LogoLogoutWrapper>
          <img src={Logo} alt="Sejong SW Cabinet Logo" />
          <LogoutButton primary onClick={onClick}>
            로그아웃
          </LogoutButton>
        </LogoLogoutWrapper>
        <Navigation />
        <Card width="1024px" height="600px">
          <Route path="/C1">
            <Cabinet1 />
          </Route>
          <Route path="/C2">
            <Cabinet2 />
          </Route>
          <Route path="/C3">
            <Cabinet3 />
          </Route>
          <Route path="/C4">
            <Cabinet4 />
          </Route>
          <Route path="/C5">
            <Cabinet5 />
          </Route>
          <Route path="/my">
            <My />
          </Route>
        </Card>
      </ChooseBox>
    </ChooseWrapper>
  );
}

export default Choose;
