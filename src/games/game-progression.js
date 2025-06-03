const nextElement = (start, index, step) => {
  const currentElement = start + index * step
  return currentElement
}

export default () => {
  const description = 'What number is missing in the progression?'
  const randomLength = Math.floor(Math.random() * (11 - 5)) + 5
  const removeNumber = Math.floor(Math.random() * (randomLength))
  const randomNumber = Math.floor(Math.random() * 100)
  const randomStep = Math.floor(Math.random() * (6 - 1) + 1)
  const result = []
  for (let i = 1; randomLength > result.length; i += 1) {
    result.push(nextElement(randomNumber, i, randomStep))
  }
  const answer = result[removeNumber]
  result[removeNumber] = '..'
  const question = result.join(' ')
  return { description, question, answer: `${answer}` }
}
