const SPECIAL_CHARS = ['!', '@', '#', '$', '%', '^', '&', '*']
const L_CASE_LETTERS = { min: 97, max: 122 }
const UP_CASE_LETTERS = { min: 65, max: 90 }

const PSWRD_OPTIONS = ['uppercase', 'lowercase', 'numbers', 'symbols']

export default function generatePswrd(length, options = [...PSWRD_OPTIONS]) {
  const pswrdLength = []
  for (let i = 0; i < length; i++) {
    pswrdLength.push(0)
  }
  const activePswrdOptions = [...options]
  console.log(activePswrdOptions)

  const password = pswrdLength
    .map((_, i) => (pswrdLength[i] = randSymbol()))
    .join('')

  function rand(options) {
    let max,
      min = 0
    typeof options === 'object'
      ? ((min = options.min), (max = options.max))
      : (max = options)

    return Math.floor(Math.random() * (max - min) + min)
  }

  function randSymbol() {
    const symbolOption = activePswrdOptions[rand(activePswrdOptions.length)]

    switch (symbolOption) {
      case 'numbers':
        return rand(10)
      case 'lowercase':
        return String.fromCharCode(rand(L_CASE_LETTERS))
      case 'uppercase':
        return String.fromCharCode(rand(UP_CASE_LETTERS))
      case 'symbols':
        return SPECIAL_CHARS[rand(SPECIAL_CHARS.length)]
    }
  }

  return password
}
