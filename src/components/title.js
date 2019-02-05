import React from 'react'

export default function Title(props) {
    return (
        <div>
           <h1 className="header-title">State Capital Quiz</h1>
           <button onClick={props.startGame.bind(this)}>Begin</button>
        </div>
    )
}