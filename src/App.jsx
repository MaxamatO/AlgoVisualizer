import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [numbers, setNumbers] = useState([]);
  const [isSorted, setIsSorted] = useState(false);

  const refreshApp = () => {
    setIsSorted(isSorted);
  }

  useEffect(() => {
    setNumbers(numbers)
  }, [])

  const generateNew = () => {
    setIsSorted(false);
    return generateRandomNumbers();
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
    for (var a=[],i=0;i<200;++i) a[i]=i; 
    return shuffle(a);
  }

  const bubblesort = (nums) => {
      setIsSorted(true);
      let iteration = 0;
      let inMemory;
      while (iteration<nums.length-1){
          for(let i=0; i<nums.length-1; i++){
              console.log("Comparing: " + nums[i] +"-"+nums[i+1]);
              if(nums[i]>nums[i+1]){
              inMemory = nums[i+1]
              nums[i+1]=nums[i]
              nums[i]=inMemory;
              }
          }
          iteration = iteration+1;
          setNumbers(nums)
      }
      return;
  }
  function BubbleSort(){
    if(!isSorted){
      let array = generateNew();
      return array.map((number) => {
        return (
          <div className='rect' key={number} style={{height:number*3+"px"}}>
          </div>
        )
      }
      );
    }
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
        <BubbleSort/>
      </div>
    </div>
  );
}



export default App;
