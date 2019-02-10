import React from 'react'

export default function Title(props) {
    return (
        <div>
            <h1 className="header-title">State Capital Quiz</h1>
            <button className="start-button" onClick={props.startGame}>Begin</button>
        </div>
    )
}