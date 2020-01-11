import React from 'react'
import Input from './Input'

export default function Expences(props) {

    let inputs=props.inputs
    console.log(inputs)

    return (
        <div>
           {inputs.filter(inputB=> inputB.value.includes('Expence')).map(inputB=> <Input inputB={inputB} />) }
        </div>
    )
}
