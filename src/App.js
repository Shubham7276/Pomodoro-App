import React, { useEffect, useContext } from 'react'
import Button from './components/Button'
import CountdownAnimation from './components/CountdownAnimation'
import Login from './components/Login'
import SetPomodoro from './components/SetPomodoro'
import { SettingsContext } from './context/SettingsContext'


const App = () => {

  const user = localStorage.getItem("username")
  
  const {
    pomodoro,
    executing,
    startAnimate,
    children,
    startTimer,
    pauseTimer,
    updateExecute,
    setCurrentTimer,
    SettingsBtn } = useContext(SettingsContext)

    useEffect(() => {updateExecute(executing)}, [executing, startAnimate])

  return (
    <div className="container">
      {user?(
        <>
        <h1>Pomodoro</h1>
        <h4>Hello, {user}</h4>
        
      {pomodoro !== 0 ?
      <>
        <ul className="labels">
          <li>
            <Button 
              title="Work" 
              activeClass={executing.active === 'work' ? 'active-label' : undefined} 
              _callback={() => setCurrentTimer('work')} 
            />
          </li>
          <li>
            <Button 
              title="Short Break" 
              activeClass={executing.active === 'short' ? 'active-label' : undefined} 
              _callback={() => setCurrentTimer('short')} 
            />
          </li>
          
          
        </ul>
        <Button title="Settings" _callback={SettingsBtn} />
        <div className="timer-container">
          <div className="time-wrapper">
              <CountdownAnimation
                key={pomodoro} 
                timer={pomodoro} 
                animate={startAnimate}
              >
                {children}
              </CountdownAnimation>
          </div>
        </div>

       


        <div className="button-wrapper">
          <Button title="Start" activeClass={!startAnimate ? 'active' : undefined} _callback={startTimer} />
          <Button title="Pause" activeClass={startAnimate ? 'active' : undefined} _callback={pauseTimer} />
        </div>
      </>
       : <SetPomodoro />
      
      }
      </>) :(<Login/>)}
      
      
    </div>
  )
}

export default App
