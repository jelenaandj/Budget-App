import React from 'react'

export default function Profile(props) {

    let signoutHandler=props.signoutHandler
    let userData=props.userData

    return (
        <div className='profile'>
<label className='budget-label'>The Budget App</label>
           {userData&& <label className='user'>Hello {userData}!</label>}
           <input type="submit" value="All Budgets"  className='btn'   />
           
           <input type="submit" value="Log out"  className='btn'  onClick={signoutHandler} />

        </div>
    )}
