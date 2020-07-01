import React from "react";
import "./styles.css";

const Square = ({value, handleClick}) => (
    <button onClick={handleClick}>
        {value}
    </button>
  );

export default Square;
