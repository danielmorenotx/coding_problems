/**
Given an integer x, return true if x is a 
palindrome, and false otherwise.

 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let string = x.toString();
    let length = string.length;

    if (length === 1) {
        return true;
    }

    let mid = length / 2; 
    let i = 0;
    let j = 0;

    if (Number.isInteger(mid)) { // even number of characters
        i = mid - 1; // 1
        j = mid; // 2
    } else { // odd number of characters
        i = Math.floor(mid) - 1;
        j = Math.ceil(mid);
    }

    while (i >= 0) {
        if (string[i] === string[j]) {
            i--;
            j++;
        } else {
            return false;
        }
    }

    return true;

};
