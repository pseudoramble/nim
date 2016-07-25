import React, { Component } from 'react';
import { connect } from 'react-redux';

import StickPile from './StickPile.jsx';
import GameControls from './GameControls.jsx';

class Nim extends Component {
    render() {
        const { dispatch, size } = this.props;

        const gameBoard = size > 0 ? (
            <div>
                <StickPile size={size} />
                <br />
                <GameControls takeAway={amount => dispatch({ type: "REMOVE_STICKS", payload: { amount: amount } })} />
            </div>
        ) : (
            <div>
                <h2>{"Sorry, you've lost this round. Refresh to play again!"}</h2>
            </div>
        );
        
        return (
            <div>
                <h1>The game of Nim</h1>
                {gameBoard}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    size: state.size
});

export default connect(mapStateToProps)(Nim);
