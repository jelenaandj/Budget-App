import React from 'react'
import Input from './Input'




export default function Income(props) {

    let inputs=props.inputs
    let setInputs=props.setInputs
    // console.log(inputs)
    return (
        <div className='income' >
           {inputs.filter(inputB=> inputB.value.includes('Income')).map(inputB=> <Input inputB={inputB}  setInputs={setInputs} inputs={inputs} />) }
        </div>
    )
}
