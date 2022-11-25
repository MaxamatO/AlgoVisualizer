import { useEffect, useState } from 'react';
import './App.css';

const PRIMARY_COLOR = 'turquoise';

const SECONDARY_COLOR = 'red';

function App() {
  
  const shuffle = (array) => {
    var tmp, current, top = array.length;
    if(top) while(--top) {
      current = Math.floor(Math.random() * (top + 1));
      tmp = array[current];
      array[current] = array[top];
      array[top] = tmp;
    }
    return array;
  }

  const generateRandomNumbers = () => {
    for (var a=[],i=0;i<100;++i) a[i]=i; 
    return shuffle(a);
  }

  const [numbers, setNumbers] = useState(generateRandomNumbers());

  const generateNew = () => {
    let rects = document.getElementsByClassName("rect");
        for(let r=0; r<rects.length; r++){
          rects[r].style.borderColor = "blue";
        }
    return setNumbers(generateRandomNumbers());
  }
  const bubblesort = (numberss) => {
      let inMemory;
      let ids = [];
      let nums = [...numberss];
      
      for(let i = 0; i<nums.length; i++){
        ids.push(i);
      }
      console.log(ids);
      console.log(nums);
      for(let i=nums.length; i>0; i--){
        setTimeout(() => {
          for(let j=0; j<nums.length; j++){
              if(nums[j]>nums[j+1]){
                inMemory = nums[j+1]
                nums[j+1]=nums[j]
                nums[j]=inMemory;
                const bars = document.getElementsByClassName("rect");
                bars[j].style.height = `${nums[j]*3}px`
                bars[j+1].style.height = `${nums[j+1]*3}px`
              }
          }
        }, (i)*100) 
      }
      
  }
  return (
    <div className='main-layout'>
      <button onClick={() => {bubblesort(numbers)}}>Bubble sort</button>
      <div className='main-display'>
      {numbers.map((number, index) => {

        return (
          <div className='rect' key={index} style={{height:number*3+"px", borderColor: PRIMARY_COLOR}}>
          </div>
        ) 
      })}
      </div>
    </div>
  );
}



export default App;
