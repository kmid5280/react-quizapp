import React from 'react'
import {QUESTIONS_LIST} from './questions-list'
import Question from './question'
import ShowAnswer from './show-answer'

export default class Dashboard extends React.Component {

  constructor(props) {
        super(props)
        this.state = {
            correct: 0,
            incorrect: 0,
            questionNumber: 0,
            answeredQuestions: 0,
            answer: '',
            showQuestion: true,
            answerCorrect: false,
            correctAnswer: ''
        }
    }

    showQuestion() {        
      if (this.state.showQuestion !== true) {
        return this.showAnswer()    
      }
      else {
        let currentQuestion = QUESTIONS_LIST[this.state.questionNumber].question || ''
        let currentAnswerChoices = []
        for (let i=0; i<QUESTIONS_LIST[this.state.questionNumber].answers.length; i++) {
          currentAnswerChoices.push(QUESTIONS_LIST[this.state.questionNumber].answers[i])
        }
        return (
          <div className='question-wrapper'>
            <Question question={currentQuestion} />
            {currentAnswerChoices.map((answer, index) => {
              return <button className="dashboard-answer-button" key={index} value={answer} onClick={() => {
                this.setState({answer: answer, showQuestion: false}, () => this.onAnswer())
                }}>{answer}</button>
            })}
          
            
          </div>
        )
      }
      
            
    }

    onAnswer() {
      let correctAnswer = QUESTIONS_LIST[this.state.questionNumber].correctAnswer
      if (this.state.answer === correctAnswer) {
        this.setState({correct: this.state.correct+1, correctAnswer: correctAnswer, questionNumber: this.state.questionNumber+1, showQuestion: false, answerCorrect: true}
        )
      }
      else {
        this.setState({incorrect: this.state.incorrect+1, correctAnswer: correctAnswer, questionNumber: this.state.questionNumber+1, showQuestion: false, answerCorrect: false}
      );
      }
     
    }

    setShowQuestion() {
      this.setState({
        showQuestion: true
      })
    }
    

    showAnswer() {
      if (this.state.answerCorrect === true) {
        return (
            <div className="show-answer">
              <p>Correct!</p>
              <button onClick={() => this.setState({answeredQuestions: this.state.answeredQuestions+1, showQuestion: true})}>Next</button>
            </div>

          )
      }
      else {
        return (
          <div className="show-answer">
            <p>Wrong. The correct answer is {this.state.correctAnswer}.</p>
            <button onClick={() => this.setState({answeredQuestions: this.state.answeredQuestions+1, showQuestion: true})}>Next</button>
          </div>
        )
      }
    }

    finalScore() {
      return (
        <div className='final-score'>
            <p>Correct: {this.state.correct}</p>
            <p>Incorrect: {this.state.incorrect}</p>
            <button className="dashboard-playagain-button" onClick={() => this.setState({correct:0, incorrect:0, questionNumber:0, answeredQuestions:0})}>Play again?</button>
        </div>
      )
    }
    
    render() {
      if (this.state.answeredQuestions === QUESTIONS_LIST.length) {
      
        return this.finalScore()
      }
      else {
        return this.showQuestion()
      }
      
    }
}