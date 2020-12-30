import React ,{useState, useEffect, useRef} from 'react'

export default function Flashcard({flashcard, index}) {
    const [flip, setFlip] = useState(false)
    const [height, setHeight] = useState('initial')
    
    const frontElement = useRef()
    const backElement = useRef()

    function setMaxHeight() {
        const frontHeight = frontElement.current.getBoundingClientRect().height
        const backHeight = backElement.current.getBoundingClientRect().height
        setHeight(Math.max(frontHeight, backHeight, 100))
    }

    useEffect(setMaxHeight,[flashcard.question,flashcard.answer,flashcard.options])
    useEffect(()=>{
        window.addEventListener('resize', setMaxHeight)
        return () =>window.removeEventListener('resize', setMaxHeight)
    },[])
    return (
        <div 
        index={index}
        style={{height:height, display:"show"}}
        className = {`card ${flip ? 'flip' : ''}`}
        onClick={() => setFlip(!flip)}>

            <div className = 'front' ref={frontElement}>
                {flashcard.question}
                <div className = "flasscard-options">
                    {flashcard.options.map((option,index) => {
                        return <div className = "flashcard-option" key={option}>{option}</div>
                    })}
                </div>
            </div>
            <div className = 'back' ref={backElement}>{flashcard.answer}</div>
            
        </div>
    )
}
