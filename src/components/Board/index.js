import React, { Fragment } from "react";
import Square from "../Square"

import "./styles.css";

const Board = ({ squares, onClick }) => {
  return (
    <Fragment>
      <div className="board__container">
        <h1 className="title">TIC TAC TOE</h1>
        <div className="board">
          {squares.map((square, i) => (
            <Square key={i} value={square} onClick={() => onClick(i)} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Board;
