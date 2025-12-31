const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const isPrime = (number) => {
  if (number < 2) {
    return false
  }

  if (number === 2) {
    return true
  }

  if (number % 2 === 0) {
    return false
  }

  for (let i = 3; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false
    }
  }

  return true
}

const generateRound = () => {
  const number = getRandomNumber(1, 100)

  const question = String(number)
  const correctAnswer = isPrime(number) ? 'yes' : 'no'

  return [question, correctAnswer]
}

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".'

export { generateRound, description }
