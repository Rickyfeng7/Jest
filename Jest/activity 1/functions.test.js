// part 1

// 2. In functions test require the testFunctions file  
// - involk a function called ‘test’ 
// - Past test a string of ‘Adds 2 plus 2 equals 4’ 
// - Involk an empty function inside of test 
// - use the expect method from jest ( https://jestjs.io/docs/en/expect#expectvalue here is some doc from jest on expect)
// - Inside of expect use the exported testFunctions.add
// - Inside of add pass it two arguments of 2 and 2 
// - At the end of the expect method call another method called ‘toBe’
// - Inside of `toBe` pass it the argument of 4

const testFunctions = require('./functions');
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false
test('Adds 3 + 3 to equal 6', () => {
    // pass add 3 paramaters
    expect(testFunctions.add(3, 3)).toBe(6);
});
// toBe Null
test('should be null', () => {
    expect(testFunctions.isNull()).toBeNull()
})
// to be falsy
test('should be falsy', () => {
    expect(testFunctions.checkValue(null)).toBeFalsy()
})
// toBe will throw an error because of memory storage
// use toEqual

test('User should be UC Berkeley Object', () => {
    expect(testFunctions.createUser()).toEqual({ 
        firstName :'UC', 
        lastName: 'Berkeley'
    });
});
// Less than and Greater than
// Use toBeLessThan
test('should be under 1600', () => {
    const load1 = 800;
    const load2 = 700;
    expect(load1 + load2).toBeLessThan(1600);
});
// if it is equal it will fail too 

test('should be under 1600', () => {
    const load1 = 800;
    const load2 = 800;
    expect(load1 + load2).toBeLessThan(1600);
});

// Regex Check 
// Use toMatch
test('There is no I in Team', () => {
    // This only checks for a captial I, so the i after the I it'll check for both I and i 
    expect('team').not.toMatch(/I/i);
})

// Arrays
// use toContain
test('Admin should be in usernames', () => {
    usernames = ['Chicken', 'Bacon', 'admin'];
    expect(usernames).toContain('admin')
})

// Part 2

//working with async data we need to use assertion and pass it the number 
// when working with async data we need to use expect.assertion() and a return or else any data coming back will pass 
test('user fetched name should be Leanne Graham', () => {
    expect.assertions(1);
    return testFunctions.fetchUser().then(data => {
        expect(data.name).toEqual('Leanne Graham');
    });
});


// async Await
test('user fetched name should be Leanne Graham',async () => {
    expect.assertions(1);
    const data = await testFunctions.fetchUser()
    expect(data.name).toEqual('Leanne Graham');

});