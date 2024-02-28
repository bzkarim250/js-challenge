const isPrime = (number) => {
    let flag = 0;
    for (let i = 1; i <= number/2; i++) {
        if (number % i == 0) {
            flag++;
        }
        if (flag > 2) {
            return false;
        }
    }
    return true;
}

const cunstomSort = (array) => {
    const filteredArray = [];
    for (let i = 0; i <= array.length; i++) {
        if (!isPrime(array[i])) {
            filteredArray.push(array[i]);
        }
    }
    for (let i = 0; i < filteredArray.length; i++) {
        for (let j = i + 1; j < filteredArray.length; j++) {
            if (filteredArray[i] < filteredArray[j]) {
                let temp = filteredArray[i];
                filteredArray[i] = filteredArray[j];
                filteredArray[j] = temp;
            }
        }
    }
    return filteredArray;
}

const arr = [5, 7, 2, 10, 8, 3, 4, 6];
console.log(`Array before custom sorting ${arr}`)
console.log(`Array after custom sort ${cunstomSort(arr)}`);