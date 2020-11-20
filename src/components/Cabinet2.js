import React, { useState, useEffect } from "react";
import Free from "./Free";
import Occupied from "./Occupied";
import Mine from "./Mine";

export function Cabinet2({ locker, setLocker, mine }) {
  const [hasMine, setHasMine] = useState(false);
  useEffect(() => {
    if (mine[0] !== 0) {
      setHasMine(true);
    }
    return () => {};
  }, [mine]);
  return (
    <div>
      {locker.map((items, i) => {
        const arr = items.map((item, j) => {
          if (hasMine && mine[0] === 2 && mine[1] === i && mine[2] === j) {
            return <Mine key={i + j} id={"2_" + i + "_" + j} />;
          }
          if (item === 1) {
            return (
              <Free
                key={i + j}
                id={"2_" + i + "_" + j}
                setLocker={setLocker}
                hasMine={hasMine}
              />
            );
          } else {
            return (
              <Occupied key={i + j} id={"2_" + i + "_" + j} hasMine={hasMine} />
            );
          }
        });
        return <div key={i}>{arr}</div>;
      })}
    </div>
  );
}
export default Cabinet2;
