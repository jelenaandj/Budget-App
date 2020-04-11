import React, { useState, useEffect } from 'react'

export default function Total(props) {

    let input=props.input

    const[totalInput,setTotalInput]=useState(0)

    useEffect(()=>{
        if( typeof input != 'undefined' && input instanceof Array&&input.length!==0){
            let total=0
            input.forEach(input => {
                total+=parseInt(input.numb)
            });
            setTotalInput(total)
        }else{
            setTotalInput(0)
        }
    },)

    return (
        <div >
            <label className='total'>
                {totalInput}
            </label>
        </div>
    )
}
