import React, { useState } from 'react'
import Select from 'react-select'


export default function Header(props) {

    let m=props.m
    let month=props.month
    let setMonth=props.setMonth
    let user=props.user
    let db=props.db
    let inputs=props.inputs
    let setGetData=props.setGetData
    let getData=props.getData

    
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
       console.log(month)
       console.log(e.value)

    ///get data form firestore//
    db.collection('users').doc(user).collection(e.value).doc(e.value).get()
    .then(function(doc) {
        if (doc.exists) {
        setGetData(doc.data())
        console.log(getData)
        console.log("Document data:", doc.data());
        }else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
            }
            })
        .catch(function(error) {
            console.error("Error getting document: ", error);
        });
        ////
            }else{
            alert('please choose a month')   
        }
    }

    return (
        <div>
            <h1>Budget for</h1>
    <h1>{month}</h1>
            <Select options={options} onChange={onMonthChange} />   

        </div>
    )
}
