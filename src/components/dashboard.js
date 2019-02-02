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
            answer: ''
           
        }
    }
    
    renderQuestion() {
      let n = this.state.questionNumber
      
      
    }

    onAnswer(e) {
      e.preventDefault()
      let correctAnswer = QUESTIONS_LIST[this.state.questionNumber].correctAnswer
      console.log('this.state.answer ' + this.state.answer, 'correctanswer' + correctAnswer)
      if (this.state.answer === correctAnswer) {
        this.setState({correct: this.state.correct+1, questionNumber: this.state.questionNumber+1})
      }
      else {
        this.setState({incorrect: this.state.incorrect+1, questionNumber: this.state.questionNumber+1})
      }

    }
    
    
    render() {
        let currentQuestion = QUESTIONS_LIST[this.state.questionNumber].question
        let currentAnswerChoices = []
        for (let i=0; i<QUESTIONS_LIST[this.state.questionNumber].answers.length; i++) {
          currentAnswerChoices.push(QUESTIONS_LIST[this.state.questionNumber].answers[i])
        }
        
        return (
          
          <div>
            <Question question={currentQuestion} />
            {currentAnswerChoices.map((answer, index) => {
              return <button key={index} value={answer} onClick={(e) => {
                this.setState({answer: answer}); 
                this.onAnswer(e)
              }}>{answer}</button>
            })}  
            
          </div>
        )
      
        
      
        
    }
}