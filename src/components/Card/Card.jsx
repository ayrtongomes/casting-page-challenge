import React from 'react';

import './index.css';

const Card = ({subCardsCount, title, icon, children, ...props}) => {

    return (
        <div className="card-main">
            <div className="card-header">
                <img className="icon" src={icon} alt="Icon"></img>
                <h4 className="title">{title}</h4>
                {/* <h4 className="count">{subCardsCount}</h4> */}
            </div>
            {children}
        </div>
    )
};

export default Card;
