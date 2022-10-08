import { useState, useEffect } from 'react';

export default function useTimer(selectLevel) {

    const [time, setTime] = useState(15);

    const minutes = Math.floor(time / 60);
    const seconds = time - minutes * 60;

    useEffect(() => {
        const interval = setInterval(() => {
            selectLevel.title &&
                setTime(time => time >= 1 ? time - 1 : 0)

        }, 1000);
        return () => { clearInterval(interval) }
    }, [selectLevel]);

    return [minutes, seconds];
}
