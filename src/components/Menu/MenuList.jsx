import React from 'react';

import icon from 'assets/img/emoji-icon.png';
import arrowDown from 'assets/img/icons/arrow-down.svg';
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
                <img src={arrowDown} className={open ? "dropdown-icon rotateimg180" : "dropdown-icon"} alt="Dropdown Icon"/>
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
