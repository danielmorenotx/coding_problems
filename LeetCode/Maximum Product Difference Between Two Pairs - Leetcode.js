/**
 * @param {number[]} nums
 * @return {number}

The product difference between two pairs (a, b) and (c, d) is defined as (a * b) - (c * d).

For example, the product difference between (5, 6) and (2, 7) is (5 * 6) - (2 * 7) = 16.
Given an integer array nums, choose four distinct indices w, x, y, and z such that the product difference between pairs (nums[w], nums[x]) and (nums[y], nums[z]) is maximized.

Return the maximum such product difference.

 */
var maxProductDifference = function(nums) {
    const n = nums.length; // find the length of the array
    
    nums.sort((a, b) => a - b); // sort in order

    // last two product minus first two product will be the max since it's sorted
    return (nums[n-1] * nums[n-2]) - (nums[0] * nums[1])
};
