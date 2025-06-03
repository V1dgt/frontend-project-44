const isPrime = (number) => {
  if (number < 2) {
    return 'no'
  }
  let divider = 2
  while (divider <= number / 2) {
    if (number % divider === 0) {
      return 'no'
    }
    divider += 1
  }
  return 'yes'
}

export default () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".'
  const question = Math.floor(Math.random() * 100)
  const answer = isPrime(question)
  return { description, question, answer }
}
