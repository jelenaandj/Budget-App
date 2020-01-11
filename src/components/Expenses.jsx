import React from 'react'
import Input from './Input'

export default function Expenses(props) {

    let inputs=props.inputs
    // let setTotalE=props.setTotalE
    // let totalE=props.totalE
    // console.log(inputs)
    // const reducer = (accumulator, currentValue) => accumulator + currentValue;

    

    return (
        <div className='expenses' >
            <div>
                {/* {totalE} */}
            </div>
        <div>
           {inputs.filter(inputB=> inputB.value.includes('Expense')).map(inputB=> <Input inputB={inputB} />) }
        </div>
        </div>
    )
}
