import { useState, useEffect } from 'react';

export default function useGameTimer(startGame, isStartGame, final) {

    const [time, setTime] = useState(0);

    const minutes = Math.floor(time / 60);
    const seconds = time - minutes * 60;
    let interval = null;

    useEffect(() => {
        interval = setInterval(() => {
            startGame &&
                setTime(timer => timer + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, [startGame]);

    useEffect(() => {
        isStartGame(false);
        clearInterval(interval);
        setTime(0);
    }, [final]);

    return [minutes, seconds];
}

