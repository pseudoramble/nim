import React from 'react';

export default (props) => (
    <div style={{"border": "1px dashed"}}>
        <h1>The game of Nim</h1>
        <p>The objective is simple - The player to remove the last stick left in the pile wins!</p>
        <p>You may only pull 1, 2, or 3 sticks off per move.</p>
    </div>
);
