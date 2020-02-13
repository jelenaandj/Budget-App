import React, { useState } from 'react'

export default function Login() {

    const[username,setUsername]=useState('')
    const[password,setPassword]=useState('')

    const handleSubmit=()=>{
        if(username===password){
            setUsername()
        }
    }
    //login form 
    //make login on heroku

    return (
        <form>
        <input type="text" placeholder="username" required onInput={e => {
            setUsername(e.target.value)
        }}/>
        <input type="password" placeholder="password" required onInput={e => {
            setPassword(e.target.value)
        } }/>
        <input type="submit" value="Log in" onClick={(e) => {
            e.preventDefault()
            if(username!=='' && password!==''){
                handleSubmit()
            }else{
                alert('Please enter your password and username')
            }
            
        }} />
    </form>
    )
}
