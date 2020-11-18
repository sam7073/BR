import React, { useState } from "react";
import styled from "styled-components";
import { Card } from "../components/Card";
import Logo from "../Assets/Images/Logo.png";
import { Button } from "../components/Button";
import { authService } from "../fb";
import { fadein } from "../components/styles";
import { Navigation } from "../components/Navigation";
import { Route } from "react-router";
import { Map } from "../components/Map";
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
  const [locker1, setLocker1] = useState([
    [1, 1, 1, 0, 1, 1, 1, 0, 1, 1],
    [1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
  ]);
  const [locker2, setLocker2] = useState([
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 0, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 0, 0, 1],
  ]);
  const [locker3, setLocker3] = useState([
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 0],
    [0, 0, 1, 0, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
  ]);
  const [locker4, setLocker4] = useState([
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 0, 0],
    [1, 1, 1, 1, 0, 1],
    [0, 1, 1, 1, 0, 1],
    [1, 1, 1, 1, 1, 1],
  ]);
  const [locker5, setLocker5] = useState([
    [1, 1, 0, 1, 1, 1],
    [1, 0, 0, 1, 1, 0],
    [1, 1, 0, 1, 1, 1],
    [0, 1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 0, 1, 1],
  ]);
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
        <Card width="1024px" height="630px">
          <Route path="/map">
            <Map />
          </Route>
          <Route path="/C1">
            <Cabinet1 locker={locker1} setLocker={setLocker1} />
          </Route>
          <Route path="/C2">
            <Cabinet2 locker={locker2} setLocker={setLocker2} />
          </Route>
          <Route path="/C3">
            <Cabinet3 locker={locker3} setLocker={setLocker3} />
          </Route>
          <Route path="/C4">
            <Cabinet4 locker={locker4} setLocker={setLocker4} />
          </Route>
          <Route path="/C5">
            <Cabinet5 locker={locker5} setLocker={setLocker5} />
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
