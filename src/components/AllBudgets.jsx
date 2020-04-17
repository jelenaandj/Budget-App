import React, { useState } from 'react'
import MonthBudget from './MonthBudget'

export default function AllBudgets(props) {

    let db=props.db
    let allBudgets=props.allBudgets
    let email=props.email
    let setAllBudgets=props.setAllBudgets

    console.log(allBudgets)
    //
    // allBudgets.map(budget => <MonthBudget budget={budget}/>)
    //
    // let months=['January','February','March','April','May','Jun','July','August','September','October','November','December']
    // let newBudgets
    // if(allBudgets!==undefined){
    // newBudgets=allBudgets.forEach(budget=> budget.forEach(x=>x.sort((a,b)=>a.x-b.x)))
    // console.log(newBudgets)}
    const divHandler=(e)=>{
        setAllBudgets(undefined)
        
    }


    return (
        
        <div className='all-budgets'>
        {allBudgets && <><div><input type='submit' value='X' className='button' onClick={divHandler} /> </div>
        <div > {allBudgets!==undefined?  allBudgets.map(budget => <MonthBudget key={budget.month} budget={budget}/>) :'' }</div></> }
        </div>
    )
}
