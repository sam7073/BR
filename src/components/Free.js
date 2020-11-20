import Axios from "axios";
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
  const onClick = async (e) => {
    if (props.hasMine) {
      alert("이미 예약한 사물함이 있습니다.");
    } else {
      props.setHasMine(true);
      e.target.style.background = "#fae32c";
      e.target.innerHTML = "예약 함";
      const batch = e.target.id.split("_")[0];
      const row_num = e.target.id.split("_")[1];
      const col_num = e.target.id.split("_")[2];
      await Axios.get("http://localhost:3002/reserve", {
        params: {
          batch: batch,
          row_num: row_num,
          col_num: col_num,
          email: props.email,
        },
      }).then((res) => {
        console.log(props.hasMine);
      });
    }
  };
  return (
    <StyledFree {...props} onClick={onClick} className="locker">
      예약 가능
    </StyledFree>
  );
}

export default Free;
