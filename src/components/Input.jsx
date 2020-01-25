import React from 'react'

export default function Input(props) {
    
    let inputB=props.inputB
    console.log(inputB)

    return (
        <>
        <div>
            <p>{inputB.value}</p>
            <p>{inputB.text} </p>
            <p>{parseInt(inputB.numb)} </p>
        </div>
        {inputB?
            <button>Delete</button>
        :null}
        </>
    )
}
