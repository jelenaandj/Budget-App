import React, { useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";
import './App.css';
import Footer from './layout/Footer';
import Navbar from './layout/Navbar';
import Main from './layout/Main';

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
    const[allBudgets,setAllBudgets]=useState(false)
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
    <Navbar setAllBudgets={setAllBudgets} allBudgets={allBudgets} showLogin={showLogin} setShowLogin={setShowLogin} handleUserNameData={handleUserNameData} user={user} email={email} setEmail={setEmail} db={db} username={username} setUser={setUser} firebase={firebase} 
      setShowRegister={setShowRegister} showRegister={showRegister} userData={userData} signoutHandler={signoutHandler}/>
    <Main allBudgets={allBudgets} m={m} prevBudg={prevBudg} inputs={inputs} setInputs={setInputs} db={db} user={user} month={month} 
      setMonth={setMonth} setPrevBudg={setPrevBudg} email={email} budg={budg} setBudg={setBudg} handleClick={handleClick} />
    <Footer/>
    </div>
  );}

export default App;
