import React from 'react'

export default function AllBudgets(props) {

    let db=props.db
    let allBudgets=props.allBudgets
    let email=props.email

    if(allBudgets===true && email !== undefined){
    db.collection('users').doc(email).collection('months').get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    });}else{
        console.log('not active')
    }
    return (
        <div>
            
        </div>
    )
}
