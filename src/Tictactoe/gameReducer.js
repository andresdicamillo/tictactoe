import checkWinner from './checkWinner'


const startGame = () => {
  return {
    gameStarted: true,
    xIsNext: true
  }
}

const selectSquare = ({action, state}) => {
  const {squares, xIsNext } = state
  const {square} = action
  const winner = checkWinner(squares)
  if (winner || squares[square]) {
    return state
  }
  const squaresCopy = [...squares]
  squaresCopy[square] = xIsNext ? 'X' : 'O'
  return {
    squares: squaresCopy,
    xIsNext: !xIsNext
  }
}

const resetGame = () => {
  return {
    squares: Array(9).fill(null),
    xIsNext: true,
    gameStarted: true
  }
}

const methods = {
  'START_GAME': startGame,
  'SELECT_SQUARE': selectSquare,
  'RESET_GAME': resetGame
}

const gameReducer = (state, action) => {
    try {
      return methods[action.type]({action, state})
    } catch(err) {
      throw new Error(
        `Unhandled action type: ${action.type}. Please fix it. Thank you.`,
      )
    }     
  }

export default gameReducer