import { React, useState } from "react";
import data from "./data/data";
import Search from "./Search";

const List = () => {
  const [play, setPlay] = useState("");

  function search(data) {
    return setPlay(data);
  }
  console.log(play);
  return (
    <>
      <Search search={search} />
      <p>Search to see if a user is logged in:</p>
      <ul>
        {data
          .filter((name) => name.includes(play || play.data))
          .map((filteredName) => (
            <li>{filteredName}</li>
          ))}
      </ul>
    </>
  );
};
export default List;
