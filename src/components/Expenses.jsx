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
   if(inputs!==''){
       let tmp=[...inputs]
   }
    

    return (
        <div className='expenses' >
        <div>
           {inputs.filter(inputB=> inputB.value.includes('Expense')).map(inputB=> <Input inputB={inputB} />) }
        </div>
        {/* <div>
            {inputs.filter(inputB=> inputB.value.includes('Expense')).reduce(reducer).map(totalExp=> <p>{totalExp.numb}</p>)}
        </div> */}
        </div>
    )
}
