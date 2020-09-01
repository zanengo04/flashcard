import React , {useState} from 'react'
import FlashcardList from './FlashcardList'

function App() {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS)
  return (
    <FlashcardList flashcards = {flashcards} />
  )
  }
const SAMPLE_FLASHCARDS =[
  {
    id:1,
    questions: 'What is 2 + 2?',
    answer: 4,
    options: ['1','2','3','4']
  },
  {
    id:2,
    questions: 'Question 2',
    answer: 4,
    options: ['1','2','3','4']
  },
  {
    id:3,
    questions: 'What is 2 + 2?',
    answer: 4,
    options: ['1','2','3','4']
  }
]

export default App