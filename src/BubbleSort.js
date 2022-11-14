let numbers = [4, 2, 8, 6, 1]

const bubblesort = (numbers) => {
    let iteration = numbers.length;
    let inMemory;
    console.log(numbers);

    for(let i=0; i<numbers.length-1; i++){
        console.log("Comparing: " + numbers[i] +"-"+numbers[i+1]);
        if(numbers[i]>numbers[i+1]){
        inMemory = numbers[i+1]
        numbers[i+1]=numbers[i]
        numbers[i]=inMemory;
        }
        console.log(numbers);
    }
}
bubblesort(numbers);
    