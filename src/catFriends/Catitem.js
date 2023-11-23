import React from "react";

const Catitem = ({ item, onDel }) => {
  const { id, name, age, image } = item;
  const path = process.env.PUBLIC_URL;

  return (
    <li>
      <img src={path + image} alt={name} />
      <div className="txtBox">
        <h3>이름:{name}</h3>
        <p>나이: {age}</p>
        <button onClick={() => onDel(id)}>삭제</button>
      </div>
    </li>
  );
};

export default Catitem;
