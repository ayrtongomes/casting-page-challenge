import React from 'react';
import avatar from 'assets/img/christian.jpg';

import './index.css';

const SubCard = ({mainTitle, secondTitle,children, ...props}) => {

    return (
        <div className="subcard-main">
            <div className="avatar-icon">
                <img src={avatar} alt="Avatar" />
            </div>
            <div className="subcard-text">
                <span>{mainTitle}</span>
                <small>{secondTitle}</small>
            </div>
            {children}
        </div>
    )
};

export default SubCard;
