import { React, useState } from "react";
//import data from "./data/data";
//import Search from "./Search";

const Create = () => {
  const [add, setAdd] = useState("");
  const [val, setVal] = useState([]);

  const handleChange = (e) => {
    setAdd(e.target.value);
  };
  const handleClick = () => {
    setVal(val.concat(add));
    setAdd("");
  };
  const handleRemove = (e) => {
    let array = [...val];
    let index = array.indexOf(e.target.value);
    array.splice(index, 1);
    setVal(array);
    // let newArray = array.filter((item, ind) => ind !== e.target);
    // setVal(newArray);
    // console.log(newArray);
  };

  //console.log(val);
  return (
    <>
      <h3>Add Player's In List</h3>
      <input type="text" onChange={handleChange} value={add} />
      <button onClick={handleClick}>Add</button>
      <ul>
        {val.map((item, ind) => {
          return (
            <>
              <li>
                <button onClick={handleRemove}>{item}</button>
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
};
export default Create;
