import React from 'react';

import logo from 'assets/img/play-arrow.svg';
import loupe from 'assets/img/icons/icon-search.svg';
import avatar from 'assets/img/christian.jpg';

import './index.css';

const Header = ({container,brand, mainHeader, children,...props}) => {

    return (
        <>
            <section className={!container &&  "navigation"}>
                <div className="nav-container">
                    <nav>
                        {mainHeader &&
                            <>
                                <div className="brand">
                                    <img src={logo} alt="Logo"></img>
                                </div>
                                <ul className="nav-list">
                                    <li>
                                        <a href="#!">Actors</a>
                                    </li>
                                    <li>
                                        <a href="#!">Projects</a>
                                    </li>
                                    <li>
                                        <a href="#!">Castings</a>
                                    </li>
                                    <li>
                                        <a href="#!">Payouts</a>
                                    </li>
                                    <li>
                                        <a href="#!">Teams</a>
                                    </li>
                                </ul>
                                <div className="rightside-bar">
                                    <div className="searchbar">
                                        <img className="searchbar-icon" src={loupe} alt="icon" />
                                        <input className="input-searchbar" placeholder="Buscar" />
                                    </div>
                                    <span className="notification-icon">5</span>
                                    <div className="avatar-icon">
                                        <img src={avatar} alt="Avatar" />
                                    </div>
                                </div>
                            </>
                        }
                        {children}
                    </nav>
                </div>
            </section>

        </>
    )
};

export default Header;
