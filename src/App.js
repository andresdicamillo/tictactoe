import { Grid } from '@material-ui/core'
import Game from './Tictactoe/Game'
import './App.css';

const App = () => { 
  return (
    <div className="App">
      <header className="App-header">
        Welcome to the Tic Tac Toe Game
      </header>
      <Grid container>
        <Grid item xs={12}>
          <Game />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
