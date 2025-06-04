import runGame from '../index.js'

const calculate = (num, operator, num2) => {
  switch (operator) {
    case '+': return num + num2
    case '-': return num - num2
    case '*': return num * num2
    default: throw new Error('Неизвестный оператор')
  }
}

const createRandomNumber = () => {
  return Math.floor(Math.random() * 100)
}

const generateRound = () => {
  const operators = ['+', '-', '*']
  const randomOperator = operators[Math.floor(Math.random() * operators.length)]
  const firstNumber = createRandomNumber()
  const twoNumber = createRandomNumber()
  return { question: `${firstNumber} ${randomOperator} ${twoNumber}`, answer: `${calculate(firstNumber, randomOperator, twoNumber)}` }
}

export default () => {
  const description = 'What is the result of the expression?'
  runGame(description, generateRound)
}
