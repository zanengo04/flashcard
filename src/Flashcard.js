import React ,{useState} from 'react'

export default function Flashcard({flashcard}) {
    const [flip, setFlip] = useState(false)


    return (
        <div 
        //dynamic classes
        className = {`card ${flip ? 'flip' : ''}`}
        onClick={() => setFlip(!flip)}>

            <div className = 'front'>
                {flashcard.question}
                <div className = "flasscard-options">
                    {flashcard.options.map(option => {
                        return <div className = "flashcard-option">{option}</div>
                    })}
                </div>
            </div>
            <div className = 'back'>{flashcard.answer}</div>
            
        </div>
    )
}
