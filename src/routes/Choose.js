import React, { useEffect, useState } from "react";
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
import Axios from "axios";

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

export function Choose({ email }) {
  const onClick = () => {
    authService.signOut();
  };
  const [currentMenu, setCurrentMenu] = useState(0);
  const [mine, setMine] = useState([0, 0, 0]);
  const [locker1, setLocker1] = useState(
    Array(6)
      .fill()
      .map(() => Array(10).fill(1))
  );
  const [locker2, setLocker2] = useState(
    Array(6)
      .fill()
      .map(() => Array(10).fill(1))
  );
  const [locker3, setLocker3] = useState(
    Array(6)
      .fill()
      .map(() => Array(6).fill(1))
  );
  const [locker4, setLocker4] = useState(
    Array(6)
      .fill()
      .map(() => Array(6).fill(1))
  );
  const [locker5, setLocker5] = useState(
    Array(6)
      .fill()
      .map(() => Array(6).fill(1))
  );
  useEffect(() => {
    const num = window.location.href[window.location.href.length - 1];
    if (num === "1") {
      Axios.get("http://localhost:3002/cabinet1").then((res) =>
        setLocker1(res.data)
      );
    } else if (num === "2") {
      Axios.get("http://localhost:3002/cabinet2").then((res) =>
        setLocker2(res.data)
      );
    } else if (num === "3") {
      Axios.get("http://localhost:3002/cabinet3").then((res) =>
        setLocker3(res.data)
      );
    } else if (num === "4") {
      Axios.get("http://localhost:3002/cabinet4").then((res) =>
        setLocker4(res.data)
      );
    } else if (num === "5") {
      Axios.get("http://localhost:3002/cabinet5").then((res) =>
        setLocker5(res.data)
      );
    } else if (num === "y") {
      Axios.get("http://localhost:3002/mine", {
        params: { user_email: email },
      }).then((res) => {
        if (
          Object.keys(res.data).length === 0 &&
          res.data.constructor === Object
        ) {
          setMine([0, 0, 0]);
        } else {
          setMine(res.data);
        }
      });
    }
  }, [currentMenu, email]);

  return (
    <ChooseWrapper>
      <ChooseBox>
        <LogoLogoutWrapper>
          <img src={Logo} alt="Sejong SW Cabinet Logo" />
          <LogoutButton primary onClick={onClick}>
            로그아웃
          </LogoutButton>
        </LogoLogoutWrapper>
        <Navigation setCurrentMenu={setCurrentMenu} />
        <Card width="1024px" height="630px">
          <Route path="/map">
            <Map />
          </Route>
          <Route path="/C1">
            <Cabinet1
              locker={locker1}
              setLocker={setLocker1}
              mine={mine}
              email={email}
            />
          </Route>
          <Route path="/C2">
            <Cabinet2
              locker={locker2}
              setLocker={setLocker2}
              mine={mine}
              email={email}
            />
          </Route>
          <Route path="/C3">
            <Cabinet3
              locker={locker3}
              setLocker={setLocker3}
              mine={mine}
              email={email}
            />
          </Route>
          <Route path="/C4">
            <Cabinet4
              locker={locker4}
              setLocker={setLocker4}
              mine={mine}
              email={email}
            />
          </Route>
          <Route path="/C5">
            <Cabinet5
              locker={locker5}
              setLocker={setLocker5}
              mine={mine}
              email={email}
            />
          </Route>
          <Route path="/my">
            <My mine={mine} />
          </Route>
        </Card>
      </ChooseBox>
    </ChooseWrapper>
  );
}

export default Choose;
