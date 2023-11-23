import React, { useEffect, useState } from "react";

const UseEffect5 = () => {
  const [count, setCount] = useState(0);
  const [txt, setTxt] = useState(0);

  const onNum = (evt) => {
    const { value } = evt.target;

    setTxt(Number(value)); // input의 반환 값은 문자열
  };
  const increment = () => {
    setCount((num) => num + txt);
  };

  useEffect(() => {
    const timer = setInterval(increment, 2000);

    // setInterval 제거 후 재렌더링
    return () => {
      console.log("클린업");
      clearInterval(timer);
    };
  }, [txt]);

  return (
    <div>
      <h2>입력한 값만큼 2초마다 값 증가</h2>
      <p>
        숫자 간격: <input type="text" onChange={onNum} value={txt} />
      </p>
      <h3>{count}</h3>
    </div>
  );
};

export default UseEffect5;
