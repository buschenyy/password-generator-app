const STRENGTH_VALUES = ['TOO WEAK', 'WEAK', 'MEDIUM', 'STRONG']
const StrengthRate = ({ strength }) => {
  return (
    <div>
      Strength {strength}{' '}
      <div>
        {strength &&
          STRENGTH_VALUES.slice(0, STRENGTH_VALUES.indexOf(strength) + 1).fill(
            '|'
          )}
      </div>
    </div>
  )
}

export default StrengthRate
