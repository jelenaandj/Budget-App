import React from 'react'


export default function MonthBudget(props) {
    let budget=props.budget
    console.log(budget.month,budget.budget)
    return (
        <div>
            {budget.month} {budget.budget}
        </div>
    )
}
