import React from 'react'
import Login from '../components/Login'
import Register from '../components/Register'
import Profile from '../components/Profile'
import Popup from "reactjs-popup";

export default function Navbar(props) {

let user=props.user
let showLogin=props.showLogin
let setShowLogin=props.setShowLogin
let handleUserNameData=props.handleUserNameData
let email=props.email
let setEmail=props.setEmail
let db=props.db
let setUserName=props.setUserName
let setUser=props.setUser
let username=props.username
let firebase=props.firebase
let setShowRegister=props.setShowRegister
let showRegister=props.showRegister
let userData=props.userData
let signoutHandler=props.signoutHandler
let allBudgets=props.allBudgets
let setAllBudgets=props.setAllBudgets
let budg=props.budg
let inputs=props.inputs

    return (
    <div className='navdiv'>
            {user===undefined? 
        <div className='navbar'>
            <label className='budget-label'>The Budget App</label>
            {!showLogin&&
            <input type='submit' value='Log in'  className='btn'  onClick={(e)=>showLogin? setShowLogin(false):setShowLogin(true)}/>}
             {showLogin?
            <Login setShowLogin={setShowLogin} setShowRegister={setShowRegister} handleUserNameData={handleUserNameData} user={user} email={email} setEmail={setEmail} db={db} username={username} setUser={setUser} firebase={firebase}/> : ''}

            {!showRegister&&
            <input type='submit' value='Register'  className='btn' onClick={(e)=>showRegister? setShowRegister(false):setShowRegister(true)}/>}
            {showRegister?
            <Register setShowLogin={setShowLogin} setShowRegister={setShowRegister} handleUserNameData={handleUserNameData} username={username} email={email} setEmail={setEmail} setUserName={setUserName} db={db} user={user} setUser={setUser} firebase={firebase} /> : ''}
           {/* <input type="submit" value="Learn More"  className='btn'   /> */}
            <Popup trigger={<input type="submit" value="Learn More" className='btn'/>}>
                <div  className="pop" >
                    <p>This is an app designed </p>
                    <p>to help you calculate your budget.</p>
                    <p>Without registering you can budget</p>
                    <p>only the current month.</p>
                    <p>When you log in, </p>
                    <p>you can save your changes.</p>
                    <p>When making changes </p>
                    <p>you need to choose a month first.</p>
                </div>
            </Popup>
        </div>
                :  
                <Profile email={email} inputs={inputs} db={db} budg={budg} 
                setAllBudgets={setAllBudgets} allBudgets={allBudgets} userData={userData} signoutHandler={signoutHandler}/>}
     </div>    
    )
}
