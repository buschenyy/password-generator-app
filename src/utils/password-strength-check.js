// An object containing regular expressions for each character test
const REGEX_CHAR_TESTS = {
  lowerCase: /[a-z]/,
  upperCase: /[A-Z]/,
  numbers: /\d/,
  symbols: /[\!\@\#\$\%\^\&\*]/,
}

// An object containing password strength templates
// STRENGTH:[lowercase, uppercase, numbers, symbols, min length]
const PSWRD_STRENGTH = {
  DIFF: [true, true, true, true, 16],
  MEDIUM: [
    [true, true, true, true, 12],
    [true, true, true, true, 8],
  ],
  WEAK: [
    [true, false, false, false, 8],
    [true, false, true, false, 8],
    [true, false, true, true, 8],
    [true, true, true, true, 8],
  ],
}

// A function that assesses the strength of a given password
export function assessPswrdStrength(pswrd) {
  // An array containing the results of each regex test and the password length
  const regexTestResults = Object.values(REGEX_CHAR_TESTS).map((regex) =>
    regex.test(pswrd)
  )
  const pswrdFeatures = [...regexTestResults, pswrd.length]
  // Get the assessment result by comparing the password with each strength template
  const assessmentResult = checkPswrdPattern()

  // A function that checks if the password matches a strength template
  function checkPswrdPattern() {
    return Object.keys(PSWRD_STRENGTH).find((strengthClass) =>
      comparePswrdWithPattern(strengthClass)
    )
  }

  // A function that compares password features with a strength template
  function comparePswrdWithPattern(strength) {
    const hasNestedArr = PSWRD_STRENGTH[strength].some((e) => Array.isArray(e))
    return pswrdFeatures.every((feature, i) => {
      if (!hasNestedArr)
        return checkEveryResult(feature, PSWRD_STRENGTH[strength], i)
      if (hasNestedArr)
        return PSWRD_STRENGTH[strength].some((arr) =>
          checkEveryResult(feature, arr, i)
        )
    })
  }

  // A function that checks if a feature matches the template
  function checkEveryResult(feature, template, i) {
    return typeof feature === 'boolean'
      ? feature === template[i]
      : feature >= template[i]
  }

  return assessmentResult ? assessmentResult : 'TOO WEAK'
}
