const readline = require('readline');

function randomNumberGenerator(callback) {
  const numbers = [];
  const minValue = 0;
  const maxValue = 9;

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Enter the count of random numbers to generate: ', function(input) {
    const count = parseInt(input, 10);

    for (let i = 0; i < count; i++) {
      const randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
      numbers.push(randomNumber);
    }

    rl.close();
    callback(numbers);
  });
}

// Finding the n-th most frequent number in an array of numbers
function findNthMostFrequentNumber(numbers, n) {
  const frequencyMap = new Map();

  // Count the frequency of each number
  for (const number of numbers) {
    frequencyMap.set(number, (frequencyMap.get(number) || 0) + 1);
  }

  // Sort the numbers based on their frequencies in descending order
  const sortedNumbers = Array.from(frequencyMap.keys()).sort((a, b) => frequencyMap.get(b) - frequencyMap.get(a));

  // Find the n-th most frequent number
  const nthMostFrequentNumber = sortedNumbers[n - 1];

  return nthMostFrequentNumber;
}

randomNumberGenerator(function(numbers) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Enter the value of n to find the n-th most frequent number: ', function(input) {
    const n = parseInt(input, 10);

    const nthMostFrequentNumber = findNthMostFrequentNumber(numbers, n);
    console.log(`The ${n}-th most frequent number is: ${nthMostFrequentNumber}`);

    rl.close();
  });
});
