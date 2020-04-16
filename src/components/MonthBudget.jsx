import React from 'react'


export default function MonthBudget(props) {
    let budget=props.budget
    console.log(budget,'monthbudg')
    

    return (
        <div>
        <div>{budget.month} {budget.budget}</div>
    {/* <div>1{budget.month==='January'? <p>{budget.month} {budget.budget}</p>:''}</div>
    <div>2{budget.month==='February'? <p>{budget.month} {budget.budget}</p>:''}</div>
    <div>3{budget.month==='March'? <p>{budget.month} {budget.budget}</p>:''}</div>
    <div>4{budget.month==='April'? <p>{budget.month} {budget.budget}</p>:''}</div>
    <div>5{budget.month==='May'? <p>{budget.month} {budget.budget}</p>:''}</div>

    <div>6{budget.month==='June'? <p>{budget.month} {budget.budget}</p>:''}</div>
    <div>7{budget.month==='July'? <p>{budget.month} {budget.budget}</p>:''}</div>
    <div>8{budget.month==='August'? <p>{budget.month} {budget.budget}</p>:''}</div>
    
    <div>9{budget.month==='September'? <p>{budget.month} {budget.budget}</p>:''}</div>
    <div>10{budget.month==='October'? <p>{budget.month} {budget.budget}</p>:''}</div>
    <div>11{budget.month==='November'? <p>{budget.month} {budget.budget}</p>:''}</div>
    <div>12{budget.month==='December'? <p>{budget.month} {budget.budget}</p>:''}</div> */}
    </div>
    )
}
