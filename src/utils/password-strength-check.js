// An object containing regular expressions for each character test
const REGEX_CHAR_TESTS = {
  upperCase: /[A-Z]/,
  lowerCase: /[a-z]/,
  numbers: /\d/,
  symbols: /[\!\@\#\$\%\^\&\*]/,
}

// An object containing password strength templates
// STRENGTH:[uppercase, lowercase, numbers, symbols, min length]
const PSWRD_STRENGTH = [
  {
    name: 'STRONG',
    patterns: [
      [true, true, true, false, 18],
      [true, true, false, true, 18],
      [false, true, true, true, 18],
      [true, false, true, true, 18],
      [true, true, true, true, 14],
    ],
  },
  {
    name: 'MEDIUM',
    patterns: [
      [true, true, true, true, 8],
      [true, true, true, false, 10],
      [true, true, false, false, 12],
      [true, false, false, true, 10],
      [true, false, true, false, 10],
      [true, true, false, true, 10],
    ],
  },
  {
    name: 'WEAK',
    patterns: [
      [true, false, false, false, 8],
      [true, false, false, false, 6],
      [true, false, false, true, 6],
      [false, true, true, true, 6],
      [true, false, true, true, 6],
      [true, true, false, true, 6],
      [true, true, true, false, 6],
      [true, true, true, true, 6],
    ],
  },
]

// A function that assesses the strength of a given password
export default function assessPswrdStrength(pswrd) {
  // An array containing the results of each regex test and the password length
  const regexTestResults = Object.values(REGEX_CHAR_TESTS).map((regex) =>
    regex.test(pswrd)
  )
  const pswrdFeatures = [...regexTestResults, pswrd.length]
  // Get the assessment result by comparing the password with each strength template
  const assessmentResult = checkPswrdPattern()

  // A function that checks if the password matches a strength template
  function checkPswrdPattern() {
    for (const patternGroup of PSWRD_STRENGTH) {
      const pattern = patternGroup.patterns.find((arr) =>
        pswrdFeatures.every((feature, i) => checkEveryResult(feature, arr, i))
      )
      if (pattern) {
        return patternGroup.name
      }
    }
    return null
  }

  // A function that checks if a feature matches the template
  function checkEveryResult(feature, template, i) {
    return typeof feature === 'boolean'
      ? feature === template[i]
      : feature >= template[i]
  }

  return assessmentResult ? assessmentResult : 'TOO WEAK'
}
