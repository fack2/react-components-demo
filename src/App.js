import React, { Component } from 'react';
import {BlueSquare} from './funcComponents/BlueSquare'
import {RedSquare} from './funcComponents/RedSquare'
import {GreenSquare} from './funcComponents/GreenSquare'
import {LemonComponent} from './classComponents/LemonComponent'
import {Square} from './funcComponents/Square'
import './App.css';

 const App = () => (
      <div className="app">
      <div className="square-container">

        <RedSquare /> 
        <GreenSquare /> 
        <BlueSquare /> 
      </div>
      <div className="square-container">

        <Square word="one" num={1} colour="red"/>
        <Square word="two" num={2} colour="green"/>
        <Square word="three" num={3} colour="blue"/>
      </div>

      <div className="lemon-container">
        <LemonComponent colour="yellow"/>
        <LemonComponent colour="khaki"/>
        <LemonComponent colour="lemonchiffon"/>
      </div>
      </div>
    );
  


export default App;
