import React from 'react'
import './title.css'

export default function Title(props) {
    return (
        <div>
            <header role="banner" aria-live="polite">
                <h1 className="header-title">U.S. State Capital Quiz</h1>
            </header>
            <main role="main" aria-live="polite">
            <div className="instructions-wrapper">
                <p className="instructions">Test your knowledge of U.S. State Capitals with this quiz! Click or tap the "Begin" button to start.</p>
            </div>
            <button className="start-button" onClick={props.startGame}>Begin</button>
            </main>
        </div>
    )
}