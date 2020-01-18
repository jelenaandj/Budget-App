import React, { useState, useEffect } from 'react'

export default function Total(props) {

    let inputs=props.inputs

    const[totalInput,setTotalInput]=useState(0)

    console.log('inputs total',inputs)
    // if(inputs.length!==0)

    useEffect(()=>{
        if( typeof inputs != 'undefined' && inputs instanceof Array&&inputs.length!==0){
            let total=0
            inputs.forEach(input => {
                total+=parseInt(input.numb)
            });
            setTotalInput(total)
        }
    },)

    return (
        <div>
            <label>
                {totalInput}
            </label>
        </div>
    )
}
