import React from 'react'
import {QUESTIONS_LIST} from './questions-list'
import './dashboard.css'
import { connect } from 'react-redux';
import {answerQuestion, answeredCorrect, answeredIncorrect, playAgain} from './actions'

export class Dashboard extends React.Component {

  /*constructor(props) {
        super(props)
        this.props = {
            correct: 0,
            incorrect: 0,
            questionNumber: 0,
            answeredQuestions: 0,
            answer: '',
            showQuestion: true,
            answerCorrect: false,
            correctAnswer: ''
        }
    }*/

    showQuestion() {        
      if (this.props.showQuestion !== true) {
        return this.showAnswer()
        //return this.dispatch(showAnswer())
      }
      else {
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
                    this.dispatch(answerQuestion(), this.onAnswer())
                    }}>{answer}</button>
                })}
              </div>
            </main>  
          </div>
        )
      }
      
            
    }

    onAnswer() {
      let correctAnswer = QUESTIONS_LIST[this.props.questionNumber].correctAnswer
      if (this.props.answer === correctAnswer) {
        //this.setState({correct: this.props.correct+1, correctAnswer: correctAnswer, questionNumber: this.props.questionNumber+1, showQuestion: false, answerCorrect: true})
        this.dispatch(answeredCorrect())
        
      }
      else {
        //this.setState({incorrect: this.props.incorrect+1, correctAnswer: correctAnswer, questionNumber: this.props.questionNumber+1, showQuestion: false, answerCorrect: false})
        this.dispatch(answeredIncorrect())
      }
     
    }

    showAnswer() {
      if (this.props.answerCorrect === true) {
        return (
            <div className="show-answer">
              <main role="main" aria-live="polite">
                <p className="showanswer-header">Correct!</p>
                <button className="showanswer-next-button" onClick={() => this.setState({answeredQuestions: this.props.answeredQuestions+1, showQuestion: true})}>Next</button>
              </main>
            </div>

          )
      }
      else {
        return (
          <div className="show-answer">
            <main role="main" aria-live="polite">
              <p className="showanswer-header">Wrong. The correct answer is {this.props.correctAnswer}.</p>
              <button className="showanswer-next-button" onClick={() => this.setState({answeredQuestions: this.props.answeredQuestions+1, showQuestion: true})}>Next</button>
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
              <button className="dashboard-playagain-button" onClick={() => this.dispatch(playAgain())}>Play again?</button>
            </main>
        </div>
      )
    }
    
    render() {
      if (this.props.answeredQuestions === QUESTIONS_LIST.length) {
      
        return this.finalScore()
      }
      else {
        return this.showQuestion()
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