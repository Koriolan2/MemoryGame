import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { GameContext } from './Context';

export default function MenuItem({image, title,  url}) {
    const data = useContext(GameContext);
    return (
        <li 
            className="menu__item"
            onClick = {() => data.setOpenWindow(true)}
        >
            <Link to = {url}>
                <img src = {image} alt = {title} />
                <span>{title}</span>
            </Link>
        </li>
    )
}