import React, { useContext, useState } from 'react'
import { SettingsContext } from '../context/SettingsContext'

const SetPomodoro = () => {

    const [newTimer, setNewTimer] = useState({
        work: 25,
        short: 5,
        active: 'work'
    })

    const {updateExecute} = useContext(SettingsContext)

    const handleChange = input => {
        const {name, value} = input.target
        switch (name) {
            case 'work':
                setNewTimer({
                    ...newTimer,
                    work: (value)
                })
                break;
            case 'shortBreak':
                setNewTimer({
                    ...newTimer,
                    short: (value)
                })
                break;
            
        }
    }
    const handleSubmit = e => {
        e.preventDefault()
        updateExecute(newTimer)
    }
    return (
        <div className="form-container">
            <form noValidate onSubmit={handleSubmit}>
                <div className="input-wrapper">
                    <label>Work </label>
                    <input className="input" type="text" name="work" onChange={handleChange} value={newTimer.work} />
                    <label>Short Break   </label>
                    <input className="input" type="text" name="shortBreak" onChange={handleChange} value={newTimer.short} />    
                </div>
                <button type='submit'>Set Timer</button>
            </form>
        </div>
    )
}

export default SetPomodoro
