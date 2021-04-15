import React from 'react';
import PropTypes from 'prop-types';

import s from './Button.module.scss';

const LoadButton = ({ loadMore }) => {
    return (
        <button className={s.Button} type="button" onClick={loadMore}>
            Load more
        </button>
    );
};
LoadButton.prototype = {
    loadMore: PropTypes.func.isRequired,
};
export default LoadButton;