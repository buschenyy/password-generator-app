const Checkbox = ({ ...props }) => {
  return (
    <label>
      <input type="checkbox" {...props} />
      Include Symbols
    </label>
  )
}

export default Checkbox
