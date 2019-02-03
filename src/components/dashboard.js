import React from 'react'
import {QUESTIONS_LIST} from './questions-list'
import Question from './question'

export default class Dashboard extends React.Component {

  constructor(props) {
        super(props)
        this.state = {
            correct: 0,
            incorrect: 0,
            questionNumber: 0,
            answer: '',
            showQuestion: true
        }
    }

    showQuestion() {
      while (this.state.incorrect + this.state.correct !== QUESTIONS_LIST.length) {
        let currentQuestion = QUESTIONS_LIST[this.state.questionNumber].question
          let currentAnswerChoices = []
          for (let i=0; i<QUESTIONS_LIST[this.state.questionNumber].answers.length; i++) {
            currentAnswerChoices.push(QUESTIONS_LIST[this.state.questionNumber].answers[i])
          }
          
          return (
            
            <div>
              <Question question={currentQuestion} />
              {currentAnswerChoices.map((answer, index) => {
                return <button key={index} value={answer} onClick={() => {
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
        this.setState({correct: this.state.correct+1, questionNumber: this.state.questionNumber+1}, () => this.rightAnswer()
        )
      }
      else {
        this.setState({incorrect: this.state.incorrect+1, questionNumber: this.state.questionNumber+1}, () => this.wrongAnswer()
      
        );
      }
     
    }

 
    

    rightAnswer() {
      if (this.state.showQuestion === false) {
        return (
          <div>
            <p>Correct!</p>
            <button onClick={() => this.setState({showQuestion: true})}></button>
          </div>

        )
      }
    }

    wrongAnswer() {
      if (this.state.showQuestion === false) {
        return (
          <div>
            <p>Wrong.</p>
            <button onClick={() => this.setState({showQuestion: true})}></button>
          </div>
        )
      }
    }

    finalScore() {
      return (
        <div>
            <p>Correct: {this.state.correct}</p>
            <p>Incorrect: {this.state.incorrect}</p>
            <button onClick={() => this.setState({correct:0, incorrect:0, questionNumber:0})}>Play again?</button>
        </div>
      )
    }
    
    render() {
      if (this.state.correct + this.state.incorrect === QUESTIONS_LIST.length) {
        return this.finalScore()
      }
      else {
        return this.showQuestion()
      }
      
    }
}