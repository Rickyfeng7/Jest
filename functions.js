const axios = require('axios');
// 1. Building some Test
// - Inside functions.js create a function called ‘functions’ that - adds 2 numbers together in ES6 
// - create a key of add and pass 2 arguments of num1 and num2
// - This should return num1 + num2
// - Then export the functions

// 2. In functions test require the functions file  
// - involk a function called ‘test’ 
// - Past test a string of ‘Adds 2 plus 2 equals 4’ 
// - Involk an empty function inside of test 
// - use the expect method from jest ( https://jestjs.io/docs/en/expect#expectvalue here is some doc from jest on expect)
// - Inside of expect use the exported functions.add
// - Inside of add pass it two arguments of 2 and 2 
// - At the end of the expect method call another method called ‘toBe’
// - Inside of `toBe` pass it the argument of 4

const functions = {
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

module.exports = functions;