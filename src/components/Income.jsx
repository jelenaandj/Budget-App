import React from 'react'
import Input from './Input'



export default function Income(props) {

    let inputs=props.inputs
    console.log(inputs)

    // const[display,setDisplay]=useState('')
    // setDisplay(inputs)
    // let list=[...display]

    return (
        <div className='income' >
           {inputs.filter(inputB=> inputB.value.includes('Income')).map(inputB=> <Input inputB={inputB} />) }
        </div>
    )
}
