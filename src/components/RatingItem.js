import React from 'react';

export default function RatingItem ({id, title, time}) {
    return(
        <li className = "rating__item">
            <span className="level__title">{title}</span>
            <span className="level__time">{time}</span>
        </li>
    );
}