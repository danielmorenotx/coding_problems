// https://leetcode.com/problems/symmetric-tree/description/

// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

class Solution {
    public boolean isSymmetric(TreeNode root) {
        return isSymmetricDFS(root.left, root.right);
    }

    private boolean isSymmetricDFS(TreeNode left, TreeNode right) {
        if (left == null && right == null) return true;
        if (left == null || right == null) return false;

        return left.val == right.val && isSymmetricDFS(left.left, right.right) && isSymmetricDFS(left.right, right.left);
    }
}
