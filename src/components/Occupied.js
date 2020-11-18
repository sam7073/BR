import React from "react";
import styled from "styled-components";
import "../index.css";

const StyledOccupied = styled.span`
  width: 100px;
  height: 100px;

  background: #960820;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  margin: 1px;
  border-radius: 5px;

  font-family: Maplestory;
  font-size: 15px;
`;

export function Occupied(props) {
  return (
    <StyledOccupied {...props} className="locker">
      예약 됨
    </StyledOccupied>
  );
}

export default Occupied;
