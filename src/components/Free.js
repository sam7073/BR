import React from "react";
import styled from "styled-components";
import "../index.css";

const StyledFree = styled.button`
  width: 100px;
  height: 100px;
  background: #eeede3;

  display: inline-flex;
  justify-content: center;
  align-items: center;

  margin: 1px;
  border: none;
  border-radius: 5px;

  font-family: Maplestory;
  font-size: 18px;

  &:hover {
    cursor: pointer;
  }
`;

export function Free(props) {
  const onClick = (e) => {
    e.target.style.background = "#FAE32C";

    e.target.innerHTML = "예약 함";
    console.log(e.target.id.split("_"));
  };
  return (
    <StyledFree {...props} onClick={onClick} className="locker">
      예약 가능
    </StyledFree>
  );
}

export default Free;
