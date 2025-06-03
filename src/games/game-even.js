const isEven = (num) => num % 2 === 0 ? 'yes' : 'no'

export default () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".'
  const question = Math.floor(Math.random() * 100)
  const answer = isEven(question)
  return { description, question, answer }
}
