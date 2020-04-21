import React, { useState } from 'react'
// import * as firebase from "firebase/app";
// import "firebase/auth";
// import "firebase/firestore";
// import "firebase/database";

export default function Login(props) {

    // let user=props.user
    let setUser=props.setUser
    let firebase=props.firebase
    let email=props.email
    let setEmail=props.setEmail
    let handleUserNameData=props.handleUserNameData
    let setShowRegister=props.setShowRegister
    let setShowLogin=props.setShowLogin

    const[password,setPassword]=useState('')

    const emailHandler=(e)=>{
        setEmail(e.target.value)
    }

    const passwordHandler=(e)=>{
        setPassword(e.target.value)
    }
    
    const inputHandler=(e)=>{
        e.preventDefault()
        if(email!=='' && password!==''){
            ///firebase authentication
            console.log('logged in')
            // setUser(email,password)
            setUser(firebase.auth().currentUser)
            firebase.auth().signInWithEmailAndPassword(email, password).then(function(user) {
                // user signed in
                handleUserNameData()
             }).catch(function(error) {
            
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage)
            // [START_EXCLUDE]
            if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
            setUser(undefined)
            setShowLogin(false)
            setShowRegister(false)
            } else {
            alert(errorMessage);
            console.log(error);
            setUser(undefined)
            setShowLogin(false)
            setShowRegister(false)
            }
           
            });
            }else{
                alert('Please enter your password and username')
                setUser(undefined)
            }
    }
    return (
        <div>
            <div className='input-container'>

                <input type="text" placeholder="email" onChange={emailHandler}/>
                <input type="password" placeholder="password" onChange={passwordHandler}/>
                
            </div>
            <input type="submit" value="Log in" className='btn' onClick={inputHandler} />
        </div>
        
      
    )}

