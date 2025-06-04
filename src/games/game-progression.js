import runGame from '../index.js'

const nextElement = (start, index, step) => {
  const currentElement = start + index * step
  return currentElement
}
const generateProgression = (length, arr, number, step) => {
  for (let i = 1; length > arr.length; i += 1) {
    arr.push(nextElement(number, i, step))
  }
  return arr
}

const generateRound = () => {
  const randomLength = Math.floor(Math.random() * (11 - 5)) + 5
  const removeNumber = Math.floor(Math.random() * (randomLength))
  const randomNumber = Math.floor(Math.random() * 100)
  const randomStep = Math.floor(Math.random() * (6 - 1) + 1)
  const array = []
  const progression = generateProgression(randomLength, array, randomNumber, randomStep)
  const answer = progression[removeNumber]
  progression[removeNumber] = '..'
  const question = progression.join(' ')
  return { question, answer: `${answer}` }
}

export default () => {
  const description = 'What number is missing in the progression?'
  runGame(description, generateRound)
}
