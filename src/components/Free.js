import React from "react";
import styled from "styled-components";
import "../index.css";

const StyledFree = styled.span`
  width: 100px;
  height: 100px;
  background: ${(props) => (props.i % 2 === 0 ? "#EEEDE3" : "#960820")};
  background: #eeede3;

  display: inline-flex;
  justify-content: center;
  align-items: center;

  margin: 1px;
  border-radius: 5px;

  font-family: Maplestory;
`;

export function Free(props) {
  console.log(props.index1);
  return <StyledFree {...props}>예약 가능</StyledFree>;
}

export default Free;
