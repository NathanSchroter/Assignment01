import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Taylor from '/taylor.jpg'
import './App.css'

function App() {
  const [isOpenTaylorSwift, setIsOpenTaylorSwift] = useState(false);
  const [isOpenRed, setIsOpenRed] = useState(false);
  const [isOpenMidnights, setIsOpenMidnights] = useState(false);

  return (
    <>
      <h1>MyTunes</h1>
      <div className="mainContainer">
        <img src={Taylor} height={450} alt="Taylor Swift"/>
        <div>
          <h2>Taylor Swifts Albums</h2>
          <details onClick={() => setIsOpenTaylorSwift(!isOpenTaylorSwift)}>
            <summary>Taylor Swift <span>{isOpenTaylorSwift ? "-" : "+"}</span></summary>
            <ol>
              <li>Red</li>
              <li>Fearless</li>
              <li>1989</li>
              <li>Speak Now</li>
              <li>Midnights</li>
            </ol>
          </details>
          <details onClick={() => setIsOpenRed(!isOpenRed)}>
            <summary>Red<span>{isOpenRed ? "-" : "+"}</span></summary>
            <ol>
              <li>State of Grace</li>
              <li>Red</li>
              <li>Treacherous</li>
              <li>I Knew You Were Trouble</li>
              <li>22</li>
            </ol>
          </details>
          <details onClick={() => setIsOpenMidnights(!isOpenMidnights)}  >
            <summary>Midnights<span>{isOpenMidnights ? "-" : "+"}</span></summary>
            <ol>
              <li>anti hero</li>
              <li>lavender haze</li>
              <li>snow on the beach</li>
              <li>Your on your own,kid</li>
              <li>MidnightRain</li>
            </ol>
          </details>
        </div>
      </div>
      
    </>
  )
}

export default App
