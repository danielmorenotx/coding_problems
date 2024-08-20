// Given the root of a binary tree, return an array of the largest value in each row of the tree (0-indexed).

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
 * @return {number[]}
 */
var largestValues = function(root) {
    
    // edge case with empty tree
    if (!root) return [];

    const result = []; // empty array to hold results
    const queue = [root]; // initiates an array with the single root node so queue.length = 1

    // breadth-first search
    while (queue.length > 0) { // counts the nodes in the queue array
        const levelSize = queue.length;
        const rowNumbers = [];

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift(); // removes node from the queue
            rowNumbers.push(node.val); // pushes node to the rowNumber

            // populates queue with the next row from the current node
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        // Make sure rowNumbers is not empty before using Math.max
        if (rowNumbers.length > 0) {
            result.push(Math.max(...rowNumbers)); // push the maximum number from the row to the result
        }    
    }

    return result;
};
