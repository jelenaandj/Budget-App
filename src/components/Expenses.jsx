import React from 'react'
import Input from './Input'


export default function Expenses(props) {

    let inputs=props.inputs
    let setInputs=props.setInputs
    let getData=props.getData
    console.log(getData.inputs)
    
 
    return (
        <div className='expenses' >

           {inputs.filter(inputB=> inputB.value.includes('Expense')).map(inputB=> <Input inputB={inputB} setInputs={setInputs} inputs={inputs} />) }
           {getData.inputs!==undefined?
           getData.inputs.filter(inputB=> inputB.value.includes('Expense')).map(inputB => <Input inputB={inputB}  setInputs={setInputs} inputs={inputs} />):''  }
        </div>
    )
}
