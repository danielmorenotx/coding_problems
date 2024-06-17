/* Given a 0-indexed integer array nums of length n and an integer target, return the number of pairs (i, j) where 0 <= i < j < n and nums[i] + nums[j] < target. */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function(nums, target) {
    let count = 0; // Initialize the counter
    let n = nums.length; // Get the length of the array

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) { // iterates over every element after i to compare with i
            if (nums[i] + nums[j] < target) { // checks the condition to make sure the sum is less than the target
                count++;
            }
        }
    }
    return count;
};
