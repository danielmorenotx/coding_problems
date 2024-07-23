/**
Given a non-empty special binary tree consisting of nodes with the non-negative value, where each node in this tree has exactly two or zero sub-node. If the node has two sub-nodes, then this node's value is the smaller value among its two sub-nodes. More formally, the property root.val = min(root.left.val, root.right.val) always holds.

Given such a binary tree, you need to output the second minimum value in the set made of all the nodes' value in the whole tree.

If no such second minimum value exists, output -1 instead.

 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findSecondMinimumValue = function(root) {

    if (!root.left || !root.right) return -1;

    let uniqueValues = new Set(); // set to hold unique values

    // helper function to traverse the tree node and add to the set
    // recursive function that will refer to itself until there is no node
    function traverseTree(node) {
        if (node) {
            uniqueValues.add(node.val);
            traverseTree(node.left);
            traverseTree(node.right);
        }
    }

    traverseTree(root) // this will populate the set with unique values from the tree
    
    let array = []; // array to hold values

    for (let element of uniqueValues) {
        array.push(element);
    }
    
    array.sort((a, b) => a - b);

    if (array.length === 1) {
        return -1;
    } else {
        return array[1];
    }
    
};
