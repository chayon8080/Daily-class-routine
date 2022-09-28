import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLandmark } from '@fortawesome/free-solid-svg-icons'
const Header = () => {
    return (
        <div>
            <h1><FontAwesomeIcon icon={faLandmark} /> Daily Class Routine</h1>
            <h3>Select Today classes</h3>
        </div>
    );
};

export default Header;