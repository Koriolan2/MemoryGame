import React, {useState,useEffect} from 'react';

export default function DeleteButton({currentElement}) {
    let [status, setStatus] = useState(false);

    useEffect(()=> {
    if (currentElement) {
        if (currentElement.matches('.field__error')) {
            setStatus(true);           
        }
    }});
    
    
    return (
        status && <span className='delete__button'>+</span>
    );
}