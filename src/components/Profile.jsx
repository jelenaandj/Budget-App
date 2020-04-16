import React from 'react'
import { useState,useEffect } from 'react'

export default function Profile(props) {
//{(e)=>{allBudgets? setAllBudgets(false):setAllBudgets(true)}}
    let signoutHandler=props.signoutHandler
    let userData=props.userData
    let allBudgets=props.allBudgets
    let setAllBudgets=props.setAllBudgets
    let budg=props.budg
    let inputs=props.inputs
    //
    let email=props.email
    let db=props.db
    //
    // const[data,setData]=useState([])
    let arr=[]
    let one={}
    
   const budgetsHandler=(e)=>{
    db.collection('users').doc(email).collection('months').get().then(function(querySnapshot) {
            
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            one={
                month:doc.id,
                budget:doc.data().budg
            }
            arr.push(one)
            
            console.log(doc.id, " => ", doc.data());
            console.log(arr);
            

        } 
        );setAllBudgets(arr.sort((a,b)=>a.budget-b.budget))

        console.log(allBudgets);
    })
   }
   

    
 
        
    
    
    return (
        <div className='profile'>
<label className='budget-label'>The Budget App</label>
           {userData&& <label className='user'>Hello {userData}!</label>}
           <input type="submit" value="All Budgets"  className='btn'  onClick={budgetsHandler} />
           
           <input type="submit" value="Log out"  className='btn'  onClick={signoutHandler} />

        </div>
    )}
