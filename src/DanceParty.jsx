// components/DanceParty.jsx
import { useState, useEffect } from 'react'

export default function DanceParty() {
  const [dancers, setDancers] = useState([])
  
  useEffect(() => {
    const dancerEmojis = ['🕺', '💃', '🐒', '🐱', '🦁', '🐶', '🦊', '🐻']
    const newDancers = []
    
    for (let i = 0; i < 10; i++) {
      newDancers.push({
        id: i,
        emoji: dancerEmojis[Math.floor(Math.random() * dancerEmojis.length)],
        x: 10 + (i * 8),
        size: Math.random() + 1.5,
        speed: Math.random() * 0.5 + 0.5
      })
    }
    
    setDancers(newDancers)
    
    return () => setDancers([])
  }, [])
  
  return (
    <div className="surprise-content">
      <h2>Dance Party! 🪩</h2>
      <div className="dance-floor">
        <div className="disco-ball">💫</div>
        <div className="dancers-container">
          {dancers.map(dancer => (
            <div 
              key={dancer.id}
              className="dancer"
              style={{
                left: `${dancer.x}%`,
                fontSize: `${dancer.size}rem`,
                animationDuration: `${dancer.speed}s`
              }}
            >
              {dancer.emoji}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
