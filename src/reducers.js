import {START_GAME} from './actions'
import {SUBMIT_ANSWER, ANSWERED_CORRECT, ANSWERED_INCORRECT, PLAY_AGAIN, CLICK_NEXT_BUTTON} from './actions'
import {QUESTIONS_LIST} from './components/questions-list'

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
    correctAnswer: '',
    currentAnswer: ''
}

export const Quiz = (state = initialState, action) => {
    if (action.type === START_GAME) {
        return Object.assign({}, state, {
            gamePlay: true
        })
    }
    if (action.type === SUBMIT_ANSWER) {
        const correctAnswer = QUESTIONS_LIST[state.questionNumber].correctAnswer || ''
        if (action.payload === correctAnswer) {
            return Object.assign({}, state, {
                showQuestion: false,
                answerCorrect: true,
                correct: state.correct + 1,

            })
        }
        else if (action.payload !== correctAnswer) {
            return Object.assign({}, state, {
                showQuestion: false,
                answerCorrect: false,
                incorrect: state.incorrect + 1
            })
        }
    }

    if (action.type === CLICK_NEXT_BUTTON) {
        return Object.assign({}, state, {
            answeredQuestions: state.answeredQuestions + 1,
            questionNumber: state.questionNumber + 1,
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