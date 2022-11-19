import React, {useContext} from 'react';
import '../styles/rating.css';
import RatingItem from './RatingItem';
import { GameContext } from './Context';

export default function Rating() {
    const data = useContext(GameContext);

    return(
        <>
            <h2 className="rating__head">Кращий результат</h2>

            <ol className="rating__items">
                {data.renderGameRating.map(item => <RatingItem key = {item.id} {...item}/>)}
            </ol>
        </>
       
    );
}