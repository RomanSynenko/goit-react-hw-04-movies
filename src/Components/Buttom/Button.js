import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';


const Button = ({ handleGoBack, text }) => {
    return (
        <button
            className="Button"
            type="button"
            onClick={handleGoBack}>
            {text}
        </button>
    );
};
Button.prototype = {
    handleGoBack: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
};
export default Button;