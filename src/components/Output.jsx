const Output = ({ value }) => {
  return (
    <div>
      <input readOnly value={value} />
      <button onClick={() => navigator.clipboard.writeText(value)}>copy</button>
    </div>
  )
}

export default Output
