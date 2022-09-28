import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLandmark } from '@fortawesome/free-solid-svg-icons'
import './Header.css'
const Header = () => {
    return (
        <div className='header-container'>
            <div>
                <h1 className='header-text'><FontAwesomeIcon icon={faLandmark} /> Daily Class Routine</h1>
                <h3>Select Today classes</h3>
            </div>

        </div>
    );
};

export default Header;