import React, { useState } from "react";

const Friendsinput = ({ onAdd }) => {
  const [txt, setTxt] = useState("");
  const [num, setNum] = useState("");
  const [img, setImg] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
  };
  const changeInputtxt = (e) => {
    const { value } = e.target;
    setTxt(value);
  };
  const changeInputnum = (e) => {
    const { value } = e.target;
    setNum(value);
  };
  const changeInputimg = (e) => {
    const { value } = e.target;
    setImg(value);
  };
  const onSubmit1 = () => {
    onAdd(txt, num, img);
  };
  return (
    <section>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">
          이름
          <input type="text" id="name" value={txt} onChange={changeInputtxt} />
        </label>
        <label htmlFor="age">
          나이
          <input type="text" id="age" value={num} onChange={changeInputnum} />
        </label>
        <label htmlFor="pic">
          사진
          <input type="text" id="pic" value={img} onChange={changeInputimg} />
        </label>
        <button className="add-btn" onClick={onSubmit1}>
          추가
        </button>
      </form>
    </section>
  );
};

export default Friendsinput;
