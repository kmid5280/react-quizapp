import React from 'react'

export default function Title(props) {
    return (
        <div>
<<<<<<< HEAD
           <h1 className="header-title">State Capital Quiz</h1>
           <button onClick={props.startGame.bind(this)}>Begin</button>
=======
            <h1 className="header-title">State Capital Quiz</h1>
            {/*<button className="start-button" onClick={props.startGame.bind(this)}>Begin</button>*/}
            <button className="start-button" onClick={props.startGame}>Begin</button>
>>>>>>> testing
        </div>
    )
}