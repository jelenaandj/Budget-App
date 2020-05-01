import React, { useEffect } from 'react'


export default function Budget(props) {

    let income=props.income
    let expense=props.expense
    let budg=props.budg
    let setBudg=props.setBudg
    let prevBudg=props.prevBudg
    // let setPrevBudg=props.setPrevBudg
    // let writeData=props.writeData
   
//   console.log('numb',income.numb)
    // const[budg,setBudg]=useState(0)

useEffect(()=>{
    
    /////////////////////
    let totalInc=0
    income.forEach(element => {
        totalInc+=parseInt(element.numb)
    });
    // console.log('total',totalInc)
    
    let totalExp=0
    expense.forEach(element => {
        totalExp+=parseInt(element.numb)
    },[income,expense]);
    // console.log('total',totalExp)
    let tmp=totalInc-totalExp
if(prevBudg !== 'number'){
    setBudg(tmp+prevBudg)
}else{
    setBudg(tmp+prevBudg)
    // console.log('budg',budg)
    // console.log('prevBudg',prevBudg)
    // console.log('tmp',tmp)

}
},) 
    return (
        <div className='budget'>
        <div className='previous-month'>
            Previous Month: {prevBudg}
        </div>
        <div className='current-budget'>
            Current Budget: {budg}
        </div>
        
        </div>
    )
}
