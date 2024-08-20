// Given the root of a binary tree, return all root-to-leaf paths in any order.

// A leaf is a node with no children.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    
    // edge cases
    if (!root) return []; // empty tree

    const result = [] // empty list to hold paths
    
    // depth-first search
    // node is a binary tree node, and path is the value as a string
    function dfs(node, path) {
        // if the node is a leaf
        if (!node.left && !node.right) {
            result.push(path);
            return;
        }

        // recursive call of the left side
        if (node.left) {
            dfs(node.left, path + '->' + node.left.val);
        }

        // recursive call of the right side
        if (node.right) {
            dfs(node.right, path + '->' + node.right.val);
        }
    }

    // Start DFS from the root
    dfs(root, root.val.toString());
    
    return result;
};
