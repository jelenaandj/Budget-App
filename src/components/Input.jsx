import React from 'react'

export default function Input(props) {
    
    let inputB=props.inputB
    let inputs=props.inputs
    // let id=props.inputB.index
    let setInputs=props.setInputs

    console.log(inputB)

    const handleDelete=(id)=>{
        if(inputs.length !==0){
            setInputs(inputs.filter(input=>input.id !==id))
        }
       
        // inputs.splice(e.target.value)
        // setRecipes(recipes.filter(recipe=>recipe.id !==id))
        
    }

    return (
        
        <div>
            <p>{inputB.value}</p>
            <p>{inputB.text} </p>
            <p>{parseInt(inputB.numb)} </p>
            {inputB?
            <button type='submit' onClick={()=>handleDelete(inputB.id)} >Delete</button>
        :null}
        </div>
        
    )
}
