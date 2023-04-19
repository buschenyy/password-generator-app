const Output = ({ value }) => {
  return (
    <div>
      <input readOnly placeholder="P4$5W0rD!" value={value} />
      <button onClick={() => navigator.clipboard.writeText(value)}>copy</button>
    </div>
  )
}

export default Output
