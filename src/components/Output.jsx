import './Output.css'
import { RiFileCopyLine } from 'react-icons/ri'

const Output = ({ value }) => {
  return (
    <div className="output">
      <input
        className="password"
        readOnly
        placeholder="P4$5W0rD!"
        value={value}
      />
      <button
        className="copy"
        onClick={() => navigator.clipboard.writeText(value)}
      >
        <RiFileCopyLine />
      </button>
    </div>
  )
}

export default Output
