import React, { useState } from 'react'
import Select from 'react-select'


export default function Header(props) {

    let m=props.m
    let month=props.month
    let setMonth=props.setMonth

    const options = [
        { value: 'January', label: 'January' },
        { value: 'February', label: 'February' },
        { value: 'March', label: 'March' },
        { value: 'April', label: 'April' },
        { value: 'May', label: 'May' },
        { value: 'Jun', label: 'Jun' },
        { value: 'July', label: 'July' },
        { value: 'August', label: 'August' },
        { value: 'September', label: 'September' },
        { value: 'Octobar', label: 'Octobar' },
        { value: 'November', label: 'November' },
        { value: 'December', label: 'December' }
      ]

   
    

    const onMonthChange=(e)=>{
        console.log(e)
       if(e.value !==''){
       setMonth(e.value)
       console.log(month)}else{
           alert('please choose a month')
           
       }
   }

    return (
        <div>
            <h1>Budget for</h1>
            <Select options={options} onChange={onMonthChange} />   

        </div>
    )
}
