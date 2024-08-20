// Given the root of a binary tree, return the average value of the nodes on each level in the form of an array. Answers within 10-5 of the actual answer will be accepted.

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
var averageOfLevels = function(root) {
    // edge case with empty tree
    if (!root) return [];

    const result = []; // empty list to hold averages
    const queue = [root]

    // breadth-first search
    while (queue.length > 0) {
        const levelSize = queue.length; // initial length with be 1 always since it's a root
        let levelSum = 0;

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift(); // de-queue the node by removing it from the array in place
            levelSum += node.val; // adds the value of the node returned to the sum of the level

            // adds the children nodes to queue if they exist
            // this will be used to calculate the next row
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        
        // pushes the average of all nodes in the row
        result.push(levelSum / levelSize);
    }

    return result;
};
