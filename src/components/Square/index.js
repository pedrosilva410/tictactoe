import React from "react";
import "./styles.css";

const Square = ({value, onClick}) => (
    <button onClick={onClick}>
        {value}
    </button>
  );

export default Square;
