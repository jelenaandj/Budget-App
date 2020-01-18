import React, { useState, useEffect } from 'react'

export default function Total(props) {

    let inputs=props.inputs

    const[totalInput,setTotalInput]=useState(0)
    let value

    var reducer = (accumulator, currentValue) => accumulator + currentValue.numb;
    if( typeof inputs != 'undefined' && inputs instanceof Array&&inputs.length!==0){
        value=inputs.reduce(reducer);
    }

    console.log('inputs total',inputs)
    // if(inputs.length!==0)
    useEffect(()=>{
        
        setTotalInput(value);
    },value)
    

    return (
        <div>
            <label>
                {totalInput}
            </label>
        </div>
    )
}
