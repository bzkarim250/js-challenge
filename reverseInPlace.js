function reverseArrayInPlace(array) {
    let start = 0;
    let end = array.length - 1;

    while (start < end) {
        let temp = array[start];
        array[start] = array[end];
        array[end] = temp;
        start++;
        end--;
    }
}

const numbers = [1, 2, 3, 4, 5];
console.log(`Array before reverse ${numbers}`)
reverseArrayInPlace(numbers);
console.log(`Reversed numbers: ${numbers}`)
