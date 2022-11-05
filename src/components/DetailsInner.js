import React from 'react';
import { pics } from './ImagesDB';
import {motion} from 'framer-motion'

export default function DetailsInner () {

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
                            />
                        </motion.li> 
                    )
                }
                                      
            </ul>
    )
}