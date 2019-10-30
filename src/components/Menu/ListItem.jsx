import React from 'react';

import './menu.css';

const ListItem = ({ title, smallTitle, ...props }) => {

    return (
        <li>
            <a href="#!">{title}</a>
            <small>{smallTitle}</small>
        </li>
    )
}
export default ListItem;
