/**
https://leetcode.com/problems/score-of-a-string/description/

You are given a string s. The score of a string is defined as the sum of the absolute difference between the ASCII values of adjacent characters.

Return the score of s.
 */
var scoreOfString = function(s) {
    // split the string into an array
    let stringArray = s.split("");
    // .charCodeAt()

    // find the ascii values
    // 1. manually map out a: 97 to z: 122
    // create an alphabet array
    const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");

    // iterate through it to populate an object with values starting at 97
    const asciiValueOfA = 97;
    let asciiValues = {};
    for (let i = 0; i < alphabetArray.length; i++) {
        let letter = alphabetArray[i];
        asciiValues[letter] = i + asciiValueOfA;
    }

    // for loop look at 2 characters at a time
    // find the ascii values of those two characters
    // subtract them
    // next loop would move up one character and repeat
    // end when the second character is the last one

    let result = 0;
    for (let j = 0; j <= s.length - 2; j++) {
        let firstLetter = s[j];
        let secondLetter = s[j + 1];

        result += Math.abs(asciiValues[firstLetter] - asciiValues[secondLetter]);
    }

    return result;
};
