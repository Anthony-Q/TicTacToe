import React from 'react';

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
            <div>Tic Tac Toe</div>
        )
    }
}

export default App;