import React from 'react';
import Player from "./player.jsx";

class PlayerStatus extends React.Component {
  
    handlePlayer(e) {
        this.props.makePlayer(e);
    }

    handleWinner() {
        if (this.props.winner) {
           return <h2>Winner is {this.props.player}</h2>
        } else {
            return this.props.player ?  
            <h2>Next: {this.props.player}</h2> : 
            <Player player={(e) => this.handlePlayer(e)}/>
        }
    }

    render() {
        return (
          <span>{this.handleWinner()}</span>
        )
    }
}

export default PlayerStatus;