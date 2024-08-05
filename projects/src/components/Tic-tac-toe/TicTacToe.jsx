import React, { useState, useEffect } from "react";

function Square({ value, onClick }) {
  return (
    <button
      onClick={onClick}
      className="square border-2 float-left text-4xl h-24 p-0 text-center w-24 border-gray-500  bg-gray-200"
    >
      {value}
    </button>
  );
}



function TicTacToe() {
  const [squares, setsquares] = useState(Array(9).fill(""));
  console.log(squares);
  const [isXTurn, setisXTurn] = useState(true);
  const [status, setstatus] = useState("");

  function getWinner(squares) {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
    ];

    for (let i = 0; i < winningPatterns.length; i++) {
      const [x, y, z] = winningPatterns[i];
      if (
        squares[x] &&
        squares[x] === squares[y] &&
        squares[x] === squares[z]
      ) {
        return squares[x];
      }
    }
    return null;
  }



  function handleClick(getCurrentSquare) {
    let cpySquares = [...squares];
    if (getWinner(cpySquares) || cpySquares[getCurrentSquare]) return;
    cpySquares[getCurrentSquare] = isXTurn ? "X" : "O";
    setisXTurn(!isXTurn);
    setsquares(cpySquares);
  }

  

  useEffect(() => {
    if (!getWinner(squares) && squares.every((item) => item !== "")) {
      setstatus("This is a draw ! please restart the game");
    } else if (getWinner(squares)) {
      setstatus(`Winner is ${getWinner(squares)}`);
    } else {
      setstatus(`Next player is ${isXTurn ? "X" : "O"}`);
    }
  }, [squares, isXTurn]);



  return (
    <div className="tic-tac-toe-container flex flex-col items-center mt-24">
      <div className="row">
        <Square value={squares[0]} onClick={() => handleClick(0)} />
        <Square value={squares[1]} onClick={() => handleClick(1)} />
        <Square value={squares[2]} onClick={() => handleClick(2)} />
      </div>
      <div className="row">
        <Square value={squares[3]} onClick={() => handleClick(3)} />
        <Square value={squares[4]} onClick={() => handleClick(4)} />
        <Square value={squares[5]} onClick={() => handleClick(5)} />
      </div>
      <div className="row">
        <Square value={squares[6]} onClick={() => handleClick(6)} />
        <Square value={squares[7]} onClick={() => handleClick(7)} />
        <Square value={squares[8]} onClick={() => handleClick(8)} />
      </div>
      <h1 className="mt-2 text-3xl font-bold">{status}</h1>
    </div>
  );
}

export default TicTacToe;
