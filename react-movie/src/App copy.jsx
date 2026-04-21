import { useState } from "react";
/**
 * 棋子
 * value:父组件传递的值
 * onSquareClick
 */
function Square({ value, onSquareClick }) {
  return (
    <>
      <button className="square" onClick={onSquareClick}>
        {value}
      </button>
    </>
  );
}
/**
 * 棋盘
 */
function Board({ xIsNext, squares, onPlay }) {
  // 判断是否赢下的状态
  let status;
  let winner = calculateWinner(squares);
  if (winner) {
    status = `Winner is ${winner}`;
  } else {
    status = `Next is ${xIsNext ? "X" : "O"}`;
  }
  function handleClick(i) {
    // 如果已经该棋子已经填充或者一方已经获胜，直接退出
    if (squares[i] || calculateWinner(squares)) return;
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }

    // setSquares(nextSquares);
    // setXIsNext(!xIsNext);
    onPlay(nextSquares);
  }
  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        {/* 传递的是一个函数 而不是执行结果*/}
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}
/**
 * 添加时间旅行
 */
export default function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  // 一个包含 9 个 null 的数组
  const [history, setHistory] = useState([Array(9).fill(null)]);
  // 当前棋盘
  const [currentMove, setCurrentMove] = useState(0);
  // 当前棋盘的状态
  const currentSquares = history[currentMove];

  // 显示过去的落子
  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = `Go to Move #${move}`;
    } else {
      description = `Go to Game Start`;
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });
  // 开始游戏
  function handlePlay(nextSquares) {
    console.log(nextSquares);
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    setXIsNext(!xIsNext);
  }
  // 回到过去的落子
  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
    setXIsNext(nextMove % 2 === 0);
  }
  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}
// 宣布获胜者
function calculateWinner(squares) {
  //获胜的可能
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  // 遍历该数组
  for (let i = 0; i < lines.length; i++) {
    let [a, b, c] = lines[i];
    if (squares[a] && squares[a] == squares[b] && squares[a] == squares[c]) {
      return squares[a];
    }
  }
  return null;
}
