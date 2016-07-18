import React, { Component } from 'react';
import StickPile from './StickPile.jsx';
import GameControls from './GameControls.jsx';

export default class Nim extends Component {
    render() {
        return (
            <div>
                <h1>The game of Nim</h1>
                <StickPile />
                <br />
                <GameControls takeAway={amount => console.warn(`Taking away ${amount} sticks now`)} />
            </div>
        );
    }
}
