// components/ColorChange.jsx
import { useState, useEffect } from 'react'

export default function ColorChange() {
  const [background, setBackground] = useState('#f0f0f0')
  
  useEffect(() => {
    const interval = setInterval(() => {
      const randomColor = `hsl(${Math.random() * 360}, 80%, 60%)`
      setBackground(randomColor)
    }, 500)
    
    return () => clearInterval(interval)
  }, [])
  
  return (
    <div 
      className="surprise-content color-change" 
      style={{ backgroundColor: background }}
    >
      <h2>Color Party! 🌈</h2>
      <p>Enjoy the colorful experience!</p>
    </div>
  )
}
