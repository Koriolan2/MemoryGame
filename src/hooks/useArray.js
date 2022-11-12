import {pics} from '../components/ImagesDB';


export default function useArray(n) {
    let allUniquePicture = [];
    let gameLevel = [];
    let gameFloor = [];
    //Генератор одного випадкового числа
    const randNumber = () => Math.floor(Math.random() * pics.length);
    //Метод упоряковування елементів
    const sortable = (a, b) => {
        if (a > b) 
            {
                return 1;
            } else {
                return -1;
            }
    }
    //Генератор масиву унікальних значень
    const genArrNumb = () => {
        let arr = [];
        for (let i = 0; arr.length < n; i++) {
            let num = randNumber();
            if (!arr.includes(num)) {
              arr.push(num);
            }
          }

        return arr;
    }

   
        const c = genArrNumb(); 
        gameLevel = c.map((item, index) => {return {id: index, pic: pics[item]}})
        gameFloor = c.map((item, index) => {return {id: index, pic: null}})
        allUniquePicture = c.sort(sortable).map((item, index) => {return {id: index, pic: pics[item]}})
  
    
    return [gameLevel, allUniquePicture,  gameFloor]
}