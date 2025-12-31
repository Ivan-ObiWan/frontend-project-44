const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const calculateGCD = (a, b) => {
  if (b === 0) {
    return Math.abs(a);
  }
  return calculateGCD(b, a % b);
};

const generateRound = () => {
  const num1 = getRandomNumber(1, 50);
  const num2 = getRandomNumber(1, 50);

  const question = `${num1} ${num2}`;
  const correctAnswer = calculateGCD(num1, num2).toString();

  return [question, correctAnswer];
};

const description = 'Find the greatest common divisor of given numbers.';

export { generateRound, description };
