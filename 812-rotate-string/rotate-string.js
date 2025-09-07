/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */

var rotateString = function(s, goal) {
    if (s.length !== goal.length) return false; // must be same length

    function rotate(str) {
        let chars = str.split("");
        let first = chars.shift(); // remove first
        chars.push(first);         // add it at the end
        return chars.join("");
    }

    let rotated = s;
    for (let i = 0; i < s.length; i++) {
        if (rotated === goal) return true;
        rotated = rotate(rotated);
    }
    return false;
};

console.log(rotateString("abcde", "cdeab")); // true
console.log(rotateString("abcde", "abced")); // false