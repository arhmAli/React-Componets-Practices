import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Input = () => {
  let [data, setData] = useState({
    id: 1,
    info: " ",
    password: 0
  });

  const passwordChange = (e) => {
    setData({ ...data, password: e.target.value });
  };
  const handleChange = (e) => {
    setData({ ...data, info: e.target.value });
  };
  //we can use usenavigate hook to send some data
  //from one component to another
  //declare some const with use navigate.
  const history = useNavigate();

  const handleSubmit = () => {
    //in some kind of event listener use history and pass
    //the information as args in the following way!
    history("/parser", { state: { id: data.info, name: data.password } });
  };
  console.log(`pass${data.password}`);
  console.log(`infos${data.info}`);
  return (
    <>
      <input type="text" value={data.info || ""} onChange={handleChange} />
      <input type="password" value={data.password} onChange={passwordChange} />
      <button onClick={handleSubmit}>CLICK</button>
    </>
  );
};
export default Input;
