import React, { useReducer } from 'react'
import { Button } from '@material-ui/core'

import gameReducer from './gameReducer'
import checkWinner from './checkWinner'

const initialState = {
  gameStarted: false,
  squares: Array(9).fill(null),
  xIsNext: true,
}

const Board = () => {
  const [state, dispatch] = useReducer(gameReducer, initialState)
  const {squares, xIsNext} = state

  const getStatus = (squares, xIsNext) => {
    const winner = checkWinner(squares)
    if (winner) {
      return <><h1>The Winner is: {winner}</h1><Button variant="outlined" onClick={() => dispatch({type: 'RESET_GAME'})}>Play Again</Button></>
    } else if (squares.every(Boolean)) {
      return <><h1>It was a tie :/</h1><Button variant="outlined" onClick={() => dispatch({type: 'RESET_GAME'})}>Play Again</Button></>
    } else {
      return <><h1>Next player: {xIsNext ? 'X' : 'O'}</h1></>
    }
  }

  const renderSquare = (index) => {
    return (
      <Button className="square" onClick={() => selectSquare(index)}>
        {squares[index]}
      </Button>
    )
  }

  const selectSquare = (square) => {
    dispatch({type: 'SELECT_SQUARE', square})
  }

  return (
    <div>
      <div className="status">{getStatus(squares, xIsNext)}</div>
      <div className="row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  )
}

const Game = () => {
  const [state, dispatch] = useReducer(gameReducer, initialState)
  return (
    <div className="game">
      {state.gameStarted ? <Board /> : <Button variant="outlined" color="primary" onClick={() => dispatch({ type: 'START_GAME'})}>Start Game</Button>}
    </div>
  )
}

export default Game