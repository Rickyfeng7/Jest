const axios = require('axios');
// 1. Building some Test
// - Inside functions.js create a function called ‘testFunctions’ that - adds 2 numbers together in ES6 
// - create a key of add and pass 2 arguments of num1 and num2
// - This should return num1 + num2
// - Then export the functions

const testFunctions = {
    add:(num1, num2) => num1 + num2,
    isNull: () => null,
    checkValue: x => x,
    createUser: () => {
        const user = { firstName: 'UC'}
        user['lastName'] = 'Berkeley'
        return user
    },
    fetchUser: () => axios.get('https://jsonplaceholder.typicode.com/users/1')
    .then(res => res.data)
    .catch(err => 'error')
}

module.exports = testFunctions;