import React, { useState } from 'react'
import Select from 'react-select'



export default function Form(props) {
    let handleClick=props.handleClick
    // let inputs=props.inputs

    const options = [
        { value: 'Income', label: '+' },
        { value: 'Expence', label: '-' }
      ]
    // let{handleClick,input}=props
    const[select,setSelect]=useState('')
    const[text,setText]=useState()
 

    // const onSelectChange=(e)=>{
    //      console.log(e)
    //     if(e.target.value !== ''){
    //     setSelect(e)}else{
    //         console.log('empty')
           
    //     }

    //     console.log(select)
    //     console.log(options)
    // }
    const onSelectChange=(e)=>{
        console.log(e)
       if(e.value !==''){
       setSelect(e.value)
       console.log(select)}else{
           console.log('empty')
       }
   }

    const onTextInput=(e)=>{
        if(e.target.value !== ''){
        setText(e.target.value)}else{
        console.log('empty')}

    }

    const handleButton=(e)=>{
        if(e.value !==''){
        handleClick(select,text)}else{
            console.log('empty')
        }
        e.preventDefault()
    }

    return (
        <div className='form' >
            <Select options={options} onChange={onSelectChange} />   
            <input type='text' onChange={onTextInput} />
            <button onClick={handleButton}>Submit</button>
        </div>
    )
}
