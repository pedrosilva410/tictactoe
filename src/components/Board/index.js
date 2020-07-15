import React, { Fragment } from "react";
import Square from "../Square"

import "./styles.css";

const Board = ({squares, onClick}) => {
  return (
    <Fragment>
    <h1 className="title">TIC TAC TOE</h1>
    <div className="board">
        <Square value="1" onClick={()=> onClick(" dummy value")}/>
        <Square value="2" onClick={()=> onClick(" dummy value")}/>
        <Square value="3" onClick={()=> onClick(" dummy value")}/>
        <Square value="4" onClick={()=> onClick(" dummy value")}/>
        <Square value="5" onClick={()=> onClick(" dummy value")}/>
        <Square value="6" onClick={()=> onClick(" dummy value")}/>
        <Square value="7" onClick={()=> onClick(" dummy value")}/>
        <Square value="8" onClick={()=> onClick(" dummy value")}/>
        <Square value="9" onClick={()=> onClick(" dummy value")}/>
    </div>
    </Fragment>
  );
};

export default Board;
