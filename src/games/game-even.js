import runGame from '../index.js'

const isEven = num => num % 2 === 0 ? 'yes' : 'no'

const generateRound = () => {
  const question = Math.floor(Math.random() * 100)
  const answer = isEven(question)
  return { question, answer }
}

export default () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".'
  runGame(description, generateRound)
}
