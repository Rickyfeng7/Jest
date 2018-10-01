// import the file
const reverseString = require('./reverseString')
// test if the function is working
// use toBeDefined to see if it is defined
test('reverseString function exists', () => {
    expect(reverseString).toBeDefined()
})
// next test is to see if the function is reversing a string of hello
test('string reverese', () => {
    expect(reverseString('hello')).toEqual('olleh')
});

// change the H in hello to be uppercase and see if the test fails
test('string reverese with uppercase', () => {
    expect(reverseString('Hello')).toEqual('olleH')
});

