// components/BounceText.jsx
import { useState, useEffect } from 'react'

export default function BounceText() {
  const text = "SURPRISE!"
  const [letters, setLetters] = useState([])
  
  useEffect(() => {
    const lettersArray = text.split('').map((letter, index) => ({
      letter,
      delay: index * 0.1
    }))
    
    setLetters(lettersArray)
    
    return () => setLetters([])
  }, [])
  
  return (
    <div className="surprise-content">
      <div className="bounce-text-container">
        {letters.map((item, index) => (
          <span 
            key={index}
            className="bounce-letter"
            style={{ 
              animationDelay: `${item.delay}s`,
              color: `hsl(${index * 30}, 80%, 60%)`
            }}
          >
            {item.letter}
          </span>
        ))}
      </div>
      <h3>Bouncy Text! 🤩</h3>
    </div>
  )
}
