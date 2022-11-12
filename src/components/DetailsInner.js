import React, {useContext} from 'react';
import {motion} from 'framer-motion';
import { GameContext } from './Context';


export default function DetailsInner () {
    const data = useContext(GameContext);

    const myVariant = {
        hidden: {opacity:0},
        visible: (i) => {
            return ({
                opacity: 1,
                transition: {
                    delay: i*0.1 
                }
            })
        }
    }
    return (
            <ul className = "details__items">
                {
                    data.allUniquePictureState.map((item, index) => 
                        <motion.li key = {index} 
                            className = "details__item"
                            variants = {myVariant}
                            initial = 'hidden'
                            animate = 'visible'
                            custom = {index}
                        >
                            <img 
                                src = {item.pic}  
                                alt = "element"
                                draggable = {true}
                                style = {{cursor:"grab"}} 
                                onDragStart = {e => data.dragStartHandler(e, item, 'one')}                                                             
                            />
                        </motion.li> 
                    )
                }
                                      
            </ul>
    )
}