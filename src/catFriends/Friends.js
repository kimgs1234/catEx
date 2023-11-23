import React, { useState, useCallback } from "react";
import catData from "../assets/DB/catData";
import Friendsinput from "./Friendsinput";
import CatList from "./CatList";
import "./Cat.css";

const Friends = () => {
  const [data, setData] = useState(catData);
  const [istoggle, setIsToggle] = useState(false);

  const handleToggle = () => {
    setIsToggle(!istoggle);
  };
  //  삭제
  const onDel = (id) => {
    setData(data.filter((list) => list.id !== id));
  };
  //  모두 삭제
  const allDel = () => {
    setData([]);
  };
  // 복구
  const reset = () => {
    setData(catData);
  };
  // 추가
  const onAdd = useCallback(
    (txt, num, img) => {
      setData([
        ...data,
        { id: catData.length + 1, name: txt, age: num, image: img },
      ]);
    },
    [data]
  );

  return (
    <div className="boxStyle">
      <div className="title-container">
        <h2>고양이 친구들 : {data.length}마리</h2>
        <label htmlFor="chk">
          <input type="checkbox" id="chk" onClick={handleToggle} /> 고양이추가
        </label>
      </div>

      <CatList data={data} onDel={onDel} />
      <div className="btn-wrapper">
        <button className="all-btn" onClick={allDel}>
          모두삭제
        </button>
        <button className="all-btn" onClick={reset}>
          초기복구
        </button>
      </div>
      {istoggle && <Friendsinput onAdd={onAdd} />}
    </div>
  );
};
export default Friends;
