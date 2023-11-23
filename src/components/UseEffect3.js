import React, { useState } from "react";
import UseEffect3Sub from "./UseEffect3Sub";

const UseEffect3 = () => {
  const [istoggle, setIsToggle] = useState(false);
  const handleToggle = () => {
    setIsToggle(!istoggle);
  };
  return (
    <section>
      <h2>UseEffect3</h2>
      {/* 토글버튼 */}
      <button onClick={handleToggle}>{istoggle ? "숨김" : "보임"}</button>
      {istoggle && <UseEffect3Sub />}
    </section>
  );
};

export default UseEffect3;
