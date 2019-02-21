import React from 'react'
import {QUESTIONS_LIST} from './questions-list'
import './dashboard.css'
import { connect } from 'react-redux';
import {submitAnswer, answeredCorrect, answeredIncorrect, clickNextButton, playAgain} from '../actions'

export class Dashboard extends React.Component {

    showQuestion() {        
      if (this.props.showQuestion === false) {
        return this.showAnswer()
        //return this.props.dispatch(showAnswer())
      }
      else if (this.props.showQuestion === true) {
        let currentQuestion = QUESTIONS_LIST[this.props.questionNumber].question || ''
        let currentAnswerChoices = []
        for (let i=0; i<QUESTIONS_LIST[this.props.questionNumber].answers.length; i++) {
          currentAnswerChoices.push(QUESTIONS_LIST[this.props.questionNumber].answers[i])
        }
        return (
          <div className='question-wrapper'>
            <main role="main" aria-live="polite">
              <h1 className="current-question">{currentQuestion}</h1>
              <div className="answer-buttons-wrapper">
                {currentAnswerChoices.map((answer, index) => {
                  return <button className="dashboard-answer-button" key={index} value={answer} onClick={() => {
                    return this.props.dispatch(submitAnswer(answer))
                    }}>{answer}</button>
                })}
              </div>
            </main>  
          </div>
        )
      }      
    }

    showAnswer() {
      if (this.props.answerCorrect === true) {
        return (
            <div className="show-answer">
              <main role="main" aria-live="polite">
                <p className="showanswer-header">Correct!</p>
                <button className="showanswer-next-button" onClick={() => this.props.dispatch(clickNextButton())}>Next</button>
              </main>
            </div>

          )
      }
      else if (this.props.answerCorrect === false) {
        const correctAnswer = QUESTIONS_LIST[this.props.questionNumber].correctAnswer
        return (
          <div className="show-answer">
            <main role="main" aria-live="polite">
              <p className="showanswer-header">Wrong. The correct answer is {correctAnswer}.</p>
              <button className="showanswer-next-button" onClick={() => this.props.dispatch(clickNextButton())}>Next</button>
            </main>
          </div>
        )
      }
    }

    finalScore() {
      return (
        <div className='final-score-wrapper'>
            <main role="main" aria-live="polite">
              <p className="correct-score">Correct: {this.props.correct}</p>
              <p className="incorrect-score">Incorrect: {this.props.incorrect}</p>
              <button className="dashboard-playagain-button" onClick={() => this.props.dispatch(playAgain())}>Play again?</button>
            </main>
        </div>
      )
    }
    
    render() {
      
      if (this.props.answeredQuestions === QUESTIONS_LIST.length) {
        return this.finalScore()
      }
      else {
        if (this.props.showQuestion === false) {
          return this.showAnswer()
        }
        else if (this.props.showQuestion === true) {
          return this.showQuestion()
        }
      }
      
    }
}

const mapStateToProps = state => ({
  correct: state.correct,
  incorrect: state.correct,
  questionNumber: state.questionNumber,
  answeredQuestions: state.answeredQuestions,
  answer: state.answer,
  showQuestion: state.showQuestion,
  answerCorrect: state.answerCorrect,
  correctAnswer: state.correctAnswer
})

export default connect(mapStateToProps)(Dashboard)