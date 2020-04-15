import React, { useState } from 'react'
import MonthBudget from './MonthBudget'

export default function AllBudgets(props) {

    let db=props.db
    let allBudgets=props.allBudgets
    let email=props.email
    console.log(allBudgets)
//allBudgets!==undefined?//
//budgets.map(budgets=><MonthBudget budgets={budgets}/>)
// if(allBudgets!==undefined){
// for(let i=0; i<allBudgets.lenght; i++){
//     console.log(i)
// }}
   
    return (
        <div> {allBudgets!==undefined?   allBudgets.map(budget => <MonthBudget budget={budget}/>):'' } </div>
    )
}
