import React from 'react';
import { times } from 'lodash';

import Stick from './Stick.jsx';

const StickPile = ({ size }) => {
    return (
        <div>
            { times(size, (i) => <Stick key={i} />) }
        </div>
    )
};

export default StickPile;

StickPile.defaultProps = {
    size: 7
}
