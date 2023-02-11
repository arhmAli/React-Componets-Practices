import React from "react";
import { useLocation } from "react-router-dom";
const Parser = () => {
  const location = useLocation();
  console.log(location.state);
  return (
    <div>
      <h1>The user name provided is:{location.state.id}</h1>
      <h1>The password provided is:{location.state.name}</h1>
    </div>
  );
};
export default Parser;
