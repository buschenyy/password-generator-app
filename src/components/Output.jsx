const Output = () => {
  return (
    <div>
      <input readOnly value="password" />
      <input type="range" min="1" max="20" value="10" />
      {'value'}
    </div>
  )
}

export default Output
