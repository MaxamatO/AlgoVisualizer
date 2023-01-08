// Create helper for it with animations[] decalration
// Find a way to append next moves to animations[]
// return animations at the end of the algorithm
// Create logic for displayiong animations with colors.

export const getMergeSortAnimations = (array) => {
    console.log(array);
    const animations = [];
    if(array.length <= 1) return;
    const auxArray = array.slice();
    mergeHelper(array, 0, array.length-1, auxArray, animations);
    return animations;
}

const mergeHelper = (mainArray, startIndex, endIndex, auxArray, animations) => {
    if(startIndex === endIndex) return;
    const middleIndex = Math.floor((startIndex + endIndex)/2);
    mergeHelper(auxArray, startIndex, middleIndex, mainArray, animations);
    mergeHelper(auxArray, middleIndex+1, endIndex, mainArray, animations);
    mergeSort(mainArray, startIndex, middleIndex, endIndex, auxArray, animations);
}

const mergeSort = (mainArray, startIndex, middleIndex, endIndex, auxArray, animations) => {
    let k = startIndex; // Start index in mainArray
    let i = startIndex; // Start index in auxArray
    let j = middleIndex+1;

    while(i <= middleIndex && j <= endIndex){
        if(auxArray[i] <= auxArray[j]){
            mainArray[k++] = auxArray[i++]
        } else {
            mainArray[k++] = auxArray[j++]
        }
    }
    while(i <= middleIndex){
        mainArray[k++] = auxArray[i++];
    }
    while(j<=endIndex){
        mainArray[k++] = auxArray[j++]
    }
    console.log(mainArray);
}