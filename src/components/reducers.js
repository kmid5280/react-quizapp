import {ANSWER_QUESTION, ANSWERED_CORRECT, PLAY_AGAIN} from './actions'

const initialState = {
    correct: 0,
    incorrect: 0,
    questionNumber: 0,
    answeredQuestions: 0,
    answer: '',
    showQuestion: true,
    answerCorrect: false,
    correctAnswer: ''
}

export const Dashboard = (state = initialState, action) => {
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