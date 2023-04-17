const LengthRange = () => {
  return (
    <div>
      <h4>Character Length</h4>
      <input type="range" min="1" max="20" value="10" />
      {'value'}
    </div>
  )
}

export default LengthRange
