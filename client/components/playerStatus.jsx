import React from 'react';
import Player from "./player.jsx";

class PlayerStatus extends React.Component {
  
    handlePlayer(e) {
        this.props.makePlayer(e);
    }

    handleWinner() {
        if (this.props.winner) {
           return <h2>Winner is {this.props.player}</h2>
        }
    }

    render() {
        return (

            {handleWinner}
            this.props.player ?  
            <h2>Next: {this.props.player}</h2> : 
            <Player player={(e) => this.handlePlayer(e)}/>
        )
    }
}

export default PlayerStatus;