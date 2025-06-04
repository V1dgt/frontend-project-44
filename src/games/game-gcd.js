import runGame from '../index.js'

const computeGcd = (a, b) => {
  while (b !== 0) {
    const temp = a
    a = b
    b = temp % b
  }
  return a
}

const generateRound = () => {
  const randomNumber = Math.floor(Math.random() * 100)
  const randomNumberTwo = Math.floor(Math.random() * 10)
  let a = randomNumber
  let b = randomNumberTwo
  const answer = computeGcd(a, b)
  return {question: `${randomNumber} ${randomNumberTwo}`, answer: `${answer}`}
}

export default () => {
  const description = 'Find the greatest common divisor of given numbers.'
  runGame(description, generateRound)
}
