import './App.css'
import Checkbox from './components/Checkbox'
import LengthRange from './components/LengthRange'
import Output from './components/Output'
import StrengthRate from './components/StrengthRate'

function App() {
  return (
    <div className="App">
      <h3>Password Generator</h3>
      <Output />
      <br />
      <LengthRange />
      <br />
      <Checkbox />
      <br />
      <Checkbox />
      <br />
      <Checkbox />
      <br />
      <Checkbox />
      <br />
      <StrengthRate />
      <button>GENERATE</button>
    </div>
  )
}

export default App
