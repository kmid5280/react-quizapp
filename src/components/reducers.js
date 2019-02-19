import {SHOW_QUESTION, SHOW_ANSWER} from './actions'

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
    if (action.type === SHOW_QUESTION) {
        return Object.assign({}, state, {
            
        })
    }
    if (action.type === SHOW_ANSWER) {
        return Object.assign({}, state, {

        })
    }
}