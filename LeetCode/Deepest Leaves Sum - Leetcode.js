// Given the root of a binary tree, return the sum of values of its deepest leaves.

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
 * @return {number}
 */
var deepestLeavesSum = function(root) {
    if (!root) return [];

    const queue = [root]; // initiates an array with the single root node so queue.length = 1
    let sum = 0; // keep track

    // breadth-first search
    while (queue.length > 0) {
        const levelSize = queue.length;
        sum = 0; // reset the sum

        for (let i = 0; i < levelSize; i++) {
            
            const node = queue.shift();
            sum += node.val; // adds node value to the sum

            // Add children nodes to the queue for the next level
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);

            // in the end the sum will be left with the final row
        }
    }

    return sum;
};
