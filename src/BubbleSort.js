
export const dobubblesort = (mainarray) => {
    let array = [...mainarray];
    let animations = []
    for(let i=array.length; i>0; i--){
          for(let j=0; j<i; j++){
              if(array[j]>array[j+1]){
                animations.push([j, j+1])
                const inMemory = array[j+1]
                array[j+1]=array[j]
                array[j]=inMemory;
                }
          }
      }
    return animations;
}

    