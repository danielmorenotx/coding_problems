/**
https://leetcode.com/problems/score-of-a-string/description/

You are given a string s. The score of a string is defined as the sum of the absolute difference between the ASCII values of adjacent characters.

Return the score of s.
 */
var scoreOfString = function(s) {

    let result = 0;

    for (let i = 0; i <= s.length - 2; i++) {
        let firstLetterAscii = s[i].charCodeAt();
        let secondLetterAscii = s[i + 1].charCodeAt();

        result += Math.abs(firstLetterAscii - secondLetterAscii);
    }

    return result;
};
