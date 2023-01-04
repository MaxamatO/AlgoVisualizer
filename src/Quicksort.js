

export const partition = (array, start, end, anims = [[], end, []]) => {
    if(start>=end){
        return;
    }
    let leftAnims = [anims[0]];
    // let pivotAnims = [anims[1]];
    let rightAnims = [anims[2]];
    let animations = [];
    let mainArray = array;
    let pivot = mainArray[end];
    let left = start;
    let right = end;
    while(left<right){
        while(mainArray[left]<=pivot && left < right){
            leftAnims.push(left); 
            left++;
        }
        while(mainArray[right]>=pivot && left < right){
            rightAnims.push(right);
            right--;
        }
        let temp = mainArray[left];
        mainArray[left] = mainArray[right];
        mainArray[right] = temp;
    }
    let temp = mainArray[left];
    mainArray[left] = mainArray[end];
    mainArray[end] = temp;

    animations = concat_anims(leftAnims, end, rightAnims);
    partition(mainArray, left+1, end, animations);
    partition(mainArray, start, left-1, animations);
    
}

function concat_anims(leftAnims, pivot, rightAnims){
    let animations = [leftAnims, pivot, rightAnims];
    console.log(animations);
    return animations;
}

