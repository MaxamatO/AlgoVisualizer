import './App.css';
import { dobubblesort } from './BubbleSort';
import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import {getMergeSortAnimations} from './Mergesort'
const PRIMARY_COLOR = 'turquoise';


const App =() => {
  const [numbers, setNumbers] = useState([]);
  let sorted = useRef(false);

  useEffect(() => {
    setNumbers(generateNew());
    // eslint-disable-next-line
    }, []);

  const generateRandomNumbers = (min, max) =>{
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  const generateNew = () => {
    const array = [];
    for(let i = 0; i<100; i++){
      array.push(generateRandomNumbers(2, 200));
    }
    return array;
  }

  const bubblesort = (numbers) =>{
    if(sorted === true) return;   
    let animations = dobubblesort(numbers)[1];
    console.log(animations);
    const buttons = document.getElementsByTagName("button");
    for(let i = 0; i<buttons.length; i++){
      buttons[i].disabled = true;
    }
    for(let i=0; i<animations.length; i++){
      const bars = document.getElementsByClassName("rect");
      const [firstBar, secondBar] = animations[i];
      setTimeout(() => {
        const firstBarStyle = bars[firstBar].style;
        const secondBarStyle = bars[secondBar].style;
        firstBarStyle.borderColor = "pink";
        secondBarStyle.borderColor = "red";
        const firstHeight = firstBarStyle.height;
        firstBarStyle.height = secondBarStyle.height;
        secondBarStyle.height = firstHeight;
        setTimeout(() => {
          firstBarStyle.borderColor = PRIMARY_COLOR;
          secondBarStyle.borderColor = PRIMARY_COLOR;
        }, 20)
      }, i*20)
    }
   setTimeout(() => {
    for(let i = 0; i<buttons.length; i++){
      buttons[i].disabled = false;
    }
    sorted = true;
   }, animations.length*20)
  }

  const mergesort = (array) => {
    console.log(getMergeSortAnimations(array));
  }

  // To implement
  // quicksort(){
  //   let array = partition(numbers, 0, numbers.length-1);
  //   console.log(array);
  // }

  
  return (
    <div className='main-layout'>
      <div className="menu">
      <button onClick={() => {bubblesort(numbers)}}>Bubble Sort</button>
      {/* <button disabled={true} onClick={() => {quicksort()}} >Quicksort</button> */}
      <button onClick={() => {mergesort(numbers)}} >Merge Sort</button>
      <button onClick={() => {setNumbers(generateNew())}} >New Array</button>
      </div>
      <div className='main-display'>
      {numbers.map((number, index) => {
        return (
          <div className='rect' key={index} style={{height:number*2+"px", borderColor: PRIMARY_COLOR}}>
          </div>
        ) 
      })}
      </div>
    </div>
  );
  
};

export default App;