import './StrengthRate.css'

const STRENGTH_VALUES = ['TOO WEAK', 'WEAK', 'MEDIUM', 'STRONG']
const StrengthRate = ({ strength }) => {
  return (
    <div className="strengthContainer">
      <span className="strengthTitle">Strength</span>
      <div className="strengthValue">
        <span>{strength}</span>
        {strength &&
          STRENGTH_VALUES.slice(0, STRENGTH_VALUES.indexOf(strength) + 1).fill(
            '|'
          )}
      </div>
    </div>
  )
}

export default StrengthRate
