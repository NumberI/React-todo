import React from "react";
import "./main-header.css";

const MainHeader = ({ done, todo }) => {
  return (
    <div className="main-header">
      <h1>Список очень важных дел</h1>
      <h2>
        Done: {done}, more to do: {todo}
      </h2>
    </div>
  );
};

export default MainHeader;
