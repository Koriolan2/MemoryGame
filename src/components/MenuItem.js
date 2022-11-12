import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { GameContext } from './Context';

export default function MenuItem({image, title,  url}) {
    const data = useContext(GameContext);
    const isEvent = () => {
        if (url === "/") {return () => data.setOpenWindow(true)}
    }
    return (
        <li 
            className="menu__item"
            onClick = {isEvent()}
        >
            <Link to = {url}>
                <img src = {image} alt = {title} />
                <span>{title}</span>
            </Link>
        </li>
    )
}