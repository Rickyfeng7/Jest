const functions = require('./functions');
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false
test('Adds 2 + 2 to equal 4', () => {
    // pass add 2 paramaters
    expect(functions.add(2, 2)).toBe(4);
});
// toBe Null
test('should be null', () => {
    expect(functions.isNull()).toBeNull()
})
// to be falsy
test('should be falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy()
})
// toBe will throw an error because of memory storage
// use toEqual

test('User should be UC Berkeley Object', () => {
    expect(functions.createUser()).toEqual({ 
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

// test('should be under 1600', () => {
//     const load1 = 800;
//     const load2 = 800;
//     expect(load1 + load2).toBeLessThan(1600);
// });

// Regex Check 
// Use toMatch
test('There is no I in Team', () => {
    // This only checks for a captial I, so the i after the I it'll check for both I and i 
    expect('team').not.toMatch(/I/i);
})

// Arrays
// use toContain
test('Admin should be in usernames', () => {
    usernames = ['john', 'karen', 'admin'];
    expect(usernames).toContain('admin')
})