// components/FloatingEmojis.jsx
import { useState, useEffect } from 'react'

export default function FloatingEmojis() {
  const [emojis, setEmojis] = useState([])
  
  useEffect(() => {
    const emojiList = ['😀', '🎉', '✨', '🎈', '🎊', '🎁', '🌟', '❤️', '👍', '🔥']
    const newEmojis = []
    
    for (let i = 0; i < 30; i++) {
      newEmojis.push({
        id: i,
        emoji: emojiList[Math.floor(Math.random() * emojiList.length)],
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        speed: Math.random() * 10 + 5,
        delay: Math.random() * 2
      })
    }
    
    setEmojis(newEmojis)
    
    return () => setEmojis([])
  }, [])
  
  return (
    <div className="surprise-content">
      <h2>Emoji Party! 🥳</h2>
      <div className="floating-emojis-container">
        {emojis.map(item => (
          <div 
            key={item.id}
            className="floating-emoji"
            style={{
              left: `${item.x}%`,
              top: `${item.y}%`,
              fontSize: `${item.size}rem`,
              animationDuration: `${item.speed}s`,
              animationDelay: `${item.delay}s`
            }}
          >
            {item.emoji}
          </div>
        ))}
      </div>
    </div>
  )
}
