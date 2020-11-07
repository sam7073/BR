import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background: ${(props) => props.bg};
`;

export function Button(props) {
  return <StyledButton {...props}>{props.children}</StyledButton>;
}
