import React from 'react';
import { images } from './ImagesDB';
import MenuItem from './MenuItem';

export default function Menu({setOpenWindow}) {

    return ( 
    <ul className="menu__items">
        <MenuItem 
            image = {images[0]} 
            title = "Налаштування"
            url = "/settings"
        />
        
        <MenuItem 
                image = {images[1]} 
                title = "Рівень"
                setOpenWindow = {setOpenWindow}
                url = "/"
        />
        <MenuItem 
                image = {images[2]} 
                title = "Рейтинг"
                url = "/rating"
        />
    </ul>
    );
} 