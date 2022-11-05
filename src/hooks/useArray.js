import {pics} from '../components/ImagesDB';

export default function useArray(n) {
    let arr = [];
    let userLevel = [];

    const rand = () => {
        let num = Math.floor(Math.random()*pics.length);
        return num;
    }

    for (let i = 0; i < n; i++) {
        let c = {id: i, elem: pics[rand()]}

        arr.push(c);
    }

    for (let i = 0; i < n; i++) {
        let c = {id: i, elem: null}

        userLevel.push(c);
    }

    return [arr, userLevel];
}