function organizeByGender(array) {
    const result = {
        females: [],
        males: []
    };

    array.forEach(item => {
        const [fullName, age, gender] = item.split(',').map(str => str.trim());
        const [firstName, lastName] = fullName.split(' ');

        const personInfo = { 'second-name': lastName, 'age': parseInt(age) };

        if (gender.toLowerCase() === 'female') {
            result.females.push({ [firstName]: personInfo });
        } else if (gender.toLowerCase() === 'male') {
            result.males.push({ [firstName]: personInfo });
        }
    });

    return result;
}

// Example usage:
const formattedArray = [
    "Patrick wyne, 30, male",
    "lil wyne, 32, male",
    "Joan mimi, 21, female",
    "Alice bot, 21, female",
];

const organizedData = organizeByGender(formattedArray);
console.log(organizedData);
