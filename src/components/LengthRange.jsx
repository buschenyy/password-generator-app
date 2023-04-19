import './LengthRange.css'

const LengthRange = ({ value, ...props }) => {
  return (
    <div>
      <div className="lengthTitleContainer">
        <h4 className="titleRange">Character Length</h4>
        <span className="lengthCount">{value}</span>
      </div>
      <input
        className="lengthRange"
        type="range"
        min="1"
        max="20"
        value={value}
        {...props}
      />
    </div>
  )
}

export default LengthRange
