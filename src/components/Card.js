import React from "react";
import styled from "styled-components";
import { fadein } from "./styles";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: ${(props) => props.width || "350px"};
  height: ${(props) => props.height || "600px"};

  border: 1px #dbdbdb solid;
  border-radius: 5px;
  background-color: white;
  animation: ${fadein} 1s;
  opacity: 0;
  animation-delay: 1s;
  animation-fill-mode: forwards;
  box-shadow: 0px 0px 100px 5px #323a40;
`;

export function Card(props) {
  return <StyledCard {...props}></StyledCard>;
}

export default Card;
