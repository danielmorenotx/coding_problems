/**
Given a positive integer n, find and return the longest distance between any two adjacent 1's in the binary representation of n. If there are no two adjacent 1's, return 0.

Two 1's are adjacent if there are only 0's separating them (possibly no 0's). The distance between two 1's is the absolute difference between their bit positions. For example, the two 1's in "1001" have a distance of 3.

 * @param {number} n
 * @return {number}
 */
var binaryGap = function(n) {

    // find binary of `n`
    const binary = Number(n).toString(2);

    let length = 0;
    let maxLength = 0;

    let oneCount = 0;
    let totalOnes = 0;

    for (let i = 0; i < binary.length; i++) {

        if (binary[i] === "1") {

            oneCount++;
            totalOnes++;

            if (oneCount === 1) {
                length++;
            } else if (oneCount === 2) {
                maxLength = maxLength < length ? length : maxLength;
                length = 1;
                oneCount = 1;
            }

        } else if (binary[i] === "0") {
            length++;
        }
    }

    if (totalOnes <= 1) { // there were no adjacent 1s
        return 0
    } else {
        return maxLength;
    }
    
};
