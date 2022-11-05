export default function useUserLevel(n) {
    let arr = [];
   
    for (let i = 0; i < n; i++) {
        let c = {id: i, elem: null}

        arr.push(c);
    }

    return arr;
}