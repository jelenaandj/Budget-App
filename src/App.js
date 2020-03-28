import React, { useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";
import './App.css';
import Form from './components/Form'; 
import Income from './components/Income';
import Expenses from './components/Expenses';
import Total from './components/Total';
import Budget from './components/Budget';
import Login from './components/Login';
import Header from './layout/Header';
import Register from './components/Register';
import Profile from './components/Profile';

const uuidv4 = require('uuid/v4')
// const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

function App() {
    const[inputs,setInputs]=useState([])
    const[user,setUser]=useState()
    const[showLogin,setShowLogin]=useState(false)
    const[showRegister,setShowRegister]=useState(false)
    const[budg,setBudg]=useState(0)
    const[prevBudg,setPrevBudg]=useState(0)
    const[username,setUserName]=useState('')
    const[email,setEmail]=useState('')
    const[userData,setUserData]=useState('')
  
    // const[totalExp,setTotalExp]=useState([])
  
// if (user != null) {  
//   console.log (user.email) // 
// }

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

// get username
const handleUserNameData=(e)=>{
  firebase.auth().onAuthStateChanged(function(user) {
    ///
    if(email !==undefined && username !==undefined){
    db.collection('users').doc(email).collection('personalInfo').doc('username').get()
    .then(function(doc) {
    if (doc.exists) {
    //
    setUserData(doc.data().username)
    console.log(userData)
    
    console.log("Document data:", doc.data());
    }else {
    // doc.data() will be undefined in this case
    setUserData(email)
    }})
    .catch(function(error) {
        console.error("Error getting document: ", error);
    });
    // User is signed in. 
    } 
  });

}
////
const signoutHandler=(e)=>{
  e.preventDefault()

  firebase.auth().signOut();
  setInputs([])
  setUser(undefined)
  setShowLogin(false)
  setShowRegister(false)
  setUserData('')
  setBudg(0)
  setPrevBudg(0)
  setMonth(m)
  console.log('logged out')
}
/////////
  return (
    <div className="App">
    {user===undefined? 
    <div>

      {!showLogin&&
    <input type='submit' value='Log in' onClick={(e)=>showLogin? setShowLogin(false):setShowLogin(true)}/>}
    {showLogin?
    <Login handleUserNameData={handleUserNameData} user={user} email={email} setEmail={setEmail} db={db} username={username} setUser={setUser} firebase={firebase}/> : ''}

    {!showRegister&&
    <input type='submit' value='Register' onClick={(e)=>showRegister? setShowRegister(false):setShowRegister(true)}/>}
    {showRegister?
    <Register handleUserNameData={handleUserNameData} username={username} email={email} setEmail={setEmail} setUserName={setUserName} db={db} user={user} setUser={setUser} firebase={firebase} /> : ''}
    </div>
     : <input type="submit" value="Log out" onClick={signoutHandler} />}
    <Profile userData={userData}/>
    <Header m={m} prevBudg={prevBudg} inputs={inputs} setInputs={setInputs} db={db} user={user} month={month} setMonth={setMonth} setPrevBudg={setPrevBudg} email={email}/>
    <Budget prevBudg={prevBudg} expense={inputs.filter(inputB=> inputB.value.includes('Expense'))} income={inputs.filter(inputB=> inputB.value.includes('Income'))} budg={budg} setBudg={setBudg} />
    <label>Income</label><Total  input={inputs.filter(inputB=> inputB.value.includes('Income'))}/>
    <label>Expense</label><Total  input={inputs.filter(inputB=> inputB.value.includes('Expense'))}/>
    <Form handleClick={handleClick} inputs={inputs} month={month} db={db} user={user} budg={budg} />
    <div className='container'>
    <Income  inputs={inputs} setInputs={setInputs}/>
    <Expenses  inputs={inputs} setInputs={setInputs} />
    </div>
    </div>
  );}

export default App;
