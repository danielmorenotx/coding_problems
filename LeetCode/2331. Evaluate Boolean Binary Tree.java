// https://leetcode.com/problems/evaluate-boolean-binary-tree/description/

// You are given the root of a full binary tree with the following properties:

// Leaf nodes have either the value 0 or 1, where 0 represents False and 1 represents True.
// Non-leaf nodes have either the value 2 or 3, where 2 represents the boolean OR and 3 represents the boolean AND.
// The evaluation of a node is as follows:

// If the node is a leaf node, the evaluation is the value of the node, i.e. True or False.
// Otherwise, evaluate the node's two children and apply the boolean operation of its value with the children's evaluations.
// Return the boolean result of evaluating the root node.

// A full binary tree is a binary tree where each node has either 0 or 2 children.

// A leaf node is a node that has zero children.

class Solution {
    public boolean evaluateTree(TreeNode root) {

        HashMap<Integer, Object> booleanMap = new HashMap<Integer, Object>() {{
            put(0, false);
            put(1, true);
            put(2, "OR");
            put(3, "AND");
        }};

        if (root.val == 0) return false;
        if (root.val == 1) return true;

        if (root.val == 2) {
            return evaluateTree(root.left) || evaluateTree(root.right);
        }
        
        return evaluateTree(root.left) && evaluateTree(root.right);

    }
}