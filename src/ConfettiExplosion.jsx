// components/ConfettiExplosion.jsx
import { useState, useEffect } from 'react'

export default function ConfettiExplosion() {
  const [confetti, setConfetti] = useState([])
  
  useEffect(() => {
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff']
    const newConfetti = []
    
    for (let i = 0; i < 100; i++) {
      newConfetti.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 8 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        angle: Math.random() * 360,
        speed: Math.random() * 3 + 1
      })
    }
    
    setConfetti(newConfetti)
    
    return () => setConfetti([])
  }, [])
  
  return (
    <div className="surprise-content">
      <h2>Confetti Explosion! 🎉</h2>
      <div className="confetti-container">
        {confetti.map(piece => (
          <div 
            key={piece.id}
            className="confetti-piece"
            style={{
              left: `${piece.x}%`,
              top: `${piece.y}%`,
              width: `${piece.size}px`,
              height: `${piece.size * 3}px`,
              backgroundColor: piece.color,
              transform: `rotate(${piece.angle}deg)`,
              animation: `fall ${piece.speed}s linear forwards`
            }}
          />
        ))}
      </div>
    </div>
  )
}