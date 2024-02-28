const numbers=[1,2,3,4,5,6];
let reversedNumbers=[];

const reverse=(array)=>{
    for(let i=numbers.length-1;i>=0;i--){
        reversedNumbers.push(numbers[i])
    }
    return reversedNumbers;
}
console.log(`Array to reverse: ${numbers}`)
console.log(`Reversed Array: ${reverse(numbers)}`)