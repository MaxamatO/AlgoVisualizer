import { useEffect, useState } from 'react';
import './App.css';

function App() {
  
  const [numbers, setNumbers] = useState([]);
  const [isSorted, setIsSorted] = useState(false);

  const refreshApp = () => {
    setIsSorted(isSorted);
    setNumbers(numbers)
  }

  useEffect(() => {
    refreshApp();
  }, [numbers])

  const generateNew = () => {
    let rects = document.getElementsByClassName("rect");
        for(let r=0; r<rects.length; r++){
          rects[r].style.borderColor = "blue";
        }
        setIsSorted(false)
    return setNumbers(generateRandomNumbers());
  }
  
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
    for (var a=[],i=0;i<50;++i) a[i]=i; 
    return shuffle(a);
  }

  const bubblesort = (nums) => {
      let i = 0;
      let inMemory;
      for (var ids=[],x=0;x<nums.length;++x) ids[x]=x; 
      for(i=nums.length; i>0; i--){
          for(let j=0; j<i; j++){
            if(nums[j]>nums[j+1]){
              inMemory = nums[j+1]
              nums[j+1]=nums[j]
              nums[j]=inMemory;
            }

        }
        let rects = document.getElementsByClassName("rect");
        for(let r=0; r<rects.length; r++){
          rects[r].style.borderColor = "red";
        }
      }
      setNumbers(nums)
      setIsSorted(true);
      return numbers;

  }
  function BubbleSort(){
    if(!isSorted){
      let array = generateRandomNumbers();
      return array.map((number, index) => {
        return (
          <div className='rect' id={index} key={number} style={{height:number*3+"px"}}>
          </div>
        )
      }
      );
    }
    console.log(numbers);
    return(
      numbers.map((number) => {
        return (
          <div className='rect' key={number} style={{height:number*3+"px"}}>
          </div>
        ) 
      })
    )
}
  return (
    <div className='main-layout'>
      <button onClick={() => {bubblesort(generateRandomNumbers())}}>Bubble sort</button>
      <button onClick={() => {generateNew()}}>Generate new</button>
      <div className='main-display'>
        <BubbleSort></BubbleSort>
      </div>
    </div>
  );
}



export default App;
