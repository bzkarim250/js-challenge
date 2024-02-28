function checkPalindrome(string) {
    const size = string.length;
    for (let i = 0; i < Math.floor(size / 2); i++) {
        if (string[i] !== string[size - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}

const string = prompt('Enter a string: ');

const value = checkPalindrome(string);
alert(value);
