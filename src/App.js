import React, { useState } from 'react';
import './App.css';
// import Header from './layout/Header';
// import Content from './layout/Content';
import Form from './components/Form';
import Income from './components/Income';


function App() {

  const[inputs,setInputs]=useState([]);

  const handleClick=(value,text)=>{
    let tmp=[...inputs]
    tmp.push({value,text})
    setInputs(tmp)
  }

  return (
    <div className="App">
    <Form handleClick={handleClick} inputs={inputs} setInputs={setInputs} />
    <Income inputs={inputs} />
    </div>
  );
}

export default App;
