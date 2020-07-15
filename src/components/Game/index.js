import React, {useState, Fragment} from "react"
import calculateWinner from "../../js/calculateWinner"
import Board from "../Board"

import "./styles.css"

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = i => {
    const boardCopy = [...board];
    // If user clicks an occupied square or if game is won, return
    if (winner || boardCopy[i]) return;
    // decide wehtehr to put an X or an O in the clicked square
    boardCopy[i] = xIsNext ? 'X' : 'O';
    setBoard(boardCopy);
    setXIsNext(!xIsNext);
  }
  
  const renderMoves = () => (
    <button onClick={() => setBoard(Array(9).fill(null))}>
    Start Game
    </button>
  )
  
  return (
    <Fragment>
    <Board squares={board} onClick={handleClick} />
    <div className="boardInfo">
        <p>{winner ? 'Winner: ' + winner : 'Next Player: ' + (xIsNext ? 'X' : 'O')}</p>
        {renderMoves()}
    </div>
    </Fragment>
  )
}

export default Game;
