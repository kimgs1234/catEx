import React from "react";
import Catitem from "./Catitem";

const CatList = ({ data, onDel }) => {
  return (
    <ul>
      {data.map((item) => (
        <Catitem key={item.id} item={item} onDel={onDel} />
      ))}
    </ul>
  );
};

export default CatList;
