import React from 'react';

import Header from 'components/Header/Header';
import './index.css';

const name = "Katerina";
const role = "Main Role";

const Container = () => {
    return (
        <div className="main">
            <Header container>
                <div className="item-project container-content">
                    <span>{name}</span>
                    <small>{role}</small>
                </div>
            </Header>
            <div className="container-content">

            </div>
        </div>
    )
};

export default Container;
