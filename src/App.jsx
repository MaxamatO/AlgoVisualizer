import './App.css';
import { dobubblesort } from './BubbleSort';
import React from 'react';
import { createRef } from 'react';

const PRIMARY_COLOR = 'turquoise';


export default class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      numbers: [],
    }
    this.sorted = createRef();
    
  }
  
  componentDidMount(){
    this.setState({numbers: this.generateNew()});
    this.sorted = false;
  }

  shuffle (array){
    var tmp, current, top = array.length;
    if(top) while(--top) {
      current = Math.floor(Math.random() * (top + 1));
      tmp = array[current];
      array[current] = array[top];
      array[top] = tmp;
    }
    return array;
  }

  generateRandomNumbers (min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  generateNew() {
    const array = [];
    for(let i = 0; i<100; i++){
      array.push(this.generateRandomNumbers(2, 200));
    }
    return array;
  }

  bubblesort(){
    if(this.sorted){
      return;
    }
    let anim = dobubblesort(this.state.numbers)[1]
    let animations = anim;
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
    this.sorted = true;
   }, animations.length*20)
  }

  // To implement
  // quicksort(){
  //   let array = partition(this.state.numbers, 0, this.state.numbers.length-1);
  //   console.log(array);
  // }

  render(){
    const {numbers} = this.state;
    return (
      <div className='main-layout'>
        <div className="menu">
        <button onClick={() => {this.bubblesort()}}>Bubblesort</button>
        {/* <button disabled={true} onClick={() => {this.quicksort()}} >Quicksort</button> */}
        <button onClick={() => {this.componentDidMount()}} >New Array</button>
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
  }
};