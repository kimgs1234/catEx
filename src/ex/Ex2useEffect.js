import React, { useState, useEffect, useCallback } from "react";

const Ex2useEffect = () => {
  const [count, setCount] = useState(0);
  const [istoggle, setIsToggle] = useState(false);
  const handleToggle = () => {
    setIsToggle(!istoggle);
  };

  const updatenum = useCallback(() => {
    setCount((num) => num + 1);
  }, []);
  useEffect(() => {
    let timer = null;
    if (istoggle) {
      timer = setInterval(updatenum, 1000);
    } else {
      clearInterval(timer);
    }

    return () => {
      console.log("클린업");
      clearInterval(timer);
    };
  }, [istoggle]);
  const onReset = () => {
    setCount(0);
    setIsToggle(false);
  };
  return (
    <div className="borderTop">
      <h2>1초 마다 카운트</h2>
      <h2>count : {count}</h2>
      <button onClick={handleToggle}>{istoggle ? "멈춤" : "시작"}</button>
      <button onClick={onReset}>정지 및 초기화</button>
    </div>
  );
};

export default Ex2useEffect;
