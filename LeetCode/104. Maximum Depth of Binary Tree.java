// https://leetcode.com/problems/maximum-depth-of-binary-tree
// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

class Solution {
    public int maxDepth(TreeNode root) {
        if (root == null) return 0;

        if (root.left == null && root.right == null) return 1;

        int leftDepth = 0;
        int rightDepth = 0;

        if (root.right != null) {
            rightDepth = maxDepth(root.right);
        }

        if (root.left != null) {
            leftDepth = maxDepth(root.left);
        }

        if (rightDepth >= leftDepth) {
            return rightDepth + 1;
        } else {
            return leftDepth + 1;
        }
    }
}
