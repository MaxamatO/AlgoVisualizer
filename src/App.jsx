import './App.css';
import { dobubblesort } from './BubbleSort';
import React from 'react';

const PRIMARY_COLOR = 'turquoise';


export default class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      numbers: [],
    }
  }

  componentDidMount(){
    this.setState({numbers: this.generateNew()});
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
    for(let i = 0; i<200; i++){
      array.push(this.generateRandomNumbers(1, 200));
    }
    return array;
  }

  bubblesort(){
    let animations = dobubblesort(this.state.numbers);
    for(let i=0; i<animations.length; i++){
      const bars = document.getElementsByClassName("rect");
      const [firstBar, secondBar] = animations[i];
      setTimeout(() => {
        const firstBarStyle = bars[firstBar].style;
        const secondBarStyle = bars[secondBar].style;
        firstBarStyle.borderColor = "red";
        secondBarStyle.borderColor = "red";
        const firstHeight = firstBarStyle.height;
        firstBarStyle.height = secondBarStyle.height;
        secondBarStyle.height = firstHeight;
        setTimeout(() => {
          firstBarStyle.borderColor = PRIMARY_COLOR;
          secondBarStyle.borderColor = PRIMARY_COLOR;
        }, 10)
      }, i*10)
    }
  }
  render(){
    const {numbers} = this.state;
    return (
      <div className='main-layout'>
        <button onClick={() => {this.bubblesort()}}>Bubble sort</button>
        <button onClick={() => {this.generateNew()}}>New Array</button>
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