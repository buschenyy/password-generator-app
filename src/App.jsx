import './App.css'

function App() {
  return (
    <div className="App">
      <h3>Password Generator</h3>
      <div>
        <input readOnly value="password" />
        <span>copy</span>
      </div>
      <input type="range" min="1" max="20" value="10" />
      <br />
      <label>
        <input type="checkbox" />
        Include Uppercase Letters
      </label>
      <br />
      <label>
        <input type="checkbox" />
        Include Lowercase Letters
      </label>
      <br />
      <label>
        <input type="checkbox" />
        Include Numbers
      </label>
      <br />
      <label>
        <input type="checkbox" />
        Include Symbols
      </label>
      <br />
      <div>Strength</div>
      <button>GENERATE</button>
    </div>
  )
}

export default App
