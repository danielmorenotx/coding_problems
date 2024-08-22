// https://leetcode.com/problems/range-sum-of-bst/description/
// Given the root node of a binary search tree and two integers low and high, return the sum of values of all nodes with a value in the inclusive range [low, high].

class Solution {
    public int rangeSumBST(TreeNode root, int low, int high) {
        int sum = 0;

        if (root == null) return sum;

        if (root.val >= low && root.val <= high) {
            sum += root.val;
        }
        
        if (root.val > low) {
            sum += rangeSumBST(root.left, low, high);
        }
        
        if (root.val < high) {
            sum += rangeSumBST(root.right, low, high);
        }

        return sum;
    }
}
