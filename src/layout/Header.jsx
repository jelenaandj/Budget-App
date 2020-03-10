import React from 'react'

export default function Header(props) {

    let m=props.m

    return (
        <div>
            <h1>Budget for {m}</h1>
        </div>
    )
}
