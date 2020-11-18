import React from "react";
import Free from "../components/Free";
import Occupied from "../components/Occupied";

export function Cabinet1({ locker, setLocker }) {
  return (
    <div>
      {locker.map((items, i) => {
        const arr = items.map((item, j) => {
          if (item === 1) {
            return (
              <Free key={i + j} id={"1_" + i + "_" + j} setLocker={setLocker} />
            );
          } else {
            return <Occupied key={i + j} id={"1_" + i + "_" + j} />;
          }
        });
        return <div key={i}>{arr}</div>;
      })}
    </div>
  );
}
export default Cabinet1;
