import { useState } from 'react'
import './App.css'
import ConfettiExplosion from './ConfettiExplosion'
import ColorChange from './ColorChange'
import BounceText from './BounceText'
import FloatingEmojis from './FloatingEmojis'
import DanceParty from './DanceParty'

function App() {
  const [surprise, setSurprise] = useState(null)
  
  const surprises = [
    { id: 'confetti', component: <ConfettiExplosion /> },
    { id: 'colorChange', component: <ColorChange /> },
    { id: 'bounceText', component: <BounceText /> },
    { id: 'floatingEmojis', component: <FloatingEmojis /> },
    { id: 'danceParty', component: <DanceParty /> }
  ]
  
  const handleSurpriseClick = () => {
    // Reset first if there's already a surprise
    setSurprise(null)
    
    // Wait a tiny bit to ensure reset happens
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * surprises.length)
      setSurprise(surprises[randomIndex])
    }, 10)
  }
  
  return (
    <div className="container">
    <div className="app-container">
      <h1>Surprise Me!</h1>
      
      
      <button 
        className="surprise-button"
        onClick={handleSurpriseClick}
      >
        Surprise Me!
      </button>
      
      <div className="surprise-container">
        {surprise && surprise.component}
      </div>
    </div>
    </div>
  )
}

export default App;
