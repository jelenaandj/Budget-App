import React from 'react'
import { useState } from 'react'

export default function Register(props) {

    let user=props.user
    let setUser=props.setUser
    let firebase=props.firebase
    let db=props.db
    let username=props.username
    let setUserName=props.setUserName
    let email=props.email
    let setEmail=props.setEmail
    let handleUserNameData=props.handleUserNameData

    
    // const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[confirmPassword,setConfirmPassword]=useState('')


    const handleUserName=(e)=>{
        setUserName(e.target.value)
        console.log(username)
    }
    const handleEmail=(e)=>{
        setEmail(e.target.value)
    }
    const handlePass=(e)=>{
        setPassword(e.target.value)
    }
    const handleConfirmPass=(e)=>{
        setConfirmPassword(e.target.value)
    }
    const handleUserNameSign=(e)=>{
        if(username!==undefined){
            db.collection('users').doc(email).collection('personalInfo').doc('username').set({
              username
          }).then(function() {
                  console.log("Username successfully written!");
              })
              .catch(function(error) {
                  console.error("Error writing Username: ", error);
              });
          console.log(user)
          console.log(username)}else{
              console.log('no user')
          }
    }
    
    const handleRegister=(e)=>{
        e.preventDefault()
        if(email!=='' && password!==''&& password===confirmPassword){
            setUser(firebase.auth().currentUser)
            
            console.log(user)
            firebase.auth().createUserWithEmailAndPassword(email, password).then(function(user) {
                // user signed in
                alert('You have successfully Registered')
             
              handleUserNameSign()
              handleUserNameData()
             }).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // ...
              });  
        }else{
            alert('please confirm the password')
        }
        
    } 
    return (
        <div>
            <input type='text' placeholder='username' onChange={handleUserName}/>
            <input type="email" placeholder="Email" onChange={handleEmail} />
            <input type="password" placeholder="Password" onChange={handlePass}/>
            <input type="password" placeholder="Confirm Password" onChange={handleConfirmPass}/>
            <input type="submit" value="Register" onClick={handleRegister}/>
        </div>
    )
}
