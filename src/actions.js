export const START_GAME = 'START_GAME'
export const startGame = () => ({
    type: START_GAME
})

export const SUBMIT_ANSWER = 'SUBMIT_ANSWER'
export const submitAnswer = (answer) => ({
    type: SUBMIT_ANSWER,
    payload: answer
})

export const ANSWERED_CORRECT = 'ANSWERED_CORRECT'
export const answeredCorrect = () => ({
    type: ANSWERED_CORRECT
})

export const ANSWERED_INCORRECT = 'ANSWERED_INCORRECT'
export const answeredIncorrect = () => ({
    type: ANSWERED_INCORRECT
})

export const CLICK_NEXT_BUTTON = 'CLICK_NEXT_BUTTON'
export const clickNextButton = () => ({
    type: CLICK_NEXT_BUTTON
})

export const PLAY_AGAIN = 'PLAY_AGAIN'
export const playAgain = () => ({
    type: PLAY_AGAIN
})