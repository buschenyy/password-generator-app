import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import Checkbox from './components/Checkbox'
import LengthRange from './components/LengthRange'
import Output from './components/Output'
import StrengthRate from './components/StrengthRate'
import generatePswrd from './utils/password-gen'
import assessPswrdStrength from './utils/password-strength-check'

const intialFormState = {
  range: 10,
  uppercase: true,
  lowercase: true,
  numbers: true,
  symbols: true,
}

function App() {
  const [password, setPassword] = useState('')
  const [formState, setFormState] = useState(intialFormState)
  const [passwordStrength, setPasswordStrength] = useState('')

  useEffect(() => {
    if (!password) return
    setPasswordStrength(assessPswrdStrength(password))
  }, [password])

  const inputHandler = (e) => {
    const { name, value, checked, type } = e.target
    const actualFormState = {
      ...formState,
      [name]: type === 'range' ? value : checked,
    }

    setFormState(actualFormState)
  }

  const submitHandler = (event) => {
    event.preventDefault()
    const { range, ...options } = formState
    const arrOptions = Object.keys(options).filter((key) => formState[key])
    setPassword(generatePswrd(range, arrOptions))
  }

  return (
    <div className="App">
      <h1 className="title">Password Generator</h1>
      <Output value={password} />
      <form className="panel" onSubmit={submitHandler}>
        <LengthRange
          name="range"
          onChange={inputHandler}
          value={formState['range']}
        />
        <div className="checkBoxes">
          {Object.keys(formState).map(
            (key) =>
              key !== 'range' && (
                <Checkbox
                  key={key}
                  name={key}
                  onChange={inputHandler}
                  checked={formState[key]}
                  label={key}
                />
              )
          )}
        </div>
        <StrengthRate strength={passwordStrength} />
        <button className="submit" type="submit">
          GENERATE
        </button>
      </form>
    </div>
  )
}

export default App
