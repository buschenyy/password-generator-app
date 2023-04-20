import './Checkbox.css'

const Checkbox = ({ label, ...props }) => {
  const isLetterParameter = ['lowercase', 'uppercase'].includes(label)
  return (
    <label className="checkboxLabel">
      <input className="checkbox" type="checkbox" {...props} />
      {`Include ${label} ${isLetterParameter ? 'letters' : ''}`}
    </label>
  )
}

export default Checkbox