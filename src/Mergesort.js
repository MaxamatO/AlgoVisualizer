// Create helper for it with animations[] decalration
// Find a way to append next moves to animations[]
// return animations at the end of the algorithm
// Create logic for displayiong animations with colors.


export const mergeSortTopDown = (mainArray) => {
    const array = mainArray.slice();
    if(array.length<=1) return array;
    const middle = Math.floor(array.length/2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    return mergeTopDown(mergeSortTopDown(left), mergeSortTopDown(right));
}

const mergeTopDown = (left, right) => {
    const array = [];

    while(left.length && right.length) {
        if(left[0] < right[0]){
            array.push(left.shift());
        }else {
            array.push(right.shift());
        }
    }
    return array.concat(left.slice()).concat(right.slice())
}

;