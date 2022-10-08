import React from 'react';
import { Link } from 'react-router-dom';

export default function MenuItem({image, title, setOpenWindow, url}) {
    return (
        <li 
            className="menu__item"
            onClick = {() => setOpenWindow(true)}
        >
            <Link to = {url}>
                <img src = {image} alt = {title} />
                <span>{title}</span>
            </Link>
        </li>
    )
}