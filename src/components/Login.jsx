import React, { useState } from 'react'
// import * as firebase from "firebase/app";
// import "firebase/auth";
// import "firebase/firestore";
// import "firebase/database";

export default function Login(props) {

    let user=props.user
    let setUser=props.setUser
    let firebase=props.firebase

    const[email,setEmail]=useState('')
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
            setUser(email,password)
            firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // [START_EXCLUDE]
            if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
            } else {
            alert(errorMessage);
            }
            console.log(error);
            // document.getElementById('quickstart-sign-in').disabled = false;
            // [END_EXCLUDE]
            });
        // [END authwithemail]
        }else{
            alert('Please enter your password and username')
        }

    }
    const signoutHandler=(e)=>{
        e.preventDefault()

        firebase.auth().signOut();
        console.log('signedout')
    }

    return (
        <div>
            <div>
                <input type="text" placeholder="email" onChange={emailHandler}/>
                <input type="password" placeholder="password" onChange={passwordHandler}/>
                <input type="submit" value="Log in" onClick={inputHandler} />
            </div>
            {user&&<input type="submit" value="Log out" onClick={signoutHandler}/>}
        </div>
        
      
    )}

