import React from 'react';
import TTTstyling from './style';
import Player from './player.jsx';
import PlayerStatus from "./playerStatus.jsx";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            board : Array(9).fill(null),
            player : null,
            winner : null
        }
        this.handleClick = this.handleClick.bind(this);
    }

    checkWinner() {
      const winningLines = [
          ["0", "1", "2"],
          ["3", "4", "5"],
          ["6", "7", "8"],
          ["0", "3", "6"],
          ["1", "4", "7"],
          ["2", "5", "8"],
          ["0", "4", "8"],
          ["2", "4", "6"],
      ]

      for (var index = 0; index < winningLines.length; index++) {
          const [a, b, c] = winningLines[index];
         if  (this.state.board[a] &&
              this.state.board[a] === this.state.board[b] && 
              this.state.board[a] === this.state.board[c]) {
                this.setState({
                    winner: this.state.player
                })
            }
        }
    }

    handleClick(index) {
        if (this.state.player && !this.state.winner) {
            let newBoard = this.state.board;
            if (this.state.board[index] === null && !this.state.winner) {
                newBoard[index] = this.state.player;
                const newPlayer = this.state.player === "X" ? "O" : "X"
                this.setState({
                    board : newBoard,
                    player: newPlayer
                })
                this.checkWinner();
            } 
        }
    }

    makePlayer(player) {
      this.setState({
          player : player
      })
    }

    render() {
        const Box = this.state.board.map( 
            (box, index) => 
              <div className="box" 
              key = {index}
              onClick = {() => this.handleClick(index)}>{box}</div>
        )


        return (
            <TTTstyling>

            <div className="board-container">
              <h1>Tic Tac Toe -- React</h1>
                <PlayerStatus player={this.state.player} 
                makePlayer={(e) => this.makePlayer(e)}/>
              <div className="board">
                {Box}
              </div>
            </div>
            </TTTstyling>
        )
    }
}

export default App;