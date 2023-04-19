const LengthRange = ({ value, ...props }) => {
  return (
    <div>
      <h4>Character Length</h4>
      <input type="range" min="1" max="20" value={value} {...props} />
      {value}
    </div>
  )
}

export default LengthRange
