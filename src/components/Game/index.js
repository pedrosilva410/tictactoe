import React, { useState, Fragment } from "react"
import calculateResult from "../../js/calculateResult"
import Board from "../Board"

import "./styles.css"

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const result = calculateResult(board);

  const handleClick = i => {
    const boardCopy = [...board];
    // If user clicks an occupied square or if game is won, return
    if (result || boardCopy[i]) return;
    // decide wehtehr to put an X or an O in the clicked square
    boardCopy[i] = xIsNext ? 'X' : 'O';
    setBoard(boardCopy);
    setXIsNext(!xIsNext);
  }

  const renderMoves = () => {
    if (board.every(square => square === null)) {
      return null
    } else {
      return (
        <button className="restartGameBtn" onClick={() => setBoard(Array(9).fill(null))}>
          Restart Game
        </button>
      )
    }
  }

  const renderText = () => {
    if (result && result !== "tie") {
      return `Winner: ${result}`
    } else if (result && result === "tie") {
      return "It's a tie"
    } else if(board.every(square => square === null)){
      return `First Player: ${(xIsNext ? 'X' : 'O')}`
    } else {
      return `Next Player: ${(xIsNext ? 'X' : 'O')}`
    }
  }

  return (
    <Fragment>
      <Board squares={board} onClick={handleClick} />
      <div className="boardInfo">
        <p className="turnText">{renderText()}</p>
        {renderMoves()}
      </div>
    </Fragment>
  )
}

export default Game;
