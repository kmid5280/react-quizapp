import React from 'react'

export default function Title(props) {
    return (
        <div>
            <header role="banner">
                <h1 className="header-title">State Capital Quiz</h1>
            </header>
            <main role="main">
                <button className="start-button" onClick={props.startGame}>Begin</button>
            </main>
        </div>
    )
}