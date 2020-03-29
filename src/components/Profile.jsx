import React from 'react'

export default function Profile(props) {

    let userData=props.userData

    return (
        <div>
           {userData&& <label>Hello</label>} {userData}
        </div>
    )}
