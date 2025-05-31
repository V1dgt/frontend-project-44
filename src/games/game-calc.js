export default () => {
  const randomNumber = Math.floor(Math.random() * 100);
  const randomNumberTwo = Math.floor(Math.random() * 10);
  const operators = ['+', '-', '*'];
  const randomOperator = operators[Math.floor(Math.random() * operators.length)];
  const calculate = (num, operator, num2) => {
    switch (operator) {
      case '+': return num + num2;
      case '-': return num - num2;
      case '*': return num * num2;
      default: throw new Error('Неизвестный оператор');
    }
  };
  return { question: `${randomNumber} ${randomOperator} ${randomNumberTwo}`, answer: `${calculate(randomNumber, randomOperator, randomNumberTwo)}` };
};
