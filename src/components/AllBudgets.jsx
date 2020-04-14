import React, { useState } from 'react'
import MonthBudget from './MonthBudget'

export default function AllBudgets(props) {

    let db=props.db
    let allBudgets=props.allBudgets
    let email=props.email
//allBudgets!==undefined?//
   
    return (
        <div>
            {
            //  allBudgets!==undefined?   allBudgets.map(budgets=><MonthBudget budgets={budgets}/>) :''
            }
        </div>
    )
}
