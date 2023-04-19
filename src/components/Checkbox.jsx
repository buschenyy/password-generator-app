import './Checkbox.css'

const Checkbox = ({ label, ...props }) => {
  const isLetterParameter = ['lowercase', 'uppercase'].includes(label)
  return (
    <label style={{ textTransform: 'capitalize' }}>
      <input className="checkbox" type="checkbox" {...props} />
      {`Include ${label} ${isLetterParameter ? 'letters' : ''}`}
    </label>
  )
}

export default Checkbox
