import React from 'react';

import './index.css';

const Header = () => {

    return (
        <>
            <section className="navigation">
                <div className="nav-container">
                    <div className="brand">
                        <a href="#!">Logo</a>
                    </div>
                    <nav>
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
                                <span className="searchbar-icon">#</span>
                                <input className="input-searchbar" placeholder="Buscar">

                                </input>
                            </div>
                            <span className="notification-icon">5</span>
                            <span className="avatar-icon notification-icon">8</span>
                        </div>
                    </nav>
                </div>
            </section>

        </>
    )
};

export default Header;
