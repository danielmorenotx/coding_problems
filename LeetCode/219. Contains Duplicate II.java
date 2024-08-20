// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

class Solution {
    public boolean containsNearbyDuplicate(int[] nums, int k) {
        // two nums must be equal
        // the absolute value of the first index minus the second index must be less than or equal to k

        HashMap<Integer, Integer> indexMap = new HashMap<>();

        for (int i = 0; i < nums.length; i++) {
            if (indexMap.containsKey(nums[i])) {
                if (i - indexMap.get(nums[i]) <= k) {
                    return true;
                }
            }
            indexMap.put(nums[i], i);
        }
        return false;
    }
}
