/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public int findSecondMinimumValue(TreeNode root) {

        if (root.left == null || root.right == null) return -1;
        int leftValue = root.left.val;
        int rightValue = root.right.val;

        if (leftValue == root.val) {
            leftValue = findSecondMinimumValue(root.left);
        }

        if (rightValue == root.val) {
            rightValue = findSecondMinimumValue(root.right);
        }

        if (leftValue == -1) return rightValue;
        if (rightValue == -1) return leftValue;

        return Math.min(leftValue, rightValue);
    }
}
