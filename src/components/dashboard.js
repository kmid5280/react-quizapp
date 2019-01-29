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

    onAnswer(value) {
      
      console.log(this.state.answer)
      let correctAnswer = QUESTIONS_LIST[this.state.questionNumber].correctAnswer
      this.setState({
        questionNumber: this.state.questionNumber + 1
      })
      console.log(this.state.questionNumber)
    }
    
    
    render() {
        let currentQuestion = QUESTIONS_LIST[this.state.questionNumber].question
        let currentAnswer1 = QUESTIONS_LIST[this.state.questionNumber].answers[0]
        let currentAnswer2 = QUESTIONS_LIST[this.state.questionNumber].answers[1]
        let currentAnswer3 = QUESTIONS_LIST[this.state.questionNumber].answers[2]
        let currentAnswer4 = QUESTIONS_LIST[this.state.questionNumber].answers[3]
        
        return (
          
          <div>
            <Question question={currentQuestion} />
            <button value={currentAnswer1} onClick={e => this.onAnswer(e)}>{currentAnswer1}</button>
            <button value={currentAnswer2} onClick={e => this.onAnswer(e)}>{currentAnswer2}</button>
            <button value={currentAnswer3} onClick={e => {
              this.setState({answer: currentAnswer3})
              this.onAnswer(e)
            }}>{currentAnswer3}</button>
            <button value={currentAnswer4} onClick={e => this.onAnswer(e)}>{currentAnswer4}</button>
          </div>
        )
      
        
      
        
    }
}