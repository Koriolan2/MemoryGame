import React from 'react';
import { pics } from './ImagesDB';
import {motion} from 'framer-motion'

export default function DetailsInner ({dragOverHandler, dragLeaveHandler,  dragEndHendler, dragStartHendler}) {

    

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
                    pics.map((item, index) => 
                        <motion.li key = {index} 
                            className = "details__item"
                            variants = {myVariant}
                            initial = 'hidden'
                            animate = 'visible'
                            custom = {index}
                        >
                            <img 
                                src = {item}  
                                alt = "element"
                                draggable = {true}
                                style = {{cursor:"grab"}}
                                onDragOver = {e => dragOverHandler(e)}
                                onDragLeave = {e => dragLeaveHandler(e)}
                                onDragEnd = {e =>  dragEndHendler(e)} 
                                onDragStart = {e => dragStartHendler(e)}                               
                            />
                        </motion.li> 
                    )
                }
                                      
            </ul>
    )
}