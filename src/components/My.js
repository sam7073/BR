import React from "react";
import styled from "styled-components";
import "../index.css";
import { Button } from "../components/Button";

const SteyldMy = styled.div`
  font-family: Maplestory;
  font-size: 18px;
`;

export function My({ mine }) {
  const onClick = (e) => {
    alert("예약이 취소되었습니다. 다시 예약해 주세요");
  };
  return (
    <>
      {mine[0] === 0 ? (
        <SteyldMy>예약한 사물함이 없습니다.</SteyldMy>
      ) : (
        <>
          <SteyldMy>
            {mine[0]}번 사물함의 {mine[1] + 1}번째 줄의 {mine[2] + 1}번째
            사물함을 예약 중입니다.
          </SteyldMy>
          <Button long thick primary marginTop="50px" onClick={onClick}>
            취소하기
          </Button>
        </>
      )}
    </>
  );
}

export default My;
