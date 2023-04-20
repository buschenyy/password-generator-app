import './StrengthRate.css'

export const StrengthRate = ({ strength }) => {
  const strengthAsClassName = strength.toLowerCase().replace(/ /g, '')
  return (
    <div className="strengthContainer">
      <span className="strengthTitle">Strength</span>
      <div className="strengthValue">
        <span>{strength}</span>
        <div className={`strengthIndicators ${strengthAsClassName}`}>
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  )
}
