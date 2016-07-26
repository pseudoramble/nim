import React, { Component } from 'react';
import { connect } from 'react-redux';

import StickPile from './StickPile.jsx';
import GameControls from './GameControls.jsx';
import MoveLog from './MoveLog.jsx';
import Header from './Header.jsx';

class Nim extends Component {
    render() {
        const { dispatch, moveLog, size } = this.props;

        const gameBoard = size > 0 ? (
            <div style={{"margin-top": "15px"}}>
                <StickPile size={size} />
                <br />
                <GameControls takeAway={amount => dispatch({ type: "REMOVE_STICKS", payload: { amount: amount } })} />
                <MoveLog moves={moveLog} />
            </div>
        ) : (
            <div>
                <h2>{"Sorry, you've lost this round. Refresh to play again!"}</h2>
                <MoveLog moves={moveLog} />
            </div>
        );
        
        return (
            <div>
                <Header />
                {gameBoard}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    size: state.size,
    moveLog: state.moves
});

export default connect(mapStateToProps)(Nim);
