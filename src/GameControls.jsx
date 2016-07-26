import React from 'react';

const GameControls = ({ takeAway, limit }) => {
    let amount = 1;
    const onChange = (event) => amount = event.target.value;
    const onMount = (input) => {
        if (input && input.value) {
            amount = input.value;
        }
    }
    
    return (
        <div>
            <input style={{ "minHeight": "30px" }} ref={onMount} onChange={onChange} type="number" defaultValue="1" min="1" max={limit} />
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
