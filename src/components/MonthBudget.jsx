import React from 'react'


export default function MonthBudget(props) {
    let budget=props.budget
    console.log(budget,'monthbudg')
    

    return (
        <div>
        <div style={budget.budget<0? {color:'red'} : {color:'black'}}>{budget.month} {budget.budget} </div>

    </div>
    )
}
