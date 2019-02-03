import React from 'react'

export default function Title(props) {
    return (
        <div>
            <header>
                <h1 className="header-title">State Capital Quiz</h1>
            </header>
            <body>
                <button onClick={props.startGame.bind(this)}>Begin</button>
            </body>
        </div>
    )
}