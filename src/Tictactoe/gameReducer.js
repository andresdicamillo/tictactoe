import checkWinner from './checkWinner'

const gameReducer = (state, action) => {
    const {squares, xIsNext } = state
    switch (action.type) {
      case 'START_GAME': {
        return {
          gameStarted: true,
          xIsNext: true
        }
      }
      case 'SELECT_SQUARE': {
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
      case 'RESET_GAME': {
        return {
          squares: Array(9).fill(null),
          xIsNext: true,
          gameStarted: true
        }
      }
      default: {
        throw new Error(
          `Unhandled action type: ${action.type}. Please fix it. Thank you.`,
        )
      }
    }
  }

  export default gameReducer