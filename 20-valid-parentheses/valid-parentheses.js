/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    let map = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    
    for (let ch of s) {
        // If it's a closing bracket
        if (map[ch]) {
            let top = stack.pop();
            if (top !== map[ch]) {
                return false;
            }
        } else {
            // it's an opening bracket
            stack.push(ch);
        }
    }
    
    // stack must be empty at the end
    return stack.length === 0;
};