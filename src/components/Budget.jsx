import React, { useEffect, useState } from 'react'


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

//  writeData(tmp)/////////
},)



    
    return (
        <div>
        <div>
            Budget from the previous Month:{prevBudg}
        </div>
        <div>
            Current Budget: {budg}
        </div>
        
        </div>
    )
}
