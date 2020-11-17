import React from "react";
import Free from "../components/Free";
import Occupied from "../components/Occupied";

export function Cabinet1() {
  const tmp = [
    [1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 0, 1, 1, 1, 1],
    [1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 0, 1, 0, 1, 0, 1, 1, 1],
    [1, 1, 0, 1, 0, 1, 1, 1, 1, 1],
  ];
  return (
    <div>
      {tmp.map((items, index1) => {
        const arr = items.map((item, index2) => {
          if (item === 1) {
            return <Free i={index1 + index2} />;
          } else {
            return <Occupied />;
          }
        });
        return <div>{arr}</div>;
      })}
    </div>
  );
}
export default Cabinet1;
