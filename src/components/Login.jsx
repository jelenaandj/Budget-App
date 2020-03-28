import React, { useState } from 'react'
// import * as firebase from "firebase/app";
// import "firebase/auth";
// import "firebase/firestore";
// import "firebase/database";

export default function Login(props) {

    // let user=props.user
    let setUser=props.setUser
    let firebase=props.firebase
    let username=props.userName
    let db=props.db
    let email=props.email
    let setEmail=props.setEmail
    let handleUserNameData=props.handleUserNameData


    // const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    // const[userData,setUserData]=useState('')



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
            /////
            // if(email !=='' && username !=='')
            // db.collection('users').doc(email).collection('personalInfo').doc(username).get()
            // .then(function(doc) {
            // if (doc.exists) {
            // //
            // setUserData(doc.data().username)
            // console.log(userData)

            // console.log("Document data:", doc.data());
            // }else {
            // // doc.data() will be undefined in this case
            // setUserData(email)
            //     }
            //     })
            // .catch(function(error) {
            //     console.error("Error getting document: ", error);
            // });
                ////
            // [END authwithemail]
            }else{
                alert('Please enter your password and username')
            }

    }
    

    return (
        <div>
            <div>
                <input type="text" placeholder="email" onChange={emailHandler}/>
                <input type="password" placeholder="password" onChange={passwordHandler}/>
                <input type="submit" value="Log in" onClick={inputHandler} />
            </div>
          
        </div>
        
      
    )}

