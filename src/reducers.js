import {START_GAME} from './actions'
import {ANSWER_QUESTION, ANSWERED_CORRECT, ANSWERED_INCORRECT, PLAY_AGAIN, CLICK_NEXT_BUTTON} from './actions'

const initialState = {
    lang: 'en',
    gamePlay: false,
    correct: 0,
    incorrect: 0,
    questionNumber: 0,
    answeredQuestions: 0,
    answer: '',
    showQuestion: true,
    answerCorrect: false,
    correctAnswer: ''
}

export const Quiz = (state = initialState, action) => {
    if (action.type === START_GAME) {
        return Object.assign({}, state, {
            gamePlay: true
        })
    }
    if (action.type === ANSWER_QUESTION) {
        return Object.assign({}, state, {
            answer: action.answer,
            showQuestion: false
        })
    }

    if (action.type === ANSWERED_CORRECT) {
        return Object.assign({}, state, {
            correct: state.correct + 1,
            correctAnswer: state.correctAnswer,
            questionNumber: state.questionNumber + 1,
            showQuestion: false,
            answerCorrect: true

        })
    }

    if (action.type === ANSWERED_INCORRECT) {
        return Object.assign({}, state, {
            incorrect: state.incorrect + 1,
            correctAnswer: state.correctAnswer,
            questionNumber: state.questionNumber + 1,
            showQuestion: false,
            answerCorrect: false
        })
    }

    if (action.type === CLICK_NEXT_BUTTON) {
        return Object.assign({}, state, {
            answeredQuestions: state.answeredQuestions + 1,
            showQuestion: true
        })
    }

    if (action.type === PLAY_AGAIN) {
        return Object.assign({}, state, {
            correct: 0,
            incorrect: 0,
            questionNumber: 0,
            answeredQuestions: 0
        })
    }

    return state
}