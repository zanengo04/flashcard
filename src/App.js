import React , {useState, useEffect} from 'react'
import FlashcardList from './FlashcardList'
import './app.css'
import axios from 'axios'
function App() {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS)
  useEffect(() => {
    axios
      .get('https://opentdb.com/api.php?amount=10')
      .then(res =>{
        setFlashcards(res.data.results.map((questionItem, index) => {
          const answer =  decodeString(questionItem.correct_answer)
          const options = [...questionItem.incorrect_answers.map(a=> decodeString(a)), 
            answer]
          return {
            id: `${index}-${Date.now}`,
            question: decodeString(questionItem.question),
            answer:questionItem.correct_answer,
            options: options.sort(() => Math.random() - 0.5 )

          }
        }))
      })  
  }, [])
  return (
    <div className="container">
      <FlashcardList flashcards = {flashcards} />
    </div>
  )
}
function decodeString(str){
  const textArea = document.createElement('textarea')
  textArea.innerHTML  = str
  return textArea.value
}
const SAMPLE_FLASHCARDS =[
  {
    id:1,
    question: 'What is 2 + 2?',
    answer: 4,
    options: ['1','2','3','4']
  },
  {
    id:2,
    question: 'Question 2',
    answer: 4,
    options: ['1','2','3','4']
  },
  {
    id:3,
    question: 'Question 3',
    answer: 4,
    options: ['1','2','3','4']
  }
]

export default App