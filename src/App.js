import React, { useState } from 'react';
import './App.css';
// import Header from './layout/Header';
// import Content from './layout/Content';
import Form from './components/Form';
import Income from './components/Income';
import Expenses from './components/Expenses';
import Total from './components/Total';
import Budget from './components/Budget';
import Login from './components/Login';
const uuidv4 = require('uuid/v4')

//smth wrong w last numb in arr
 
function App() {

  const[inputs,setInputs]=useState([]);
  const[user,setUser]=useState([])
  // const[totalExp,setTotalExp]=useState([])

  const handleClick=(value,text,numb)=>{
    let tmp=[...inputs]
    tmp.push({value,text,numb,id:uuidv4()})
    setInputs(tmp)
  }

  return (
    <div className="App">
    <Login/>
    <Budget expense={inputs.filter(inputB=> inputB.value.includes('Expense'))} income={inputs.filter(inputB=> inputB.value.includes('Income'))}  />
    <Total input={inputs.filter(inputB=> inputB.value.includes('Income'))}/>
    <Total input={inputs.filter(inputB=> inputB.value.includes('Expense'))}/>
    <Form handleClick={handleClick} inputs={inputs} setInputs={setInputs} />
    <Income inputs={inputs} setInputs={setInputs}/>
    <Expenses inputs={inputs} setInputs={setInputs} />
    {/* <Total inputs={inputs}totalExp={totalExp} setTotalExp={setTotalExp}/> */}
    </div>
  );
}

export default App;
