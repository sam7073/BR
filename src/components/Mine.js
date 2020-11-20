import React from "react";
import styled from "styled-components";
import "../index.css";

const StyledMine = styled.button`
  width: 100px;
  height: 100px;
  background: #fae32c;

  display: inline-flex;
  justify-content: center;
  align-items: center;

  margin: 1px;
  border: none;
  border-radius: 5px;

  font-family: Maplestory;
  font-size: 18px;
`;

export function Mine(props) {
  return (
    <StyledMine {...props} className="locker">
      예약 함
    </StyledMine>
  );
}

export default Mine;
