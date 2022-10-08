import {pics} from '../components/ImagesDB';

export default function useArray(n) {
    let arr = [];
   
    const rand = () => {
        let num = Math.floor(Math.random()*pics.length);
        return num;
    }

    for (let i = 0; i < n; i++) {
        arr.push(pics[rand()]);
    }

    return arr;
}