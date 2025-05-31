export default () => {
  const randomNumber = Math.floor(Math.random() * 100);
  const randomNumberTwo = Math.floor(Math.random() * 10);
  let a = randomNumber;
  let b = randomNumberTwo;

  while (b !== 0) {
    const temp = a;
    a = b;
    b = temp % b;
  }
  return { question: `${randomNumber} ${randomNumberTwo}`, answer: `${a}` };
};
