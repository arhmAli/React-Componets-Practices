import { React, useState } from "react";

const Search = ({ search }) => {
  const [val, setVal] = useState("");

  const handleChange = (e) => {
    setVal(e.target.value);
    console.log(val);
    search(val);
  };
  return (
    <>
      <input type="text" onChange={handleChange} />
    </>
  );
};
export default Search;
