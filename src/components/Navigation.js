import React from "react";
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
  width: 150px;
  height: 60px;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

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
  const onClick = (e) => {
    const items = document.getElementsByClassName("NB");
    for (let index = 0; index < items.length; index++) {
      items[index].classList.remove("activated");
    }
    e.target.classList.add("activated");
  };
  return (
    <StyledNav>
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
