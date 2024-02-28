let numbers = [1, 4, 6, 3,7, 8, 3,5, 6];

const displayPrimeNumbers = (array) => {
    let primeNumbers = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] <= 1) {
            continue;
        } else {
            let flag = 0;
            for (let j = 2; j <= array[i] / 2; j++) {
                if (array[i] % j === 0) {
                    flag++;
                    break;
                }
            }
            if (flag === 0) {
                primeNumbers.push(array[i]);
            }
        }
    }
    return primeNumbers;
};

console.log(`prime numbers ${displayPrimeNumbers(numbers)} from ${numbers}`);
