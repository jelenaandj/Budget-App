import React from 'react'
import { useState } from 'react'

export default function Register() {

    const[name,setName]=useState('')
    const[surname,setSurname]=useState('')
    const[username,setUsername]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[confirmPassword,setConfirmPassword]=useState('')
    const[issamePass,setIsSamePass]=useState('')
    

    return (
        <div>
            <input type="text" placeholder="Name"/>
            <input type="text" placeholder="Surname"/>
            <input type="text" placeholder="Username" />  
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
            <input type="submit" value="Register" />
        </div>
    )
}
