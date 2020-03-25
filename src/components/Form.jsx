import React, { useState } from 'react'
import Select from 'react-select'
// import { firestore } from 'firebase'



export default function Form(props) {
    let handleClick=props.handleClick
    let db=props.db
    let month=props.month
    let user=props.user
    let inputs=props.inputs
    
   
    
    // let inputs=props.inputs

    const options = [
        { value: 'Income', label: '+' },
        { value: 'Expense', label: '-' }
      ]
    // let{handleClick,input}=props
    const[select,setSelect]=useState('')
    const[text,setText]=useState()
    const[numb,setNumb]=useState()
    
 

    const onSelectChange=(e)=>{
       if(e.value !==''){
       setSelect(e.value)
        }else{
        alert('Please input data')
       }
   }

    const onTextInput=(e)=>{
        if(e.target.value !== undefined){
        setText(e.target.value)
        }else{
        console.log('empty')
        alert('Please input data')}

    }
    const onNumbInput=(e)=>{
        if(e.target.value !== undefined){
            setNumb(e.target.value)
            }else{
            console.log('empty')
            alert('Please input data')}
    }

    const handleButton=(e)=>{
        
            if(e.value !==''){
                handleClick(select,text,numb)
                }else{
                    console.log('empty')      
                }
        e.preventDefault()
    }

    const handleSave=(e)=>{
        if(user!==undefined){
            db.collection('users').doc(user).collection(month).doc(month).set({
                inputs
            }).then(function() {
                    console.log("Document successfully written!");
                })
                .catch(function(error) {
                    console.error("Error writing document: ", error);
                });
            console.log(user)
            console.log(month)
        }else{
            alert('Please Sign in or Register')
        }
       

    }
    
    return (
        <div className='form' >
            <Select options={options} onChange={onSelectChange} />   
            <input type='text' onChange={onTextInput} />
            <input type='text' onChange={onNumbInput} />

            <button onClick={handleButton}>Submit</button>
            <button onClick={handleSave}>Save</button>

        </div>
    )
}
