import React from 'react'
import Input from './Input'
import Total from './Total'

export default function Expenses(props) {

    let inputs=props.inputs
    // let setTotalExp=props.setTotalExp
    // let totalExp=props.totalExp
    console.log(inputs)
    // const reducer = (accumulator, currentValue) => accumulator + currentValue;
    // if(inputs!==''){
    // let tmp=inputs.filter(inputB=> inputB.value.includes('Expense')).reduce(reducer)}else {console.log('tmp')}
    // const exp=()=>{
    //     if(inputs.filter(inputB=>inputB.value.includes('Expense'))){
    //         inputs.filter(numb=>numb.reduce(reducer))
    //     }else{alert('mistake')}
    // }
   
    

    return (
        <div className='expenses' >

           {inputs.filter(inputB=> inputB.value.includes('Expense')).map(inputB=> <Input inputB={inputB} />) }
    
        </div>
    )
}
