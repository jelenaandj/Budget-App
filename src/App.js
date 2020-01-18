import React, { useState } from 'react';
import './App.css';
// import Header from './layout/Header';
// import Content from './layout/Content';
import Form from './components/Form';
import Income from './components/Income';
import Expenses from './components/Expenses';
import Total from './components/Total';


function App() {

  const[inputs,setInputs]=useState([]);
  const[totalExp,setTotalExp]=useState([])

  const handleClick=(value,text,numb)=>{
    let tmp=[...inputs]
    tmp.push({value,text,numb})
    setInputs(tmp)
  }

  return (
    <div className="App">
    <Form handleClick={handleClick} inputs={inputs} setInputs={setInputs} />
    <Income inputs={inputs} />
    <Expenses inputs={inputs}  />
    <Total inputs={inputs}totalExp={totalExp} setTotalExp={setTotalExp}/>
    </div>
  );
}

export default App;
