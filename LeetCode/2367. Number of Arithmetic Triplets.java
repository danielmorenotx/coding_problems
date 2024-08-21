// https://leetcode.com/problems/number-of-arithmetic-triplets

// You are given a 0-indexed, strictly increasing integer array nums and a positive integer diff. A triplet (i, j, k) is an arithmetic triplet if the following conditions are met:
// i < j < k,
// nums[j] - nums[i] == diff, and
// nums[k] - nums[j] == diff.
// Return the number of unique arithmetic triplets.

class Solution {
    public int arithmeticTriplets(int[] nums, int diff) {
        HashSet<Integer> numSet = new HashSet<>();
        int arithTripletCount = 0;

        for (int num : nums) {
            if (numSet.contains(num - diff) && numSet.contains(num - 2 * diff)) {
                arithTripletCount++;
            }
            numSet.add(num);
        }

        return arithTripletCount;
    }
}
