import React from 'react';

import './index.css';

import MenuList from 'components/Menu/MenuList.jsx'
import ListItem from 'components/Menu/ListItem.jsx'

import plusIcon from 'assets/img/icons/plus-icon.svg';

const Sidebar = () => {

    return (
        <aside className="sidebar">
            <div id="leftside-navigation" className="sidebar-block">
                <h4>PROJECTS</h4>
                <ul class="sidebar-content">
                    <MenuList title="Cyberpunk 2077">
                        <ListItem title="Katerina" smallTitle="Main Role" />
                        <ListItem title="Kenzie Pasley" smallTitle="Secondary Role" />
                        <ListItem title="Genette Seraphina" smallTitle="Secondary Role" />
                    </MenuList>
                    <MenuList title="Phantom of the Opera">
                        <ListItem title="One" />
                        <ListItem title="Another" />
                    </MenuList>
                    <MenuList title="Comercial of Lay's">
                        <ListItem title="One" />
                        <ListItem title="Another" />
                    </MenuList>
                    <MenuList title="Chernobyl">
                        <ListItem title="One" />
                        <ListItem title="Another" />
                    </MenuList>
                </ul>
                <div className="newItem-link">
                    <img src={plusIcon} className="icon" alt="icon" />
                    <a href="#!">Add new project</a>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
