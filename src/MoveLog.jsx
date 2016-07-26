import React from 'react';

export default ({ moves }) => {
    const eachStep = moves.length > 0 ?
                     moves.map((action, i) => <div key={i}>{`${action.player === "user" ? "You" : "The computer"} removed ${action.move} sticks`}</div>)
        : [<div>{"Begin when you're ready!"}</div>];
    
    return (
        <div>
            {eachStep}
        </div>
    )
};
