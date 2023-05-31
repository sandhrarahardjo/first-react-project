import React from 'react';

import Constants from '../../Constants';

// import style inside Jumbotron component
import './Jumbotron.component.style.css';

// Component without props
const Jumbotron = () => (
    <div className="jumbotron">
        <h1 className="display-4">{Constants.JUMBOTRON_TITLE}</h1>
    </div>
)

export default Jumbotron;
