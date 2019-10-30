import React from 'react';

import icon from 'assets/img/emoji-icon.png';
import './menu.css';

const MenuList = ({ title, children, ...props }) => {

    const [open, setOpen] = React.useState(false);

    const handleToggle = () => {
        setOpen(!open);
    }

    return (
        <li>
            <a href="#!" onClick={handleToggle}>
                <img src={icon} height="26px" className="img-item" alt="Emoji Icon"/>
                <span>{title}</span>
            </a>
            {open &&
                <ul className="nav-list">
                    {children}
                </ul>
            }
        </li>
    )
}
export default MenuList;
