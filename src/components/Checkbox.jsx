const Checkbox = ({ label, ...props }) => {
  const isLetterParameter = ['lowercase', 'uppercase'].includes(label)
  return (
    <label style={{ textTransform: 'capitalize' }}>
      <input type="checkbox" {...props} />
      {`Include ${label} ${isLetterParameter ? 'letters' : ''}`}
    </label>
  )
}

export default Checkbox
