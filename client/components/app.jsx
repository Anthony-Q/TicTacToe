import React from 'react';
import TTTstyling from './style';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ecks: 0,
            ohs: 0,
        }
    }

    render() {
        return (
            <TTTstyling>

            <div className="board-container">
              <h1>Tic Tac Toe -- React</h1>
              <div className="board">
                <div className="box">x</div>
                <div className="box">x</div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
              </div>
            </div>
            </TTTstyling>
        )
    }
}

export default App;