import React from 'react'


export default function MonthBudget(props) {
    let budget=props.budget
    return (
        <div>
            {budget.id} {budget.budg}
        </div>
    )
}
