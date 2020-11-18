import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../index.css";
import { fadein } from "../components/styles";

const StyledNav = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
  animation: ${fadein} 1s;
`;

const StyledNavButton = styled.div`
  width: 130px;
  height: 60px;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 20px;
  font-weight: bold;
  font-family: Maplestory;
  text-decoration: none;
  &:hover {
    color: #bf0222;
  }
  &.activated {
    color: #bf0222;
  }
`;

export function Navigation() {
  useEffect(() => {
    const items = document.getElementsByClassName("NB");
    const num = window.location.href[window.location.href.length - 1];
    if (num === "p") {
      items[0].classList.add("activated");
    } else if (num === "1") {
      items[1].classList.add("activated");
    } else if (num === "2") {
      items[2].classList.add("activated");
    } else if (num === "3") {
      items[3].classList.add("activated");
    } else if (num === "4") {
      items[4].classList.add("activated");
    } else if (num === "5") {
      items[5].classList.add("activated");
    } else if (num === "y") {
      console.log(items);
      items[6].classList.add("activated");
    } else {
    }
  }, []);

  const onClick = (e) => {
    const items = document.getElementsByClassName("NB");
    for (let index = 0; index < items.length; index++) {
      items[index].classList.remove("activated");
      if (items[index] === e.target) {
        items[index].classList.add("activated");
      }
    }
  };
  return (
    <StyledNav>
      <Link to="/map" style={{ textDecoration: "none", color: "black" }}>
        <StyledNavButton onClick={onClick} className="NB">
          사물함 지도
        </StyledNavButton>
      </Link>
      <Link to="/C1" style={{ textDecoration: "none", color: "black" }}>
        <StyledNavButton onClick={onClick} className="NB">
          1번 사물함
        </StyledNavButton>
      </Link>
      <Link to="/C2" style={{ textDecoration: "none", color: "black" }}>
        <StyledNavButton onClick={onClick} className="NB">
          2번 사물함
        </StyledNavButton>
      </Link>
      <Link to="/C3" style={{ textDecoration: "none", color: "black" }}>
        <StyledNavButton onClick={onClick} className="NB">
          3번 사물함
        </StyledNavButton>
      </Link>
      <Link to="/C4" style={{ textDecoration: "none", color: "black" }}>
        <StyledNavButton onClick={onClick} className="NB">
          4번 사물함
        </StyledNavButton>
      </Link>
      <Link to="/C5" style={{ textDecoration: "none", color: "black" }}>
        <StyledNavButton onClick={onClick} className="NB">
          5번 사물함
        </StyledNavButton>
      </Link>
      <Link to="/My" style={{ textDecoration: "none", color: "black" }}>
        <StyledNavButton onClick={onClick} className="NB">
          나의 현황
        </StyledNavButton>
      </Link>
    </StyledNav>
  );
}

export default Navigation;
