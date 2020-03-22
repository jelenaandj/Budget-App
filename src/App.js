import React, { useState } from 'react';

import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";


import './App.css';
// import Header from './layout/Header';
// import Content from './layout/Content';
import Form from './components/Form'; 
import Income from './components/Income';
import Expenses from './components/Expenses';
import Total from './components/Total';
import Budget from './components/Budget';
import Login from './components/Login';
import Header from './layout/Header';
import Register from './components/Register';

const uuidv4 = require('uuid/v4')
// const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");


function App() {
    const[inputs,setInputs]=useState([])
    const[user,setUser]=useState()
    const[showLogin,setShowLogin]=useState(false)
    const[showRegister,setShowRegister]=useState(false)
    const[getIncome,setGetIncome]=useState()
    const[getExpenses,setGetExpenses]=useState()
    const[getTotal,setGetTotal]=useState()


    
    
    // const[totalExp,setTotalExp]=useState([])

    const signoutHandler=(e)=>{
        e.preventDefault()

        firebase.auth().signOut();
        setUser('')
        console.log('logged out')
    }

/////////////////////////FIREBASE/////////////
const firebaseConfig = {
    apiKey: "AIzaSyAVNGZqhJbMxHXce-_YzNB0Xb0AY7xsYBs",
    authDomain: "budget-4f776.firebaseapp.com",
    databaseURL: "https://budget-4f776.firebaseio.com",
    projectId: "budget-4f776",
    storageBucket: "budget-4f776.appspot.com",
    messagingSenderId: "596525510270",
    appId: "1:596525510270:web:59c7fd11054177c4a8b22f"
  };

// Initialize Firebase
// firebase.initializeApp(firebaseConfig);

//init firebase/firestore
// firebase.initializeApp({
//   apiKey: "AIzaSyAVNGZqhJbMxHXce-_YzNB0Xb0AY7xsYBs",
//   authDomain: "budget-4f776.firebaseapp.com",
//   projectId: "budget-4f776"
// });



if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
var db = firebase.firestore();
// var database = firebase.database();

  // write in database
  // function writeData(total) {
  //   firebase.database().ref('total/').set({
  //     total: total
  //   });
  // }

  const handleClick=(value,text,numb)=>{
    let tmp=[...inputs]
    tmp.push({value,text,numb,id:uuidv4()})
    setInputs(tmp)
  }

  let a = new Date();
  let m = '';

switch (a.getMonth() + 1) {
    case 1:
        m = 'January';
        break;
    case 2:
        m = 'February';
        break;
    case 3:
        m = 'March';
        break;
    case 4:
        m = 'April';
        break;
    case 5:
        m = 'May';
        break;
    case 6:
        m = 'Jun';
        break;
    case 7:
        m = 'July';
        break;
    case 8:
        m = 'August';
        break;
    case 9:
        m = 'September';
        break;
    case 10:
        m = 'Octobar';
        break;
    case 11:
        m = 'November';
        break;
    case 12:
        m = 'December';
        break;
    default:
        break;
}
const[month,setMonth]=useState(m)


  return (
    <div className="App">
    {!user? 
    <div>

      {!showLogin&&
    <input type='submit' value='Log in' onClick={(e)=>showLogin? setShowLogin(false):setShowLogin(true)}/>}
    {showLogin?
    <Login user={user} setUser={setUser} firebase={firebase}/> : console.log('notloged')}

    {!showRegister&&
    <input type='submit' value='Register' onClick={(e)=>showRegister? setShowRegister(false):setShowRegister(true)}/>}
    {showRegister?
    <Register user={user} setUser={setUser} firebase={firebase}/> : console.log('notreggisterd')}
    </div>
     : <input type="submit" value="Log out" onClick={signoutHandler}/>}
    <Header m={m} inputs={inputs} db={db} user={user} month={month} setMonth={setMonth} setGetIncome={setGetIncome} setGetExpenses={setGetExpenses} setGetTotal={setGetTotal} />
    <Budget expense={inputs.filter(inputB=> inputB.value.includes('Expense'))} income={inputs.filter(inputB=> inputB.value.includes('Income'))} />
    <Total input={inputs.filter(inputB=> inputB.value.includes('Income'))}  />
    <Total input={inputs.filter(inputB=> inputB.value.includes('Expense'))}/>
    <Form handleClick={handleClick} inputs={inputs} month={month} db={db} user={user}/>
    <div className='container'>
    <Income inputs={inputs} setInputs={setInputs}/>
    <Expenses inputs={inputs} setInputs={setInputs} />
    </div>
    </div>
  );}

export default App;
