import React, { useState, useEffect, useCallback } from "react";

const Ex1useEffectSub = () => {
  const [now, setNow] = useState(new Date());

  const updatetime = useCallback(() => {
    setNow(new Date());
  }, []);
  useEffect(() => {
    const timer = setInterval(updatetime, 1000);
    return () => {
      console.log("클린업");
      clearInterval(timer);
    };
  }, [updatetime]);
  return (
    <div>
      <h2>현재날짜 : {now.toLocaleDateString()}</h2>
      <h2>현재시간 : {now.toLocaleTimeString()}</h2>
    </div>
  );
};

export default Ex1useEffectSub;
