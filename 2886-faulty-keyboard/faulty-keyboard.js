/**
 * @param {string} s
 * @return {string}
 */
var finalString = function(s) {
    let forward = "";
    let reversed = "";
    const faultyChar = 'i';

    for (let char of s) {
        if (char === faultyChar) {
            const temp = forward;
            forward = reversed;
            reversed = temp;
        } else {
            reversed = char + reversed;
            forward += char;
        }
    }
    return forward;
};

// let string = finalString("string");
// console.log(string); // "rtsing"