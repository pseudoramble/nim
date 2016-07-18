import React from 'react';

const GameControls = ({ takeAway, limit }) => {
    let amount = 1;
    const onChange = (event) => amount = event.target.value;
    
    return (
        <div>
            <input onChange={onChange} type="number" defaultValue="1" min="1" max={limit} />
            <button onClick={() => takeAway(amount)}>
                Play Move
            </button>
        </div>
    )
};

export default GameControls;

GameControls.defaultProps = {
    takeAway: function() { },
    limit: 3
}
