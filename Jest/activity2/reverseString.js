// Lets test for reversing a 
// Hint - to test you may need to split and join 

reverseString = str => {
// str 
    // .toLowerCase('')
    // .split('')
    // .reverse('')
    // .join('');

    let revString = '';
    for(let i = str.length - 1; i >= 0; i--) {
        revString = revString + str[i];
    }
    return revString;
}
module.exports = reverseString;
// try to test without using built in methods 
// *